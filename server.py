import logging
import argparse
from webargs import WebArgs

logging.basicConfig(level=logging.INFO, format='%(asctime)s UTC %(levelname)s %(module)s(%(funcName)s) [%(process)d-%(thread)d-%(threadName)s]: %(message)s')
parser = argparse.ArgumentParser()
parser.add_argument('-f', '--file', help='Specify the configuration file. Default is config.yaml in current directory', nargs='?', default="config.yaml")
parser.add_argument('-p', '--port', help='Specify the tcp port for the web server. Default is 8000', nargs='?', default="8000")
args = parser.parse_args()

logging.info("Starting server on port %s " % args.port)
server = WebArgs(args.port)
server.run()

while server.is_alive():
    msg = server.get()
    if msg:
        server.put("RECEIVED\n")
