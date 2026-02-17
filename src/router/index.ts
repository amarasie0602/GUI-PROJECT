import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Services from '@/views/Services.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup, // Assuming you have a Signup.vue component

  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
