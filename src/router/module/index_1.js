// 首页等页面
const index = {
    path: '/index1',
    name: 'index1',
    component: () => import('../../views/index/_index_1'),
    children: [
        {
            path: 'home1',
            name: '/index1/home1',
            component: () => import('../../views/index/Home_1'),
        },
        {
            path: 'self1',
            name: '/index1/self1',
            component: () => import('../../views/index/Self_1'),
        }
    ]
}

export default index
