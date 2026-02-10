<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logo from '@/assets/pawmie-logo.png'

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
  <nav class="bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur border-b border-gray-200 dark:border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between  h-16">

        <a href="/" class="flex items-center gap-2">
          <img :src="logo" alt="Pawmie-logo" class="h-30 w-auto block relative top-2"/>
          
        </a>
        <ul class="flex items-center gap-8">
          <li>
            <a href="/" class="text-gray-500 hover:text-indigo-500 font-medium transition-colors">Home</a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-indigo-500 font-medium transition-colors">Services</a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-indigo-500 font-medium transition-colors">About</a>
          </li>
          <li>
            <a href="#" class="text-gray-500 hover:text-indigo-500 font-medium transition-colors">Contact</a>
          </li>
        </ul>
    <button
      @click="toggleDarkMode"
      class="ml-4 flex items-center justify-center w-10 h-10 rounded-full
            bg-[#fde68a] dark:bg-[#1e293b]
            hover:scale-110 transition"
      aria-label="Toggle Dark Mode"
    >
      <span v-if="isDarkMode" class="text-[#60a5fa]">🌙</span>
      <span v-else class="text-[#f97316]">☀️</span>
    </button>



      </div>
    </div> 
  </nav>
</template>

<style scoped></style>
