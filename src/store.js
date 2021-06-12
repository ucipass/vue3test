import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        status: "starting",
        input1: {
        },
        output1: {
          text: ""
        }
      }
    },
    mutations: {
      setInputValue (state,payload) {
        console.log("VUEX Values",payload)
        if ( ! state[payload.name] ) { 
          return console.log (`No input name ${payload.name} found!`)
        }
        if ( ! state[payload.name].values ) {
          state[payload.name].values = {}
        }
        state[payload.name].values[payload.id] = payload.value
      },
      setInputRows (state,payload) {
        console.log("VUEX Rows",payload)
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
        // console.log("VUEX Rows",payload)
        if ( ! state[payload.name] ) { 
          return console.log (`No output name ${payload.name} found!`)
        }
        state[payload.name].text = payload.text
      }

    }
  })

export default store
