<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'
import {useRouter} from 'vue-router'
import aserviceCard from "./ServiceCard.vue"
import ServiceCard from './ServiceCard.vue'

const router = useRouter()

const features = [
  {
    title: "Vet Appointment Booking",
    description: "Book appointments with trusted veterinarians easily.",
    icon: "🩺"
  },
  {
    title: "Grooming Booking",
    description: "Schedule professional grooming for your pet.",
    icon: "✂️"
  },
  {
    title: "Emergency Care",
    description: "Quick access to emergency pet medical services.",
    icon: "🚑"
  },
  {
    title: "Training Services",
    description: "Enroll your pets in expert training programs.",
    icon: "🎓"
  },
  {
    title: "Pet Care Tips",
    description: "Learn how to keep your pets healthy and happy.",
    icon: "📚"
  },
  {
    title: "Pet Profiles",
    description: "Manage and monitor your pet’s health records.",
    icon: "🐾"
  },
  {
    title: "Pet Marketplace",
    description: "Buy food, accessories, and essentials for your pet.",
    icon: "🛒"
  },
  {
    title: "Pet Adoption",
    description: "Find loving homes for pets in need.",
    icon: "🐶"
  }
]


const handleBooking = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (!isAuthenticated){
  router.push('/login')
  }  
  else {
  router.push('/booking')
  }
}
</script>

<template>
  <section id="services" class="mt-40 py-1 bg-gradient-to-br from-blue-200 to-pink-200 dark:bg-gradient-to-br dark: from-[#0f172a] to-[#1e293b] rounded-3xl px-8">
0 
  <!-- Section Title -->
  <div class="text-center mb-16">
    <h2 class="text-4xl font-bold text-gray-800 dark:text-white">
      What Pawmie Offers
    </h2>
    <p class="mt-4 text-gray-600 dark:text-gray-400">
      Complete pet care services in one powerful platform.
    </p>
  </div>

  <!-- Cards Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div
      v-for="feature in features"
      :key="feature.title"
      class="group relative
             bg-white dark:bg-[#1e293b]
             border border-gray-200 dark:border-gray-700
             rounded-2xl p-8
             hover:border-indigo-500
             transition duration-300
             hover:-translate-y-3
             hover:shadow-indigo-500/20
             shadow-lg"
    >

      <!-- Icon -->
      <div class="w-14 h-14 mb-6
                  flex items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-indigo-500 to-purple-600
                  dark:text-white text-2xl">
        {{ feature.icon }}
      </div>

      <!-- Title -->
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {{ feature.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {{ feature.description }}
      </p>

      <!-- Book Button -->
      <button
        @click="handleBooking"
        class="mt-6 text-sm text-indigo-400
               hover:text-white transition"
      >
        Book Now →
      </button>

    </div>
  </div>

</section>

</template>

<style scoped>
</style>
