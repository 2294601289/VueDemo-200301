import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入路由配置
import routes from './routes'

const router = new VueRouter({
  routes
})

export default router
