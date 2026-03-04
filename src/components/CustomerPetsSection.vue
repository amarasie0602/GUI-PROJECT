<script setup lang="ts">
import customerPets from '@/stores/customerPets.json'

interface CustomerPet {
  id: string
  name: string
  species: string
  breed: string
  age: number
  ownerName: string
  city: string
  favoriteService: string
  imageUrl: string
}

const pets = customerPets as CustomerPet[]
</script>

<template>
  <section class="mt-32">
    <div class="text-center mb-10">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Our Happy Pawmie Family
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
        Meet a few of the pets and pet parents who trust Pawmie for everyday care,
        grooming, and medical support.
      </p>
    </div>

    <div
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <article
        v-for="pet in pets"
        :key="pet.id"
        class="bg-white/80 dark:bg-gray-900/70 backdrop-blur shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-shadow"
      >
        <div class="h-48 w-full overflow-hidden">
          <img
            :src="pet.imageUrl"
            :alt="`${pet.name} the ${pet.species}`"
            class="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="p-5">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ pet.name }}
            </h3>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
              {{ pet.species }}
            </span>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ pet.breed }} • {{ pet.age }} year<span v-if="pet.age !== 1">s</span> old
          </p>

          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Lives in <span class="font-medium text-gray-800 dark:text-gray-200">{{ pet.city }}</span>
            with pet parent
            <span class="font-medium text-gray-800 dark:text-gray-200">{{ pet.ownerName }}</span>.
          </p>

          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Loves our
            <span class="font-semibold text-indigo-600 dark:text-indigo-300">
              {{ pet.favoriteService }}
            </span>
            service.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
</style>

