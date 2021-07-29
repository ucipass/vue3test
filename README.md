# Python example

## Installation
```
pip install ioform
```

## Initialize the webserver and configure a simple input form with a single input row "example"
```
from ioform import IOForm
frontend = IOForm()
input_rows = [ { "id": "example", "value": "Bada-bing-bada-boom"}  ]
frontend.input_rows ( input_rows )
```
## It is possible to dynamically modify the web frontend input fields
```
input_rows.append( { "id": "key",     "value": "AAAABBBBCCC", "type": "text", "label": "AWS Key", "information": "Add your AWS key here..."} )
frontend.input_rows ( input_rows )
input_rows.append( { "id": "secret",  "value": "MySecretKey", "type": "password", "label": "AWS Secret", "information": "Add your AWS secret here..."} )
frontend.input_rows ( input_rows )
```
## Submit 3 different input forms on the web page with different inputs, The messages are queued up and can be retrieved by python
```
frontend.get()
frontend.get()
frontend.get()
```
## It is possible to dynamically provide output values in a textarea
```
frontend.put("random message 1 \n")
frontend.put("random message 2 \n")
frontend.put("random message 3 \n")
```



# Vue.js frontend setup
This is not needed to use the python package.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
