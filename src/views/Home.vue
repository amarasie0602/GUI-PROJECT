<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import FeatureCard from '@/components/FeatureCard.vue'

</script>

<template>
 <div class="min-h-screen bg-gray-50 dark:bg-gray-900">

    <Navbar />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <Hero />
    <div class="w-24 h-1 bg-indigo-500 mx-auto rounded-full mt-8 mb-10"></div>
    
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
    <FeatureCard
        title="Veterinary Care"
        description="Comprehensive medical services to keep your pets healthy and happy."/>

    <FeatureCard
        title="Grooming Services"
        description="Professional grooming to keep your pets looking their best."/>

    <FeatureCard
        title="Pet Boarding"
        description="Safe and comfortable boarding for your pets when you're away."/>

    </section>
    </main>
  </div>  
</template>

<style scoped></style>
