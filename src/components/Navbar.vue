<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logo from '@/assets/pawtopia-logo.png'

const isDarkMode = ref(false)

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
   document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  }
</script>

<template>
  <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <a href="/" class="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
          <img :src="logo" alt="Pawtopia logo" class="h-25 w-30"/>
          
        </a>
        <ul class="flex items-center gap-8">
          <li>
            <a href="/" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Contact</a>
          </li>
        </ul>
        <button
        @click="toggleDarkMode"
        class="ml-4 p-2 rounded-full
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition"
        aria-label="Toggle dark mode">
        <span v-if="isDarkMode">☀️</span>
        <span v-else>🌙</span>
      </button>

      </div>
    </div>
  </nav>
</template>

<style scoped></style>
