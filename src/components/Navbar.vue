<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/pawmie-logo.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = ref(false)
const showDropdown = ref(false)
const isDarkMode = ref(false)
const isScrolled = ref(false)

const updateAuthState = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
}

// Handle scroll event to change navbar appearance
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Handle user logout
const handleLogout = () => {
  localStorage.removeItem('isAuthenticated') // Clear auth status
  isAuthenticated.value = false
  showDropdown.value = false
  router.push('/login') // Redirect to login page
}

// Dropdown close on outside click
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if(!target.closest('.relative')) {
    showDropdown.value = false
  }
}

let removeAfterEach: (() => void) | undefined

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark')
  window.addEventListener('scroll', handleScroll)
  updateAuthState()
  window.addEventListener('click', handleClickOutside)
  // Re-check auth when navigating (e.g. after login redirect)
  removeAfterEach = router.afterEach(updateAuthState)
  // Re-check when storage changes (e.g. from another tab)
  window.addEventListener('storage', updateAuthState)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', handleClickOutside)
  removeAfterEach?.()
  window.removeEventListener('storage', updateAuthState)
})
// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value) // Toggle dark class
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light') // Save theme preference
}
</script>

<template>
<nav
  :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
    isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90 border-gray-200 dark:border-white/10'
      : 'bg-transparent border-transparent'
  ]"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="relative flex items-center justify-between h-16">

      <!-- LEFT: Logo -->
      <router-link to="/" class="relative z-10 flex items-center">
        <img :src="logo" alt="Pawmie Logo" class="h-30 w-auto" />
      </router-link>

      <!-- CENTER: Navigation Links (absolutely centered to prevent overlap) -->
      <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:gap-8">
        <router-link to="/" class="text-gray-600 dark:text-gray-400 hover:text-indigo-500 font-medium transition-colors whitespace-nowrap">
          Home
        </router-link>

        <router-link to="/services" class="text-gray-600 dark:text-gray-400 hover:text-indigo-500 font-medium transition-colors whitespace-nowrap">
          Services
        </router-link>

        <router-link to="/about" class="text-gray-600 dark:text-gray-400 hover:text-indigo-500 font-medium transition-colors whitespace-nowrap">
          About
        </router-link>

        <router-link to="/contact" class="text-gray-600 dark:text-gray-400 hover:text-indigo-500 font-medium transition-colors whitespace-nowrap">
          Contact
        </router-link>
      </div>

      <!-- RIGHT: Auth + Dark Toggle (only one of Sign In OR profile shows) -->
      <div class="relative z-10 flex items-center gap-3 sm:gap-4 min-w-[7rem]">

        <!-- If NOT Logged In -->
        <router-link
          v-if="!isAuthenticated"
          key="signin"
          to="/login"
          class="shrink-0 px-5 py-2 rounded-full 
                 bg-gradient-to-r from-blue-500 to-purple-500
                 text-white font-semibold whitespace-nowrap
                 hover:opacity-90 transition"
        >
          Sign In
        </router-link>

        <!-- If Logged In -->
        <div v-else key="profile" class="relative shrink-0">
          <button
            @click="showDropdown = !showDropdown"
            class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
          >
            👤
          </button>

          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 
                   shadow-xl rounded-xl overflow-hidden
                   border border-gray-200 dark:border-gray-700"
          >
            <button
              @click="handleLogout"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Dark Mode -->
        <button
          @click="toggleDarkMode"
          class="w-10 h-10 rounded-full bg-[#fde68a] dark:bg-[#1e293b] hover:scale-110 transition"
        >
          <span v-if="isDarkMode">🌙</span>
          <span v-else>☀️</span>
        </button>

      </div>

    </div>
  </div>
</nav>

</template>

<style scoped>

</style>
