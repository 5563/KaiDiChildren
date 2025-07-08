import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/tablePage',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cesium',
      name: 'cesium',
      component: () => import('../views/CesiumPage/CesiumPageView.vue'),
    },
    {
      path: '/tablePage',
      name: 'tablePage',
      component: () => import('../views/TablePage/TablePage.vue'),
    },
  ],
})

export default router
