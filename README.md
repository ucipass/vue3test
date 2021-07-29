# Web frontend form controlled from python
The idea behind this library is to provide a web frontend for python programs in order to manage user inputs and provide feedback on the web gui.
The input and output fields can be dynamically populated by just using python calls.
## Installation
```
pip install ioform
```
## Example
![grab-landing-page](https://raw.githubusercontent.com/ucipass/vue3test/3a7efbdeac4c68f7bdb492e83fc88631212c0eb3/ioform.gif)

## Description
### Initialize the web frontend with a single input row "example".
```
from ioform import IOForm
frontend = IOForm()
input_rows = [ { "id": "example", "value": "Bada-bing-bada-boom"}  ]
frontend.input_rows ( input_rows )
```
### Dynamically modify the web frontend input fields.
```
input_rows.append( { "id": "key",     "value": "AAAABBBBCCC", "type": "text", "label": "AWS Key", "information": "Add your AWS key here..."} )
frontend.input_rows ( input_rows )
input_rows.append( { "id": "secret",  "value": "MySecretKey", "type": "password", "label": "AWS Secret", "information": "Add your AWS secret here..."} )
frontend.input_rows ( input_rows )
```
### Submit forms with different data and retrieve data from queue in python.
```
frontend.get()
frontend.get()
frontend.get()
```
### Send output values to the frontend GUI.
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
