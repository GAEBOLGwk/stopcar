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
    path:'/text',
    component:() => import('../views/text')
  },
  {
    path:'/add',
    component:() => import('../views/add')
  }
]

const router = new VueRouter({
  routes
})

export default router
