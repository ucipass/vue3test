<template>
<div :id="id" class="mt-3 mb-3 p-0">

    <!-- MAIN INPUT -->
    <div v-if="inputs.length" class="w-100">

      <!-- HEADER -->
      <div >
        <slot name="header" v-bind:header="values">
        </slot>
      </div>
      <!-- BODY WITH DYNAMIC INPUTS   -->
      <div class="d-flex flex-grow-1" >
        <div class="d-flex flex-column justify-content-between">
            <div v-for="input in inputs" :key="input.id" class="m-1 d-flex justify-content-end">
                  <label class="m-1 float-right text-nowrap" :for="input.id">{{input.label}}</label>
                  <!-- <span class="m-1 float-right"  v-tooltip:left="input.information"> -->
                  <span class="m-1 float-right"  data-bs-toggle="tooltip" data-bs-placement="bottom" :title="input.information">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>                
                  </span>
            </div>
        </div>            
        <div class="d-flex flex-column justify-content-between w-100">
            <div v-for="input in inputs" :key="input.id" class="m-1">
                    <select v-if="input.type=='select'" 
                      class="form-select" 
                      v-model="values[input.id]" 
                      aria-label="select-input">
                      <option v-for="item in input.options" :key="item.text" :value="item.value" >{{item.text}}</option>
                    </select>                    
                    <input v-else 
                      :class="input.class" 
                      :type="input.type" 
                      :name="input.id"
                      :id="config.id + input.id" 
                      :placeholder="input.placeholder" 
                      v-model="values[input.id]" 
                      @change="inputChange"
                      @click="inputClick"
                    >
            </div>            
        </div>
      </div>
      <!-- FOOTER -->
      <div class="d-flex justify-content-end m-1">
        <slot name="footer" v-bind:footer="values">
        <!-- FOOTER FALLBACK -->    
        </slot>
      </div>

    </div>    

    <!-- ALERT IF NO INPUT CONFIG AVAILABLE -->
    <div v-else class="alert alert-danger w-100" role="alert">
      <p>{{error_msg}}</p>
    </div>
 
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'Input',
  props: {
    config: Object
  },
  data () {
    return {
      test: [ {value: true, text: "Enabled"} , {value: false, text: "Disabled"} ],
      values: {},
      buffers: {},
      error_msg: "Form configuration is not available" 
    }
  },
  computed: {
    id: function(){
        return this.config?.id ? this.config.id : uuidv4();
    },
    // input fields are computed using the config prop
    inputs: function () {
      if ( this.config?.input_rows && this.config?.id ) { //config.id is needed to set unique element ids for templates
        let values = this.values
        let inputs =  this.config.input_rows.filter( item => item.id )
        .map((item)=>{
          values[item.id] = "value" in item ? item.value : "options" in item ? item.options[0].value : null
          return {
            id:  item.id,
            options: item.options,
            label: item.label ? item.label : item.id,
            type: (item.type ? item.type : "text"),
            placeholder: item.placeholder ? item.placeholder : "",
            information: item.information ? item.information : "",
            class: item.type == "checkbox" ? "form-check-input checkbox-inline" : "form-control"
          }
        })
        return inputs
      }
      else{
        return []
      }
   }
  },
  methods:{
    inputClick: function ( ev ) {
      if ( ev?.target?.type == "file") {
        ev.target.value = ""
      }
    },
    inputChange: function ( ev ) {
      if (ev?.target?.files?.length){
        let buffers = this.buffers
        const file = ev.target.files[0];
        const name = ev.target.name
        const reader = new FileReader();
        reader.onload = (e) => {
          buffers[name] = e.target.result
          }
        reader.readAsText(file);        
      }
    }
  },
  mounted: function () {
    console.log("Mounted: Input:", this.config?.id ? this.config.id : "NO-ID-SET")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>