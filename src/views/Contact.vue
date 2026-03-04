<script setup lang="ts">
import contactContent from '@/stores/contactContent.json'

interface ContactChannel {
  id: string
  label: string
  value: string
  description: string
  icon: 'mail' | 'phone' | 'map' | string
}

interface ContactOfficeHours {
  title: string
  lines: string[]
}

interface ContactFaq {
  id: string
  question: string
  answer: string
}

interface ContactData {
  hero: {
    title: string
    subtitle: string
    badge: string
  }
  channels: ContactChannel[]
  officeHours: ContactOfficeHours
  faq: ContactFaq[]
}

const data = contactContent as ContactData

const getIcon = (icon: string) => {
  if (icon === 'mail') return '✉️'
  if (icon === 'phone') return '📞'
  if (icon === 'map') return '📍'
  return '🐾'
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero -->
      <section class="text-center mb-14">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
          {{ data.hero.badge }}
        </span>
        <h1 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {{ data.hero.title }}
        </h1>
        <p class="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {{ data.hero.subtitle }}
        </p>
      </section>

      <section class="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start mb-16">
        <!-- Contact channels -->
        <div class="space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Reach the Pawmie demo team
          </h2>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3">
            Use these details in your UI designs or demos. All information here is dummy content, safe for practice projects.
          </p>

          <div class="space-y-4">
            <article
              v-for="channel in data.channels"
              :key="channel.id"
              class="flex gap-4 rounded-2xl bg-white/90 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 p-4 shadow-sm"
            >
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/70 text-lg">
                {{ getIcon(channel.icon) }}
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
                  {{ channel.label }}
                </h3>
                <p class="text-sm font-mono text-emerald-700 dark:text-emerald-300 mt-0.5 break-words">
                  {{ channel.value }}
                </p>
                <p class="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {{ channel.description }}
                </p>
              </div>
            </article>
          </div>
        </div>

        <!-- Office hours / simple form -->
        <div class="space-y-5">
          <div class="rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-lg">
            <h2 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ data.officeHours.title }}
            </h2>
            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li v-for="(line, index) in data.officeHours.lines" :key="index">
                {{ line }}
              </li>
            </ul>
          </div>

          <div class="rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-lg">
            <h3 class="text-base font-semibold text-slate-900 dark:text-white mb-3">
              Quick demo message (static)
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3">
              This form is not wired to a backend. It shows how a real contact form could look in your project.
            </p>
            <form class="space-y-3">
              <div>
                <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                <input
                  type="text"
                  class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
                  placeholder="Your name"
                  disabled
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/80"
                  placeholder="you@example.com"
                  disabled
                />
              </div>
              <div>
                <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  class="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/80 min-h-[80px]"
                  placeholder="Ask us anything about this demo..."
                  disabled
                />
              </div>
              <button
                type="button"
                class="inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs sm:text-sm font-semibold py-2.5 shadow-md opacity-70 cursor-not-allowed"
              >
                Send message (demo only)
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 text-center">
          Frequently asked (demo) questions
        </h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <article
            v-for="item in data.faq"
            :key="item.id"
            class="rounded-2xl bg-white/90 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 p-4 shadow-sm"
          >
            <h3 class="text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
              {{ item.question }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {{ item.answer }}
            </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>  </style>