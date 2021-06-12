<template>
  <div id="app" class="d-flex flex-column p-0">
    <Header/>
    <Input :name="input_name" class="border border-2 rounded-3 mt-2 ms-2 me-2 p-2 d-flex overflow-auto">
      <template v-slot:footer>
        <button class="btn btn-primary" @click='sendData()'>Send</button>
      </template>      
    </Input>
    <Output :name="'output1'" class="m-2"/>
  </div>
  <Login v-if="false" />
</template>

<script>
import Header from './components/Header.vue'
import Input from './components/Input.vue'
import Login from './components/Login.vue'
import Output from './components/Output.vue';
import { io } from "socket.io-client";


export default {
  name: 'App',
  components: {
    Login,Input,Output,Header
  },
  data () {
    return {
      socket: {},
      input_name: "input1",
      output_name: "output1",
      output: "",
      url: process.env.NODE_ENV === "development" ? "http://localhost:8000": window.location.href ,
    }
  },
  methods:{
    sendData: function () {
      this.socket.emit("data", this.$store.state.input1.values ,(msg)=>{
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
      this.$store.state.status = "connected"
      // console.log("Socket.io connected. Id:",socket.id); 
      socket.emit("config","guest",(msg)=>{
        let input_rows = msg
        this.$store.commit("setInputRows", { name: this.input_name, input_rows: input_rows} )
        this.$store.state.status = "authenticated"
      })
    });

    socket.io.on("close", tryReconnect);

    socket.on('connect_error', () => {
      this.$store.state.status = "Connection Error"
      tryReconnect()
    })        
    socket.on('disconnect', () => {
      console.log("Socket.io disconnect")
      this.$store.state.status = "disconnected"
    })        

    socket.onAny((event,data) => {
      if ( event == "data" && typeof data == "string" ) {
        console.log(`Incoming data: ${data}`);
        this.$store.commit("setOutputText", {name: this.output_name, text: data}) 
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
