import { createApp } from 'vue'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

createApp(App).mount('#app')

// import Vue from 'vue'

// Vue.config.productionTip = false
// Vue.directive('tooltip', function(el, binding){
//   $(el).tooltip({
//            title: binding.value,
//            placement: binding.arg,
//            trigger: 'hover'             
//        })
// })

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
