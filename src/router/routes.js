// 首页入口路由
import index from './module/index'
import index1 from './module/index_1'
// 业务路由
import news from './module/news'
// 配置信息（根路由设置）
import config from '../../public/static/config/config'
const routes = [
    // 根路由
    config._route,              // 根路径设置
    // 首页路由
    index,                      // 开发首页等页面
    index1,                     // 首页1等页面
    // 业务路由
    news

]

export default routes
