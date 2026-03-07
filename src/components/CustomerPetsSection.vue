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
const doubled = [...pets, ...pets, ...pets]

interface SpeciesConfig {
  emoji: string
  topBorder: string
  quoteBar: string
}

const speciesConfig: Record<string, SpeciesConfig> = {
  Dog:    { emoji: '🐶', topBorder: '#6366f1', quoteBar: '#6366f1' },
  Cat:    { emoji: '🐱', topBorder: '#ec4899', quoteBar: '#ec4899' },
  Bird:   { emoji: '🦜', topBorder: '#10b981', quoteBar: '#10b981' },
  Rabbit: { emoji: '🐰', topBorder: '#f59e0b', quoteBar: '#f59e0b' },
}

const getConfig = (species: string): SpeciesConfig =>
  speciesConfig[species] ?? speciesConfig['Dog']!

const ownerQuotes: Record<string, string> = {
  'pet-1': "Pawmie made vet visits stress-free for Luna. I can't imagine life without it!",
  'pet-2': 'Zimba comes home looking like royalty after every grooming session.',
  'pet-3': 'Coco went from chaos to calm in just a few training sessions. Amazing!',
  'pet-4': 'Milo hops around so happily after every vet visit. Pawmie is a lifesaver!',
  'pet-5': 'Kiwi chirps louder than ever — Pawmie keeps him healthy and happy!',
  'pet-6': 'Max is so well-behaved now. The trainers Pawmie connects us with are brilliant.',
  'pet-7': 'Bella walks out of every grooming session looking like a show cat!',
  'pet-8': 'Bruno finally sits still for grooming. Pawmie groomers have magic hands!',
  'pet-9': 'Nala is so calm and healthy. Pawmie vet reminders are a game changer.',
}
</script>

<template>
<section class="relative py-12 overflow-hidden bg-[#f3eaf8] dark:bg-[#0f172a]">

  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 mb-4">
        Our Family
      </span>

      <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
        Meet the
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          Pawmie Family
        </span>
      </h2>

      <p class="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
        Real pets, real owners, real love — hover to pause.
      </p>
    </div>
  </div>

  <!-- Ribbon -->
  <div class="ribbon-wrap">

    <!-- LEFT FADE -->
    <div
      class="ribbon-fade-left
             bg-gradient-to-r
             from-[#f3eaf8]/95 via-[#f3eaf8]/45 to-transparent
             dark:from-[#13233f]/90 dark:via-[#13233f]/50 dark:to-transparent"
    />

    <!-- RIGHT FADE -->
    <div
      class="ribbon-fade-right
             bg-gradient-to-l
             from-[#f3eaf8]/95 via-[#f3eaf8]/45 to-transparent
             dark:from-[#13233f]/90 dark:via-[#13233f]/50 dark:to-transparent"
    />

    <div class="ribbon-track">

        <article
           v-for="(pet, idx) in doubled"
          :key="`${pet.id}-${idx}`"
           class="ribbon-card group bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-700"
          :style="{ borderTopColor: getConfig(pet.species).topBorder }"
        >

        <!-- IMAGE -->
        <div class="relative h-44 overflow-hidden">
          <img
            :src="pet.imageUrl"
            :alt="pet.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <!-- emoji -->
          <span class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm bg-white/90 dark:bg-gray-900/90 shadow ring-1 ring-white/20">
            {{ getConfig(pet.species).emoji }}
          </span>

          <!-- name -->
          <p class="absolute bottom-3 left-3 text-white font-bold text-sm drop-shadow">
            {{ pet.name }}
          </p>
        </div>

        <!-- BODY -->
        <div class="p-4 flex flex-col gap-2.5">

          <div class="flex items-center justify-between gap-2">
            <h3 class="text-sm font-bold text-gray-900 dark:text-gray-100">
              {{ pet.name }}
            </h3>

            <span
              class="text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0"
              :style="{
                background: getConfig(pet.species).topBorder + '22',
                color: getConfig(pet.species).topBorder,
                border: `1px solid ${getConfig(pet.species).topBorder}44`
              }"
            >
              {{ pet.species }}
            </span>
          </div>

          <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {{ pet.breed }} · {{ pet.age }} yr<span v-if="pet.age !== 1">s</span>
          </p>

          <p
            class="text-xs text-gray-600 dark:text-gray-300 italic border-l-2 pl-2.5"
            :style="{ borderColor: getConfig(pet.species).quoteBar }"
          >
            "{{ ownerQuotes[pet.id] ?? `${pet.ownerName} loves Pawmie!` }}"
          </p>

          <p class="text-xs text-gray-400 dark:text-gray-500">
            <span class="font-semibold text-gray-700 dark:text-gray-300">
              {{ pet.ownerName }}
            </span>
            · {{ pet.city }}
          </p>

          <div
            class="inline-flex items-center gap-1 self-start text-xs font-semibold px-2.5 py-1 rounded-full"
            :style="{
              background: getConfig(pet.species).topBorder + '18',
              color: getConfig(pet.species).topBorder,
              border: `1px solid ${getConfig(pet.species).topBorder}33`
            }"
          >
            ❤️ {{ pet.favoriteService }}
          </div>

        </div>
      </article>

    </div>
  </div>
</section>
</template>

<style scoped>

.ribbon-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0.75rem 0 1rem;
}

.ribbon-fade-left,
.ribbon-fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  z-index: 10;
  pointer-events: none;
}

.ribbon-fade-left { left: 0; }
.ribbon-fade-right { right: 0; }

.ribbon-track {
  display: flex;
  gap: 1.1rem;
  width: max-content;
  animation: scroll-left 30s linear infinite;
  padding: 0.5rem 1.5rem;
}

.ribbon-track:hover {
  animation-play-state: paused;
}

.ribbon-card {
  width: 270px;
  flex-shrink: 0;
  background: white;
  border: 1.5px solid #e5e7eb;
  border-top-width: 4px;
  border-radius: 1.1rem;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0,0,0,0.07);
  transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
}

:global(.dark) .ribbon-card {
  background: #293c5a;
  border-color: rgba(255,255,255,0.08);
  box-shadow: 0 4px 18px rgba(0,0,0,0.4);
}

.ribbon-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

:global(.dark) .ribbon-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

</style>