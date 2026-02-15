<script setup lang="ts">
</script>

<template>
    <footer 
      class="mt-20 bg-white/70 dark:bg-gray-900/70
             backdrop-blur-md
             border-t border-gray-200 dark:border-white/10">

      <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!--Brand-->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pawmie
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Your trusted pet care platform providing
            veterinary booking, grooming services,
            training programs and more.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                Sign In
              </router-link>
            </li>
            <li>
              <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition">
                Services
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contact
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Email: support@pawmie.com</li>
            <li>Phone: +94 77 123 4567</li>
            <li>Location: Colombo, Sri Lanka</li>
          </ul>
        </div>
        </div>

        <!--Bottom line-->
        <div 
          class="mt-12 pt-6 border-gray-200 dark:border-white/10
                 text-center text-sm text-gray-500 dark:text-gray-400">
        {{ new Date().getFullYear() }} Pawmie. All rights reserved.
        </div>

      </div>
    </footer>
</template>

<style scoped>
</style>