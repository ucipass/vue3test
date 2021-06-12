<template>
  <div class="pt-1 pb-1 bg-dark text-white">
      <div class="d-flex align-items-center justify-content-between">
      <div class="form-floating ms-1">
          <input readonly type="text" class="form-control bg-dark text-white" id="floatingStatus" placeholder="Status" :value="$store.state.status">
          <label for="floatingStatus">Current Status</label>
      </div>        
      <div>
          <button type="button" class="btn btn-outline-light me-1">Login</button>
      </div>
      </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
export default {
  name: 'Headers',
  computed: {
      count (){
          return this.$store.state.count
      },
      
  },  
  mounted(){
    console.log("Mounted: Header ")
  }
}

</script>