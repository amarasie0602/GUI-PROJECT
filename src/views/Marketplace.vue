<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Premium Chicken Kibble',
    category: 'Food',
    price: '₹899',
    badge: 'Best for everyday meals',
    description: 'High‑protein dry food with essential vitamins for active dogs.',
    tag: 'Top pick',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 2,
    name: 'CloudSoft Pet Bed',
    category: 'Comfort',
    price: '₹1,499',
    badge: 'Orthopedic support',
    description: 'Memory‑foam bed that keeps joints comfy for older pets.',
    tag: 'Most loved',
    color: 'from-sky-400 to-indigo-500',
  },
  {
    id: 3,
    name: 'Interactive Treat Toy',
    category: 'Toys',
    price: '₹599',
    badge: 'Slow feeding',
    description: 'Keeps your pet mentally engaged while rewarding them with treats.',
    tag: 'New',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 4,
    name: 'No‑Pull Harness',
    category: 'Accessories',
    price: '₹749',
    badge: 'Gentle control',
    description: 'Comfort‑fit harness to make walks safer and easier to handle.',
    tag: 'Editor’s pick',
    color: 'from-rose-400 to-fuchsia-500',
  },
]
</script>

<template>
  <div class="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-50 via-amber-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
            🛒 Marketplace
            <span class="w-1 h-1 rounded-full bg-amber-400" />
            Pet essentials
          </p>
          <h1 class="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Shop for everything your pet <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">loves</span>.
          </h1>
          <p class="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Discover curated food, toys, accessories, and comfort items — all picked with happy
            paws in mind. This is a demo marketplace; items are for display only.
          </p>
        </div>

        <div class="flex gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <button class="px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            All
          </button>
          <button class="px-3 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 border border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition">
            Food
          </button>
          <button class="px-3 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 border border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition">
            Toys
          </button>
          <button class="px-3 py-2 rounded-full bg-white/40 dark:bg-slate-900/40 border border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition">
            Accessories
          </button>
        </div>
      </header>

      <!-- Grid -->
      <section class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="product in products"
          :key="product.id"
          class="group relative rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Accent top border -->
          <div
            class="h-1.5 w-full bg-gradient-to-r"
            :class="product.color"
          />

          <div class="p-5 flex flex-col h-full">
            <div class="flex items-start justify-between gap-3 mb-3">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                  {{ product.category }}
                </p>
                <h2 class="mt-1 text-base font-bold text-slate-900 dark:text-white">
                  {{ product.name }}
                </h2>
              </div>
              <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900 text-amber-300 dark:bg-white dark:text-amber-600 shadow-sm">
                {{ product.price }}
              </span>
            </div>

            <p class="text-sm text-slate-600 dark:text-slate-300 mb-3">
              {{ product.description }}
            </p>

            <p class="mb-4 inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-200">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              {{ product.badge }}
            </p>

            <div class="mt-auto flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <span class="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {{ product.tag }}
              </span>

              <button
                type="button"
                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
              >
                Add to cart
                <span class="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

