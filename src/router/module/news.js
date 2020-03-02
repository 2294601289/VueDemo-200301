// 首页等页面
const news = {
    path: '/news',
    name: 'news',
    component: () => import('../../views/news/_index'),
    children: [
        {
            path: 'search',
            name: '/news/search',
            component: () => import('../../views/news/Search'),
        }
    ]
}

export default news
