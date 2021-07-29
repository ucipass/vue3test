from ioform import IOForm
from time import sleep
import json
frontend = IOForm()
frontend.config_output({})
input_rows = [ ]
input_rows.append( { "id": "id1"} )
input_rows.append( { "id": "id2",  "value": "guest", "label": "Identity2", "placeholder": "Enter id2 here...", "information": "Put some infor here"} )
input_rows.append( { "id": "password",  "label": "Password", "type": "password"} )
select = { 
  "id": "region",  
  "label": "AWS Region", 
  "type": "select", 
  "value": "us-east-1", 
  "options": [ 
      { "value": "us-east-1", "text": "US East 1(Ohio)"},
      { "value": "us-east-2", "text": "US East 2(N. Virginia)"},
      { "value": "us-west-1", "text": "US West 1(N. California)"},
      { "value": "us-west-2", "text": "US West 2(Oregon)"},
    ] 
  }
input_rows.append( select )
input_rows.append( { "id": "description",  "label": "Description", "type": "textarea"} )
input_rows.append( { "id": "textfile",  "label": "Text File", "type": "file"} )
frontend.input_rows( input_rows )
input = None
while not input:
  input = frontend.get()
frontend.config_input ( {} )
frontend.config_output( {"name": "output", "text": json.dumps(input, indent=4)})
sleep(2)

