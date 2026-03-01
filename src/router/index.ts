import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Booking from '@/views/Booking.vue'
import MyBookings from '@/views/MyBookings.vue'
import Marketplace from '@/views/Marketplace.vue'
import VetAppointment from '@/views/services/VetAppointment.vue'
import EmergencyCare from '@/views/services/EmergencyCare.vue'
import GroomingBooking from '@/views/services/GroomingBooking.vue'
import TrainingServices from '@/views/services/TrainingServices.vue'

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
    path:'/booking',
    name: 'Booking',
    component: Booking,
    meta: { requiresAuth: true },
  },
  {
    path: '/my-bookings',
    name: 'MyBookings',
    component: MyBookings,
    meta: { requiresAuth: true },
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace,
    meta: { requiresAuth: true },
  },
  {
    path: '/services/vet-appointment',
    name: 'VetAppointment',
    component: VetAppointment,
    meta: { requiresAuth: true },
  },
  {
    path: '/services/emergency-care',
    name: 'EmergencyCare',
    component: EmergencyCare,
    meta: { requiresAuth: true },
  },
  {
    path: '/services/grooming-booking',
    name: 'GroomingBooking',
    component: GroomingBooking,
    meta: { requiresAuth: true },
  },
  {
    path: '/services/training-services',
    name: 'TrainingServices',
    component: TrainingServices,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta && record.meta.requiresAuth)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (requiresAuth && !isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
})

export default router
