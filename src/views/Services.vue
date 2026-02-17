<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleServiceClick = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (!isAuthenticated) {
    router.push('/login')
  } else {
    router.push('/booking') // you can create this later
  }
}
</script>

<template>
  <div class="min-h-screen pt-24 px-6">
    <h1 class="text-4xl font-bold text-center mb-12">
      Our Services
    </h1>

    <!--Service grid-->
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <!--Vet apppointment-->
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold mb-3">Vet Appointment</h2>
        <p class="text-gray-600 mb-4">
          Book appointments with trusted veterinarians.
        </p>
        <button
          @click="handleServiceClick"
          class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-90"
        >
          Book Now
        </button>
      </div>

      <!--Pet Grooming-->
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold mb-3">Pet Grooming</h2>
        <p class="text-gray-600 mb-4">
          Professional grooming services for your pet.
        </p>
        <button
          @click="handleServiceClick"
          class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-90"
        >
          Book Now
        </button>
      </div>

      <!--Emergency care-->
      <div class="bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-xl font-semibold mb-3">Emergency Care</h2>
        <p class="text-gray-600 mb-4">
          Immediate medical support when needed.
        </p>
        <button
          @click="handleServiceClick"
          class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-90"
        >
          Book Now
        </button>
      </div>

    </div>
  </div>
</template>