import logging
import argparse
from webargs import WebArgs
import base64
import yaml

logging.basicConfig(level=logging.INFO, format='%(asctime)s UTC %(levelname)s %(module)s(%(funcName)s) [%(process)d-%(thread)d-%(threadName)s]: %(message)s')
parser = argparse.ArgumentParser()
parser.add_argument('-f', '--file', help='Specify the configuration file. Default is input.yaml in current directory', nargs='?', default="input.yaml")
parser.add_argument('-p', '--port', help='Specify the tcp port for the web server. Default is 8000', nargs='?', default="8000")
args = parser.parse_args()

logging.info("Starting server on port %s " % args.port)
with open(r'inputs.yaml') as file:
    config = yaml.load(file, Loader=yaml.FullLoader)


def encode(text):
    try:
        message_bytes = text.encode()
        base64_bytes = base64.b64encode(message_bytes)
        base64_message = base64_bytes.decode()
    except:
        base64_message = "Error encoding"        
    return base64_message

def decode(text):
    try:
        base64_message = text
        base64_bytes = base64_message.encode('ascii')
        message_bytes = base64.b64decode(base64_bytes)
        message = message_bytes.decode('ascii')
    except:
        message = "Error decoding"    
    return message

server = WebArgs(port = args.port, config = config)
server.run()

while server.is_alive():
    msg = server.get()
    if msg:
        if( msg["coding"] == "encode"):
            text = "Line base64 encoded:\n" + encode(msg["line"]) + "\n\nFile base64 encoded:\n" + encode(msg["file"])
        else:
            text = "Line base64 decoded:\n" + decode(msg["line"]) + "\n\nFile base64 decoded:\n" + encode(msg["file"])
        print(text)
        server.put(text)
