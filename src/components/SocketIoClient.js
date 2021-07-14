import { io } from "socket.io-client";
import  store from "../store.js"

const log = console
class SocketIoClient  {
    constructor(url,username,password) {
        if(typeof username === 'object' && username !== null){
            this.username = username.name 
            this.password = username.token
            this.url = username.url
        }else{
            this.username = username ? username : "anonymous"
            this.password = password ? password : "anonymous"
            this.url = url          
        }

        try {
            this.url = url
        } catch (error) {
            console.log("INVALID URL:", this.url)
        }   

        this.sio_url = this.url.origin
        this.sio_path = new URL("socket.io", this.url )
        this.sio_opts = { 
            reconnection: true, 
            path: this.sio_path 
        }

        this.connectionRetryMs = 10000  // if connection fails retry
        this.socket = null
        this.reconnectAttempt = 0
        this.stopped = false
        this.socketId = null
        this.auth = false
        this.log = log
        this.proxy = null
    }


    async start(){
      this.socket = io(this.url, { reconnection: false });
      let socket = this.socket
      let resolve,reject
      let p = new Promise((res, rej) => { resolve = res, reject = rej });

      const tryReconnect = () => {
        store.commit('setStatus', `Reconnecting...`)
        setTimeout(() => {
          socket.io.open((err) => {
            if (err) {
              tryReconnect();
            }
          });
        }, 2000);
      }

      socket.on("connect", () => {
        this.socketId = socket.id
        console.log("Socket.io connected with id:", socket.id);
        store.commit('setStatus', "connected")
        resolve(true);
      });

      socket.on('disconnect', (reason) => {
          console.log("Socket.io disconnect with id:", this.socketId, "reason:", reason)
          store.commit('setStatus', `Disconnected`)
      }) 

      socket.on("connect_error", (error) => {
        if (! this.socketId){
          store.commit('setStatus', `Connection error: ${error}`)
          reject(error)
        }
      });

      socket.io.on("close", tryReconnect);

      socket.onAny((event,data) => {
        if ( event == "data" && typeof data == "string" ) {
          let text = store.state.output.text + data //append
          let payload = { name: "output", value: { text: text } }
          store.commit("setState", payload )
        }
        else if ( event == "data" && typeof data == "object" && data.name == "input") {
          console.log(data)
          let input = data.value
          if ( ! input.values ) input.values = {}
          let payload = { name: "input", value: input }
          store.commit("setState", payload)
        }
        else{
          console.log(`Incoming event "${event}" is invalid!`);
        }   
      })
      
      return p
    }


    
    async stop(){
      let socket = this.socket
      while ( socket && socket.connected){
        socket.disconnect(true)
        await new Promise((resolve) => {
            setTimeout(resolve, 100);
        });
      }
      return (true)       
    }


    getConfig(){
      return new Promise((resolve, reject) => {
        try {
          this.socket.emit("config","guest",(msg)=>{
            resolve(msg)
          })
        } catch (error) {
          reject(error)
        }          
      });
    }


    sendData(data){
      return new Promise((resolve, reject) => {
        try {
          this.socket.emit("data", data ,(msg)=>{
            resolve(msg)
          })
        } catch (error) {
          reject(error)
        }          
      });
    }


}

export default SocketIoClient