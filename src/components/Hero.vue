<script setup lang="ts">
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative bg-white dark:bg-gray-800
           rounded-3xl px-8 py-20"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-2
             items-center gap-12"
    >
      <!-- LEFT: Text -->
      <div>
        <h1
          class="text-5xl font-extrabold
                 text-gray-900 dark:text-white
                 mb-6 leading-tight"
        >
          Welcome to
          <span class="text-[#3b82f6] dark:text-[#60a5fa]">
            Pawmie
          </span>
        </h1>

        <p
          class="text-lg text-gray-600 dark:text-gray-300
                 max-w-xl mb-8"
        >
          Your trusted partner for keeping your furry friends
          healthy, happy, and loved every day.
        </p>

        <!-- CTA Button -->
        <div class="flex flex-wrap gap-4">
          <button
            class="px-6 py-3 rounded-full
                   bg-[#3b82f6] hover:bg-[#2563eb]
                   text-white font-semibold
                   transition"
          >
            Explore Services
          </button>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div class="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1601758123927-1968e3c8f9c6"
          alt="Happy pet"
          class="max-w-sm w-full
                 rounded-3xl shadow-lg"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
