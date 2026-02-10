<script setup lang="ts">
  import logo from '@/assets/pawtopia-logo.png'
</script>

<template>
  <nav class="bg-white border-b border-gray-200 shadow-sm">
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
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
