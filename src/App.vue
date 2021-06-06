<template>
<main v-show="!authenticated"  class="form-signin">
  <form>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating mb-2">
      <input type="text" class="form-control" id="floatingInput" placeholder="Username">
      <label for="floatingInput">Username</label>
    </div>

    <div class="form-floating mb-2">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
  </form>
</main>
  <Input v-show="authenticated"  :config="config_input"/>
</template>

<script>
import Input from './components/Input.vue'
import { io } from "socket.io-client";

export default {
  name: 'App',
  components: {
    Input
  },
  data () {
    return {
      authenticated: false,
      config_input: {
        id: "testinput1",
        input_rows : [
          {
            "id": "hostname",
            "label": "Hostname",
            "placeholder": "Enter hostname...",
            "information": "This name needs to be unique and will be used for file naming too.",
            "value" : ""
          },
          {
            "id": "username",
            "label": "Username",
            "placeholder": "Enter Username...",
            "type": "text",
            "information": "SSH Username",
            "value": ""
          },
          {
            "id": "password",
            "label": "Password",
            "placeholder": "Enter password...",
            "type": "password",
            "information": "Password",
            "value": ""
          },                       
          {
            "id": "enabled",
            "label": "Enabled",
            "information": "Select Enabled or Disabled",
            options : [ 
              {value: true, text: "Enabled"} , 
              {value: false, text: "Disabled"} 
              ],
            "type" : "select"
          }
        ]
      }
    }
  },
  mounted(){
    // let url = "http://localhost:8000"
    let url = window.location.href
    this.socket = io(url);
    let socket = this.socket
    // let streams = this.streams
    socket.on("connect", () => {
      this.socket_io_status="connected"
      console.log("Socket.io connected. Id:",socket.id); 
      setInterval(() => {
        socket.emit("data", "TEST",(answer) => {
          console.log("Received Acknowledgement:", answer)
        });
      }, 1000);
    });

    socket.onAny((event,data) => {
      let hostname = data.hostname
      let output = data.output
      let host_index = this.hostnames.indexOf(hostname)
      if ( event == "data" && typeof data == "object" && host_index >= 0 ) {
        console.log(`Incoming event: ${event} for hostname: ${hostname}`);
        let host = this.hosts[host_index]
        host.output += output
        host.status = "completed"
      }else{
        console.log(`Incoming event "${event}" is invalid!`);
      }
    
    });

    socket.on('connect_error', () => {
      this.socket_io_status="connection error"
      console.log("Socket.io connection error")
    })        
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
