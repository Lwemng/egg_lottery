import Vue from 'vue'
import App from './App.vue'

import './assets/styles/reset.scss'
import './assets/styles/animation.scss'
import './util/rem.js'

Vue.config.productionTip = false
document.body.addEventListener('touchstart', function () {})


new Vue({
  render: h => h(App)
  
}).$mount('#app')
