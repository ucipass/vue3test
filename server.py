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

HTML_PATH = os.path.join( os.getcwd(), "dist")

q_input = Queue()
q_output = Queue()

sio = socketio.AsyncServer(async_mode='tornado',cors_allowed_origins='*')
@sio.event
async def connect(sid, environ):
    print('connect ', sid)
    print(environ)
@sio.event
async def disconnect(sid):
    lastsid = sid
    print('disconnect ', lastsid)
@sio.event
async def data(sid, msg):
    logging.debug("Received Message %s from %s" %(msg, sid) )
    q_input.put(msg,True)
    return "Received Successfully"
   
async def start_tornado(port):
    app = tornado.web.Application([
        # (r"/submit", MainHandler),
        (r"/socket.io/", socketio.get_tornado_handler(sio)),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": HTML_PATH , "default_filename": "index.html" })
    ])
    app.listen(port)

async def send_outputs_from_queue():     
     logging.debug("Send Sockets Loop Started!")
     while True:
        try:
            json = q_output.get(False)
            logging.info("Sending event")
            await sio.emit( "data", json )
        except Empty:
            await asyncio.sleep(1)   


async def async_services(port):
    await start_tornado(port)
    await asyncio.create_task( send_outputs_from_queue() )

def tornadoThread(param):
    asyncio.run( async_services(args.port) )

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s UTC %(levelname)s %(module)s(%(funcName)s) [%(process)d-%(thread)d-%(threadName)s]: %(message)s')
parser = argparse.ArgumentParser()
parser.add_argument('-f', '--file', help='Specify the configuration file. Default is config.yaml in current directory', nargs='?', default="config.yaml")
parser.add_argument('-p', '--port', help='Specify the tcp port for the web server. Default is 8000', nargs='?', default="8000")
args = parser.parse_args()

logging.info("Starting server on port %s " % args.port)
thread = Thread(target = tornadoThread, args = (10, ) , name="TornadoThread")
thread.start()

while True:
    try:
        item=q_input.get()
        logging.debug("Pulled %s out of queue" %item)
    except KeyboardInterrupt:
        logging.critical("Keyboard interrupt occurred on thread, quitting!")
        sys.exit()
    except Exception as ex:
        logging.exception("TASK MAY HAVE BEEN IMPROPERLY HANDLED: " + str(ex) + " ---- " + str(sys.exc_info()[0]))