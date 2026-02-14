<script setup lang="ts">
import heroImage from '@/assets/heropet.jpeg'
</script>

<template>
      <!-- Hero Section -->
    <section
      class="relative 
            bg-white/90 
            dark:bg-gray-800/90
            backdrop-blur-xl
            rounded-3xl px-12 py-24
            shadow-[0_30px_80px_rgba(0,0,0,0.15)]" >

      <div
        class="grid grid-cols-1 md:grid-cols-2
              items-center gap-16">

      <div class="absolute -top-10 -left-10 
            w-56 h-56 
            bg-pink-300/30 
            rounded-full blur-3xl">
      </div>

      <div class="absolute -bottom-10 -right-10 
                  w-72 h-72 
                  bg-blue-300/30 
                  rounded-full blur-3xl">
      </div>


      <!-- LEFT: Text -->
      <div>
        <h1
          class="text-5xl md:text-6xl font-extrabold
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
              class="px-8 py-4 rounded-full
                    bg-gradient-to-r 
                    from-blue-500 to-indigo-600
                    hover:from-indigo-600 hover:to-blue-500
                    text-white font-semibold
                    shadow-lg
                    transform hover:scale-105
                    transition duration-300"
            >
              Explore Services
            </button>
        </div>
      </div>

      <!-- RIGHT: Image -->
      <div class="flex justify-center relative">

        <!-- Glow effect -->
        <div
          class="absolute w-105 h-105
                bg-blue-400/30 
                dark:bg-blue-500/20
                rounded-full 
                blur-[120px]
                animate-pulse">
        </div>

        <!-- Image -->
        <img
          :src="heroImage"
          alt="Happy pet"
          class="relative z-10
                max-w-sm w-full
                rounded-3xl 
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                animate-float"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

</style>
