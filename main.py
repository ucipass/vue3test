import yaml
from coding import coding
from frontend import FrontEnd

PORT = 8000
YAML_TEXT = """
---
- id: line
  value: ''
  type: text
  label: Line
  placeholder: Line to be base64 coded
  information: Line to be base64 coded
- id: file
  value: ''
  type: file
  label: File
  placeholder: Select file to be base64 coded
  information: File to be base64 coded
- id: coding
  value: encode
  type: select
  label: Base64 Coding
  information: Select Enabled or Disabled
  options:
  - value: encode
    text: Encode
  - value: decode
    text: Decode
"""

config = yaml.load(YAML_TEXT, Loader=yaml.FullLoader)

# frontend = FrontEnd(port = PORT, config = config, certfile="certfile.pem", keyfile="keyfile.pem")
frontend = FrontEnd(port = PORT, config = config)
frontend.run()

while frontend.is_alive():
    msg = frontend.get()
    if msg:
      frontend.put( coding(msg) )
