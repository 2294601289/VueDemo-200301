import index from './module/index'

const routes = [
    {
        path: '/',              // 根路径
        name: '',
        redirect: 'index/home'  // 重定向
    },
    index                       // 首页等页面
]

export default routes
