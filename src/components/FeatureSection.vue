<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = [
  {
    label: "Medical Care",
    accent: "#6366f1",
    gradient: "from-indigo-500 to-violet-600",
    bg: "from-indigo-50 to-violet-50",
    darkBg: "dark-card-indigo",
    features: [
      {
        title: "Vet Appointment Booking",
        description: "Book appointments with trusted veterinarians easily and get reminders.",
        icon: "🩺",
        ctaType: "booking"
      },
      {
        title: "Emergency Care",
        description: "Quick access to emergency pet medical services around the clock.",
        icon: "🚑",
        ctaType: "booking"
      }
    ]
  },
  {
    label: "Grooming & Training",
    accent: "#ec4899",
    gradient: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    darkBg: "dark-card-pink",
    features: [
      {
        title: "Grooming Booking",
        description: "Schedule professional grooming sessions for a happy, clean pet.",
        icon: "✂️",
        ctaType: "booking"
      },
      {
        title: "Training Services",
        description: "Enroll your pets in expert training programs with certified trainers.",
        icon: "🎓",
        ctaType: "booking"
      }
    ]
  },
  {
    label: "Pet Care Tips & Profiles",
    accent: "#10b981",
    gradient: "from-emerald-400 to-teal-500",
    bg: "from-emerald-50 to-teal-50",
    darkBg: "dark-card-emerald",
    features: [
      {
        title: "Pet Care Tips",
        description: "Expert guides and articles to keep your pets healthy and joyful.",
        icon: "📚",
        ctaType: "tips"
      },
      {
        title: "Pet Profiles",
        description: "Manage health records, vaccinations, and milestones for every pet.",
        icon: "🐾",
        ctaType: "tips"
      }
    ]
  },
  {
    label: "Pet Adoption & Marketplace",
    accent: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    darkBg: "dark-card-amber",
    features: [
      {
        title: "Pet Adoption",
        description: "Connect with shelters and find loving homes for pets in need.",
        icon: "🐶",
        ctaType: "adoption"
      },
      {
        title: "Pet Marketplace",
        description: "Shop food, accessories, toys, and essentials — all in one place.",
        icon: "🛒",
        ctaType: "adoption"
      }
    ]
  }
]

const handleCTA = (type: string, service?: string, category?: string) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (type === 'booking') {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }

    // Route to more specific service pages when possible
    if (service === 'Vet Appointment Booking') {
      router.push('/services/vet-appointment')
    } else if (service === 'Emergency Care') {
      router.push('/services/emergency-care')
    } else if (service === 'Grooming Booking') {
      router.push('/services/grooming-booking')
    } else if (service === 'Training Services') {
      router.push('/services/training-services')
    } else {
      router.push({
        path: '/booking',
        query: {
          service,
          category,
        },
      })
    }
  } else if (type === 'tips') {
    router.push('/tips')
  } else if (type === 'adoption') {
    if (service === 'Pet Marketplace') {
      router.push('/marketplace')
    } else {
      router.push('/adoption')
    }
  }
}

const ctaLabels: Record<string, string> = {
  booking: 'Book Now',
  tips: 'Learn More',
  adoption: 'Explore Now'
}
</script>

<template>
  <section id="services" class="relative mt-28 py-24 overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-[#0b1120] dark:via-[#0f172a] dark:to-[#131f35] -z-10" />
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl -z-10" />
    <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/30 dark:bg-pink-900/20 rounded-full blur-3xl -z-10" />

    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Section Header -->
      <div class="text-center mb-20">
        <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 mb-5">
          Everything Your Pet Needs
        </span>
        <h2 class="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
          What <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Pawmie</span> Offers
        </h2>
        <p class="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          A complete pet care ecosystem — from health to happiness, all in one place.
        </p>
      </div>

      <!-- Categories -->
      <div class="space-y-16">
        <div
          v-for="(category, ci) in categories"
          :key="category.label"
          class="category-block"
        >
          <!-- Category Label -->
          <div class="flex items-center gap-4 mb-7">
            <div
              class="h-1 w-10 rounded-full"
              :class="`bg-gradient-to-r ${category.gradient}`"
            />
            <h3 class="text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500">
              {{ category.label }}
            </h3>
            <div class="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
          </div>

          <!-- Cards Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="feature in category.features"
              :key="feature.title"
              class="feature-card group relative rounded-2xl p-7 border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#141e30] shadow-sm hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden"
            >
              <!-- Hover glow -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-0"
                :style="`background: radial-gradient(ellipse at 20% 20%, ${category.accent}18 0%, transparent 70%)`"
              />

              <div class="relative z-10 flex gap-5 items-start">
                <!-- Icon -->
                <div
                  class="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                  :class="`bg-gradient-to-br ${category.gradient}`"
                >
                  {{ feature.icon }}
                </div>

                <!-- Content -->
                <div class="flex flex-col flex-1">
                  <h4 class="text-base font-bold text-gray-800 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {{ feature.title }}
                  </h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {{ feature.description }}
                  </p>

                  <!-- CTA -->
                  <button
                    @click="handleCTA(feature.ctaType, feature.title, category.label)"
                    class="self-start flex items-center gap-1.5 text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-all duration-300"
                    :style="`color: ${category.accent}; border-color: ${category.accent}40;`"
                    :class="`hover-btn-${ci}`"
                  >
                    {{ ctaLabels[feature.ctaType] }}
                    <span class="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.feature-card {
  transform: translateY(0);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
}

button {
  background: transparent;
}
button:hover {
  filter: brightness(1.1);
  background: rgba(99, 102, 241, 0.07);
}

.category-block {
  animation: fadeUp 0.5s ease both;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>