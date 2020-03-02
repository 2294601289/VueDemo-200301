import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局css样式
import './assets/css/index.css'
// 配置信息（根路由设置）
import config from '../public/static/config/config'
Vue.prototype.$config = config

// 引入vant组件
import './main.vant'

// 引入axios
import './main.axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
