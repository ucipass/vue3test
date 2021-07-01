<template>
  <div id="app" class="d-flex flex-column p-0">
    <Header/>
    <InputForm :name="input_name" class="border border-2 rounded-3 mt-2 ms-2 me-2 p-2 d-flex overflow-auto">
      <template v-slot:footer>
        <button class="btn btn-primary" @click='sendData()'>Send</button>
      </template>      
    </InputForm>
    <Output :name="output_name" class="m-2"/>
  </div>
  <Login v-if="false" />
</template>

<script>
import Header from './components/Header.vue'
import InputForm from './components/InputForm.vue'
import Output from './components/Output.vue';
import SocketIoClient  from './components/SocketIoClient.js';


export default {
  name: 'App',
  components: {
    InputForm,Output,Header
  },
  data () {
    return {
      input_name: "input",
      output_name: "output",
      url: process.env.NODE_ENV === "development" ? "http://localhost:8000": window.location.href,
      test_input_rows:  [
        {"id": "id1"},
        {"id": "id2"},
        {"id": "id3"},
        {"id": "id4"},
        {"id": "id5"},
        {"id": "id6"},
        {"id": "id7"},
        {"id": "id8"},
        {"id": "text1", "type": "textarea"},
        {"id": "id2"}
      ]       
    }
  },
  methods:{
    sendData: function () {
      let socket = this.$store.state.socket
      let input_values = this.$store.state[this.input_name].values
      socket.sendData(input_values) // socket.io will populate output automatically in store.js
    }
  },
  mounted(){
    let socket = new SocketIoClient(this.url)
    let store = this.$store
    store.commit("setState", {name: "socket", value : socket })  //store socket.io in store.js
    socket.start()
    .then( () =>  socket.getConfig() )
    .then ( (input_rows) => {
      store.commit("setInputRows", { name: this.input_name, input_rows: input_rows} ) 
    })
    .catch((error) => {
      console.log(error)
      store.commit("setInputRows", { name: "input", input_rows: this.test_input_rows })
    })
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
