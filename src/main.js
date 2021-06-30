import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'default-passive-events'
// 手动配置element ui
import ElementUI from 'element-ui'
import store from '../src/store/index'
//前面的$massage是自己命名的，后面的Massage是组件名字
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://art.aztop.cn'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
import { Message,MessageBox } from 'element-ui'
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$massage=Message
Vue.config.productionTip = false

import '../css/all.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

