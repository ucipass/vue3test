<template>
<div class="pt-1 pb-1 bg-dark text-white">
  <div class="d-flex align-items-center justify-content-between">
  <div class="form-floating ms-1">
      <input readonly type="text" class="form-control bg-dark text-white" id="floatingStatus" placeholder="Status" :value="$store.state.status">
      <label for="floatingStatus">Current Status</label>
  </div>        
  <div>
      <button 
        type="button" 
        class="btn btn-outline-light me-1"
        data-bs-toggle="modal" 
        data-bs-target="#loginModal"
      >Login
      </button>
  </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="loginModalLabel">Server Login</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-dark">
          <InputForm :name="name"></InputForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="login" >Save changes</button>
        </div>
      </div>
    </div>
  </div>    

</div>  
</template>
<script>
import InputForm from './InputForm.vue'
export default {
  name: 'Headers',
  components: {
    InputForm
  },
  data() {
    return {
      name: "inputLogin"
    }
  },
  computed: {
      count (){
          return this.$store.state.count
      },
  },  
  methods:{
    login: async function () {
      let input  = this.$store.state[this.name].values
      let socket = this.$store.state.socket
      await socket.stop()
      socket.username = input.username
      socket.password = input.password
      socket.url = input.url
      socket.start()
      .then( () =>  socket.getConfig() )
      .then ( (input_rows) => {
        this.$store.commit("setInputRows", { name: "input", input_rows: input_rows} ) 
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }, 
  mounted(){
    console.log("Mounted: Header ")
  }
}

</script>