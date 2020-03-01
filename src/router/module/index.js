// 首页等页面
const index = {
    path: '/index',
    name: 'index',
    component: () => import('../../views/index/_index'),
    children: [
        {
            path: 'home',
            name: '/index/home',
            component: () => import('../../views/index/Home'),
        },
        {
            path: 'self',
            name: '/index/self',
            component: () => import('../../views/index/Self'),
        }
    ]
}

export default index
