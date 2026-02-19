<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen pt-24 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">
        Book Service
      </h2>

      <input
        type="text"
        placeholder="Pet Name"
        class="w-full mb-4 p-3 border rounded-lg"
      />

      <input
        type="date"
        class="w-full mb-4 p-3 border rounded-lg"
      />

      <button
        class="w-full py-3 bg-indigo-500 text-white rounded-lg"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</template>
