from queue import Queue
from queue import Empty
from threading import Thread
from threading import RLock
import os
import logging
import asyncio
import tornado.ioloop
import tornado.web
import socketio
import time
import yaml
import os

HTML_PATH = os.path.join( os.getcwd(), "dist")

class WebArgs:
    def __init__(self, port = 8000, config = {} ):
        self.port = port
        self.config = config
        self.q_input = Queue()
        self.q_output = Queue()
        self.sio = socketio.AsyncServer(async_mode='tornado',cors_allowed_origins='*')
        self.thread = None

    def run(self):
        self.thread = t1 = Thread(target=self.start_thread2 , name="TornadoThread")
        self.thread.daemon = True
        self.thread.start()

    def is_alive(self):
        return self.thread.is_alive()
    
    def get(self):
        if self.q_input.empty():
            time.sleep(0.1)
            return None
        else:
            return self.q_input.get()

    def put(self,msg):
        self.q_output.put(msg)
    
    def start_thread2(self):
        asyncio.run( self.start_thread() )

    async def start_thread(self):
        self.sio = socketio.AsyncServer(async_mode='tornado',cors_allowed_origins='*')
        @self.sio.event
        async def connect(sid, environ):
            logging.warning("Connected with id  %s " %( sid) )
        @self.sio.event
        async def disconnect(sid):
            lastsid = sid
            logging.warning("Disconnected with id  %s " %( lastsid) )
        @self.sio.event
        async def data(sid, msg):
            logging.debug("Received Message %s from %s" %(msg, sid) )
            self.q_input.put(msg,True)
            return "Received Successfully"
        @self.sio.event
        async def config(sid,msg):
            logging.debug("Config requested from %s" %(sid) )
            # with open(r'dist/inputs.yaml') as file:
            #     json = yaml.load(file, Loader=yaml.FullLoader)
            #     return json
            return self.config

        if await self.start_tornado():
            await asyncio.create_task( self.send_outputs_from_queue() )

    async def start_tornado(self):
        app = tornado.web.Application([
            # (r"/submit", MainHandler),
            (r"/socket.io/", socketio.get_tornado_handler(self.sio)),
            (r"/(.*)", tornado.web.StaticFileHandler, {"path": HTML_PATH , "default_filename": "index.html" })
        ])
        try:
            app.listen(self.port)
            return True
        except OSError:
            logging.critical("Can't listen on port %s" %self.port)
            return False

    async def send_outputs_from_queue(self):     
        logging.debug("Send Sockets Loop Started!")
        while True:
            try:
                json = self.q_output.get(False)
                logging.info("Sending event")
                await self.sio.emit( "data", json )
            except Empty:
                await asyncio.sleep(0.1)
