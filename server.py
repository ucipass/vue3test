import queue
import sys
import os
from queue import Queue
from queue import Empty
from threading import Thread
from threading import RLock
import getopt
import logging
import csv
import argparse
import asyncio
import datetime
import tornado.ioloop
import tornado.web
import socketio
import select
import datetime
import time
import yaml
import json
import signal
signal.signal(signal.SIGINT, signal.default_int_handler)

HTML_PATH = os.path.join( os.getcwd(), "dist")

q_input = Queue()
q_output = Queue()

sio = socketio.AsyncServer(async_mode='tornado',cors_allowed_origins='*')
@sio.event
async def connect(sid, environ):
    print('connect ', sid)
    # print(environ)
@sio.event
async def disconnect(sid):
    lastsid = sid
    print('disconnect ', lastsid)
@sio.event
async def data(sid, msg):
    logging.debug("Received Message %s from %s" %(msg, sid) )
    q_input.put(msg,True)
    return "Received Successfully"
   
@sio.event
async def config(sid,msg):
    logging.debug("Config requested from %s" %(sid) )
    with open(r'dist/inputs.yaml') as file:
        json = yaml.load(file, Loader=yaml.FullLoader)
        return json
   
async def start_tornado(port):
    app = tornado.web.Application([
        # (r"/submit", MainHandler),
        (r"/socket.io/", socketio.get_tornado_handler(sio)),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": HTML_PATH , "default_filename": "index.html" })
    ])
    try:
        app.listen(port)
        return True
    except OSError:
        logging.critical("Can't listen on port %s" %port)
        return False

async def send_outputs_from_queue():     
     logging.debug("Send Sockets Loop Started!")
     while True:
        try:
            json = q_output.get(False)
            logging.info("Sending event")
            await sio.emit( "data", json )
        except Empty:
            await asyncio.sleep(0.1)   

async def async_services(port):
    if await start_tornado(port):
        await asyncio.create_task( send_outputs_from_queue() )

def tornadoThread(param):
    asyncio.run( async_services(args.port) )

logging.basicConfig(level=logging.INFO, format='%(asctime)s UTC %(levelname)s %(module)s(%(funcName)s) [%(process)d-%(thread)d-%(threadName)s]: %(message)s')
parser = argparse.ArgumentParser()
parser.add_argument('-f', '--file', help='Specify the configuration file. Default is config.yaml in current directory', nargs='?', default="config.yaml")
parser.add_argument('-p', '--port', help='Specify the tcp port for the web server. Default is 8000', nargs='?', default="8000")
args = parser.parse_args()

logging.info("Starting server on port %s " % args.port)
thread = Thread(target = tornadoThread, args = (10, ) , name="TornadoThread")
thread.daemon = True
thread.start()

while thread.is_alive():
    try:
        item=q_input.get(timeout=1) # Timeout is set to avoid blocking ctrl+c
        output = json.dumps(item, sort_keys=False, indent=4)
        logging.critical("Pulled item out of queue.")
        q_output.put("RECEIVED:\n"+output+"\n")
    except Empty:
        logging.debug("Nothing in queue to process.")       
    except KeyboardInterrupt:
        logging.critical("Keyboard interrupt occurred on thread, quitting main!")
        sys.exit()
    except Exception as ex:
        logging.exception("TASK MAY HAVE BEEN IMPROPERLY HANDLED: " + str(ex) + " ---- " + str(sys.exc_info()[0]))
        sys.exit()