import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        url: "http://localhost;8000",
        username: "guest",
        password: "guest",
        status: "starting",
        socket: null,
        input: {
        },
        inputLogin:{
          input_rows: [
            { id: "url", label: "Server URL", placeholder: "http(s)://<server>:<port>", information: "URL for socket.io server that this client is communicating with." },
            { id: "username", label: "Username" },
            { id: "password", label: "Password", type: "password"}
          ],
          values:{
            url: process.env.NODE_ENV === "development" ? "http://localhost:8000": window.location.href,
            username: "guest",
            password: "guest"
          }
        },
        output: {
          text: ""
        }
      }
    },
    mutations: {
      setStatus (state,payload) {
        state.status = payload
      },
      setState (state,payload) {
        if ( payload?.name in state ) {
          state[payload.name] = payload.value ? payload.value : null
        }
        else{
          return console.log (`No name: ${payload.name} found!`)
        }
      },
      setInputValue (state,payload) {
        if ( ! state[payload.name] ) { 
          return console.log (`No input name ${payload.name} found!`)
        }
        if ( ! state[payload.name].values ) {
          state[payload.name].values = {}
        }
        state[payload.name].values[payload.id] = payload.value
      },
      setInputRows (state,payload) {
        if ( ! state[payload.name] ) { 
          return console.log (`No input name ${payload.name} found!`)
        }
        let input = state[payload.name]
        input.input_rows = payload.input_rows
        if ( !input.values ) {
          input.values = {}
        }
        for (const row of input.input_rows) {
          if ( ! input.values[row.id] ) {
            input.values[row.id] = row.value
          }
        }
      },
      setOutputText (state,payload) {
        if ( ! state[payload.name] ) { 
          return console.log (`No output name ${payload.name} found!`)
        }
        state[payload.name].text = payload.text
      }

    }
  })

export default store
