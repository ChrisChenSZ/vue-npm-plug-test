import Vue from 'vue'
import App from './App.vue'
import chrisTest from './lib/index.js'
Vue.use(chrisTest)
new Vue({
  el: '#app',
  render: h => h(App)
})
