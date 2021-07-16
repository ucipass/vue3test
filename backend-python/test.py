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
  "id": "choice",  
  "label": "My Choice", 
  "type": "select", 
  "value": "choice1", 
  "options": [ 
      { "text": "Choice1", "value": "choice1"},
      { "text": "Choice2", "value": "choice2"},
      { "text": "Choice3", "value": "choice3"},
      { "text": "Choice4", "value": "choice4"},
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

