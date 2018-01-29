import Vue from 'vue'
import App from './components/App'

Vue.config.productionTip = false

import 'normalize.css/normalize.css'
import './assets/stylesheets/app.scss'

new Vue({
  el: '#app',
  created() {
    window.Vue = this
  },
  render: h => h(App)
})
