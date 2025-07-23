
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/tablePage',
    component: HomeView,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: '关于',
    },
  },
  {
    path: '/tablePage',
    name: 'tablePage',
    component: () => import('../views/TablePage/TablePage.vue'),
    meta: {
      title: '表格',
    },
  },
]

export default routes
