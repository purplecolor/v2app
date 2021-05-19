import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drag',
    name: 'drag',
    component: () => import( '../views/dragPage/index.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import( '../views/echarts/index.vue')
  },
  {
    path: '/echartdatasets',
    name: 'echartdatasets',
    component: () => import( '../views/echarts/echartdatasets.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import( '../views/elementUI/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
