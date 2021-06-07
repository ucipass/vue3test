<template>
  <div id="app" class="d-flex flex-column p-0">
    <!-- HEADER -->
    <div class="pt-1 pb-1 bg-dark text-white">
        <div class="d-flex align-items-center justify-content-between">
          <div class="form-floating ms-1">
            <input readonly type="text" class="form-control bg-dark text-white" id="floatingStatus" placeholder="Status" :value="status">
            <label for="floatingStatus">Current Status</label>
          </div>        
          <div>
            <button type="button" class="btn btn-outline-light me-1">Login</button>
          </div>
        </div>
    </div>
    <!-- MAIN -->
    <div v-show="authenticated" class="d-flex flex-column flex-grow-1 m-0 overflow-auto">
      <div class="d-flex border border-2 rounded-3 m-2">
        <Input ref="input" class="d-flex flex-grow-1 m-2 " :config="config_input">
          <template v-slot:footer>
            <button class="btn btn-primary" @click='sendData()'>Send</button>
          </template>
        </Input>
      </div>
      <Output :text="output" class="d-flex flex-grow-1 border border-2 rounded-3 m-2"/>
    </div>    
  </div>

  <Login v-show="!authenticated" />
  


</template>

<script>
import Input from './components/Input.vue'
import Login from './components/Login.vue'
import Output from './components/Output.vue';
import { io } from "socket.io-client";
// import axios from 'axios';
// import YAML from 'yaml'

export default {
  name: 'App',
  components: {
    Login,Input,Output
  },
  data () {
    return {
      socket: {},
      authenticated: false,
      connected: false,
      status: "starting",
      output: "",
      url: process.env.NODE_ENV === "development" ? "http://localhost:8000": window.location.href ,
      config_input: {
        id: "testinput1",
        input_rows : []
      }
    }
  },
  methods:{
    sendData: function () {
      this.socket.emit("data", this.$refs.input.values ,(msg)=>{
        console.log(msg)
      })

    }
  },
  mounted(){
    this.socket = io(this.url, { reconnection: false });
    let socket = this.socket

    const tryReconnect = () => {
      setTimeout(() => {
        socket.io.open((err) => {
          if (err) {
            tryReconnect();
          }
        });
      }, 2000);
    }

    socket.on("connect", () => {
      this.connected = true
      this.status = "connected"
      console.log("Socket.io connected. Id:",socket.id); 
      socket.emit("config","guest",(msg)=>{
        this.config_input.input_rows = msg
        this.authenticated = true
        this.status = "authenticated"
        console.log("Configuration Received")
      })
    });

    socket.io.on("close", tryReconnect);

    socket.on('connect_error', () => {
      this.status = "Connection Error"
      tryReconnect()
    })        
    socket.on('disconnect', () => {
      console.log("Socket.io disconnect")
      this.status = "disconnected"
    })        

    socket.onAny((event,data) => {
      if ( event == "data" && typeof data == "string" ) {
        console.log(`Incoming data: ${data}`);
        this.output += data
      }else{
        console.log(`Incoming event "${event}" is invalid!`);
      }
    
    });
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

</style>
