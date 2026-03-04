<script setup lang="ts">
import heroBg from '@/assets/heropet.png' // use your new landscape image here
</script>

<template>
  <section
    class="relative min-h-screen w-full flex items-center overflow-hidden"
  >
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    ></div>

    <!-- Premium overlay (works in light & dark) -->
    <div class="absolute inset-0 bg-white/40 dark:bg-black/50"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent dark:from-black/70 dark:via-black/40 dark:to-transparent"></div>

    <!-- Content -->
    <div class="relative z-10 w-full">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-300 uppercase mb-3">
    
          </p>

          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Welcome to 
            <span class="text-indigo-600 dark:text-indigo-300">
              Pawmie</span>
          </h1>

          <p class="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200">
            Your trusted partner for keeping your furry friends healthy, happy, and loved everyday.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <button
              class="px-8 py-4 rounded-full text-white font-semibold
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     hover:opacity-90 transition shadow-lg"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom fade (looks premium) -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
  </section>
</template>

<style scoped>
</style>