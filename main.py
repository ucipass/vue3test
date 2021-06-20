import yaml
import argparse
from frontend import FrontEnd

parser = argparse.ArgumentParser()
parser.add_argument('-p', '--port', help='Specify the tcp port for the web server. Default is 8000', nargs='?', default="8000")
args = parser.parse_args()

YAML_TEXT = """
---
- id: number1
  value: '8'
  type: text
  label: Number 1
  placeholder: First number 
  information: First number 
- id: number2
  value: '2'
  type: text
  label: Number 2
  placeholder: Second number
  information: Second number
- id: operation
  value: addition 
  type: select
  label: Operation
  information: Select operation tupe for number1 (operation) number1
  options:
  - value: addition
    text: addition
  - value: subtraction
    text: subtraction
  - value: multiplication
    text: multiplication
  - value: division
    text: division
"""

config = yaml.load(YAML_TEXT, Loader=yaml.FullLoader)

# frontend = FrontEnd(port = args.port, config = config, certfile="certfile.pem", keyfile="keyfile.pem") # if https is needed cert files are auto generated if missing
frontend = FrontEnd(port = args.port, config = config)
frontend.run()

while frontend.is_alive():
    msg = frontend.get()
    if msg:
      if not msg["number1"].isnumeric() or not msg["number2"].isnumeric():
        frontend.put( "Invalid inputs '%s' and '%s' \n" %(msg["number1"],msg["number2"]) )
        continue
      val1 = float(msg["number1"])
      val2 = float(msg["number2"])
      if   msg["operation"] == "addition":
        frontend.put( str(val1 + val2) + "\n" )
      elif msg["operation"] == "subtraction":
        frontend.put( str(val1 - val2) + "\n" )
      elif msg["operation"] == "multiplication":
        frontend.put( str(val1 * val2) + "\n" )
      elif msg["operation"] == "division":
        frontend.put( str(val1 / val2) + "\n" )
        





