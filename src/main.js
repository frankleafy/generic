import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  data () {
    return {
      info: 'jojo'
    }
  },
  render: h => h(App),
  mounted: function () { 
    
  }
}).$mount('#app')

