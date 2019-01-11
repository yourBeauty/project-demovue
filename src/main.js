// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
/*axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
var instance = axios.create({})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'*/
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

