<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

// Emit event when user clicks Book Now
const emit = defineEmits(['book'])

const handleClick = () => {
  emit('book')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
    <h2 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
      {{ title }}
    </h2>

    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ description }}
    </p>

    <button
      @click="handleClick"
      class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-90 transition"
    >
      Book Now
    </button>
  </div>
</template>
