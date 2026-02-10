<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800
           p-8 rounded-2xl
           shadow-sm hover:shadow-lg
           hover:-translate-y-1
           transition-all duration-300
           text-center"
  >
    <h3
      class="text-xl font-semibold mb-2
             text-gray-900 dark:text-white"
    >
      {{ title }}
    </h3>

    <p class="text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
</style>
