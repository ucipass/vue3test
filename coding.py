import base64

def encode(text):
    message_bytes = text.encode('ascii')
    base64_bytes = base64.b64encode(message_bytes)
    base64_message = base64_bytes.decode('ascii')
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

def coding(msg):
    if( msg["coding"] == "encode"):
        text = "Line base64 encoded:\n" + encode(msg["line"]) + "\n\nFile base64 encoded:\n" + encode(msg["file"])
    else:
        text = "Line base64 decoded:\n" + decode(msg["line"]) + "\n\nFile base64 decoded:\n" + encode(msg["file"])
    print(text)
    return text