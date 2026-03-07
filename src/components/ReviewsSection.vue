<script setup lang="ts">
interface Review {
  id: string
  name: string
  petName: string
  petType: string
  location: string
  rating: number
  service: string
  review: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 'r-1',
    name: 'Sarah Mitchell',
    petName: 'Biscuit',
    petType: 'Golden Retriever',
    location: 'New York, NY',
    rating: 4.5,
    service: 'Vet Appointment',
    review: 'Pawmie made booking a vet appointment so effortless. Biscuit had his check-up within the same day. The vet was wonderful and Biscuit actually enjoyed the visit for once!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 'r-2',
    name: 'James Okonkwo',
    petName: 'Luna',
    petType: 'Persian Cat',
    location: 'Chicago, IL',
    rating: 5,
    service: 'Grooming Booking',
    review: 'Luna looks absolutely stunning after every grooming session booked through Pawmie. The groomer was so gentle and patient. I will never go back to the old way of booking!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 'r-3',
    name: 'Priya Nair',
    petName: 'Rocky',
    petType: 'Labrador',
    location: 'Austin, TX',
    rating: 4.8,
    service: 'Training Services',
    review: 'Rocky was a handful before training. After just 4 sessions booked through Pawmie, he is a completely different dog. Sits, stays, and no more jumping on guests!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 'r-4',
    name: 'Tom Harrington',
    petName: 'Mochi',
    petType: 'Shih Tzu',
    location: 'Los Angeles, CA',
    rating: 5,
    service: 'Emergency Care',
    review: 'Mochi swallowed something she shouldn\'t have at midnight. Pawmie connected us to emergency care within minutes. I genuinely believe this app saved her life.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 'r-5',
    name: 'Anika Patel',
    petName: 'Oreo',
    petType: 'Beagle',
    location: 'Seattle, WA',
    rating: 4.5,
    service: 'Pet Marketplace',
    review: 'I ordered Oreo\'s kibble and a new harness from the Pawmie marketplace. Everything arrived quickly and Oreo absolutely loves the new harness. Great quality for the price!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: 'r-6',
    name: 'Daniel Fernandez',
    petName: 'Coco',
    petType: 'French Bulldog',
    location: 'Miami, FL',
    rating: 5,
    service: 'Vet Appointment',
    review: 'Managing Coco\'s health records and vaccination reminders through Pawmie is a game changer. Everything is in one place. I never miss a vet visit anymore!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
]

const serviceColors: Record<string, string> = {
  'Vet Appointment':  'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  'Grooming Booking': 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
  'Training Services':'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  'Emergency Care':   'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300',
  'Pet Marketplace':  'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
}
</script>

<template>
  <section class="relative mt-32 py-20 overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#131f35] -z-10" />
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/25 dark:bg-pink-900/15 rounded-full blur-3xl -z-10" />
    <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-200/25 dark:bg-indigo-900/15 rounded-full blur-3xl -z-10" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-300 mb-5">
          What Pet Parents Say
        </span>
        <h2 class="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
          Loved by <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Pets & Parents</span>
        </h2>
        <p class="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Real stories from real pet parents who trust Pawmie every day.
        </p>

        <!-- Star summary -->
        <div class="mt-6 flex items-center justify-center gap-2">
          <div class="flex gap-0.5">
            <span v-for="n in 5" :key="n" class="text-amber-400 text-xl">★</span>
          </div>
          <span class="text-sm font-bold text-gray-700 dark:text-gray-200">5.0</span>
          <span class="text-sm text-gray-400 dark:text-gray-500">· 2,400+ happy pet parents</span>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(review, idx) in reviews"
          :key="review.id"
          class="review-card group bg-white/80 dark:bg-gray-900/70 backdrop-blur shadow-md rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
          :style="{ animationDelay: `${idx * 80}ms` }"
        >

          <!-- Stars + service badge -->
          <div class="flex items-center justify-between">
            <div class="flex gap-0.5">
              <span
                v-for="n in 5"
                :key="n"
                class="text-base"
                :class="n <= review.rating ? 'text-amber-400' : 'text-gray-200 dark:text-gray-700'"
              >★</span>
            </div>
            <span
              class="text-xs font-semibold px-3 py-1 rounded-full"
              :class="serviceColors[review.service] ?? 'bg-gray-100 text-gray-600'"
            >
              {{ review.service }}
            </span>
          </div>

          <!-- Review text -->
          <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
            "{{ review.review }}"
          </p>

          <!-- Reviewer info -->
          <div class="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <img
              :src="review.avatar"
              :alt="review.name"
              class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-indigo-900"
            />
            <div>
              <p class="text-sm font-bold text-gray-800 dark:text-white leading-tight">{{ review.name }}</p>
              <p class="text-xs text-gray-400 dark:text-gray-500">
                {{ review.petName }} the {{ review.petType }} · {{ review.location }}
              </p>
            </div>
          </div>

        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.review-card {
  animation: fadeUp 0.5s ease both;
  transform: translateY(0);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
}
.review-card:hover {
  transform: translateY(-6px);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>