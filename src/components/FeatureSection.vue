<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'

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
</script>

<template>
  <section class="mt-32">

    <!-- Section Title -->
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
        What Pawmie Offers
      </h2>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        Complete pet care services in one powerful platform.
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <FeatureCard
        v-for="feature in features"
        :key="feature.title"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
      />

    </div>

  </section>
</template>

<style scoped>
</style>
