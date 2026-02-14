<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div
    class="group p-8 rounded-3xl
           bg-white/80 dark:bg-gray-800/80
           backdrop-blur-lg
           border border-white/40 dark:border-gray-700
           shadow-lg
           hover:shadow-2xl
           hover:-translate-y-3
           transition-all duration-300
           text-center"
  >
    <!-- Icon -->
    <div
      class="w-16 h-16 mx-auto mb-6
             flex items-center justify-center
             rounded-2xl
             bg-gradient-to-br from-blue-200 to-purple-200
             dark:from-blue-900 dark:to-purple-900
             text-3xl
             group-hover:scale-110
             transition-all duration-300"
    >
      {{ icon }}
    </div>

    <!-- Title -->
    <h3
      class="text-xl font-semibold mb-2
             text-gray-900 dark:text-white"
    >
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
</style>
