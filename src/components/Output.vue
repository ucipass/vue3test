<template>
    <div  id="right-main-column" class="d-flex flex-column flex-grow-1 overflow-auto">
      <div class="d-flex flex-column flex-fill">
        <div >
          <div class="btn-group mr-3">
            <button type="button" class="btn btn-small btn-outline-secondary" >
              <i class="bi-save2-fill"  ></i>
            </button>
            <button type="button" class="btn btn-small btn-outline-secondary" >
              <i class="bi-x-circle-fill" ></i>
            </button>
          </div>
        </div>
        <textarea class="d-flex flex-grow-1 h-100 form-control terminal text-white bg-dark" id="TextAreaOutput" :value="text" ></textarea>
        
      </div>
    </div>
</template>

<script>
export default {
  name: 'Output',
  props: {
    text: String
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
.terminal {
    padding: 8px;
    font-family: courier new;
}
</style>