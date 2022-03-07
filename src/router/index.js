import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import support from '../views/Support.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/support',
    name: 'support',
    component: support

  }
]

const router = new VueRouter({
  routes
})

export default router
