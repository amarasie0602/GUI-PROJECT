<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
 <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <!--Hero section-->
      <section class="text-center py-20 bg-white">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-6">
           Welcome to <span class="text-blue-600">Petopia</span>
        </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for keeping your furry friends healthy, happy,
              and loved every day.
          </p>
      </section>

      <div class="w-24 h-1 bg-indigo-500 mx-auto rounded-full mt-8 mb-16"></div>


      <!--Cards section-->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 class="text-xl font-semibold mb-2">Care Tips</h3>
            <p class="text-gray-600">
               Simple guidance to keep your pets healthy and safe.
            </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 class="text-xl font-semibold mb-2">Services</h3>
            <p class="text-gray-600">
                Learn about grooming, veterinary care, and pet services.
            </p>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 class="text-xl font-semibold mb-2">Adoption</h3>
            <p class="text-gray-600">
                Coming soon: helping pets find loving homes.
            </p>
        </div>
      </section>
    </main>
  </div>  
</template>

<style scoped></style>
