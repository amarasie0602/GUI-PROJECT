<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import baseItems from '@/stores/marketplaceItems.json'

interface MarketplaceItem {
  id: string
  name: string
  category: string
  price: string
  badge: string
  description: string
  tag: string
  color: string
  imageUrl: string
}

const STORAGE_KEY = 'pawmie_marketplace_items'
const CART_KEY = 'pawmie_marketplace_cart'

const allItems = ref<MarketplaceItem[]>([])
const activeFilter = ref<'All' | 'Food' | 'Toys' | 'Accessories' | 'Comfort'>('All')
const search = ref('')

interface CartItem {
  id: string
  name: string
  price: string
  imageUrl: string
  category: string
  quantity: number
}

const cart = ref<CartItem[]>([])

const ensureItems = () => {
  const seed = baseItems as MarketplaceItem[]
  if (typeof window === 'undefined') {
    allItems.value = seed
    return
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed))
      allItems.value = seed
      return
    }
    const parsed = JSON.parse(raw) as MarketplaceItem[]
    allItems.value = Array.isArray(parsed) ? parsed : seed
  } catch {
    allItems.value = seed
  }
}

const loadCart = () => {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw) as CartItem[]
    if (Array.isArray(parsed)) {
      cart.value = parsed
    }
  } catch {
    cart.value = []
  }
}

const persistCart = () => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart.value))
  } catch {
    // ignore
  }
}

onMounted(() => {
  ensureItems()
  loadCart()
})

const products = computed(() => {
  let items = allItems.value
  if (activeFilter.value !== 'All') {
    items = items.filter((item) => item.category === activeFilter.value)
  }
  const q = search.value.trim().toLowerCase()
  if (!q) return items
  return items.filter((item) => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    )
  })
})

const cartCount = computed(() =>
  cart.value.reduce((total, item) => total + item.quantity, 0)
)

const setFilter = (value: typeof activeFilter.value) => {
  activeFilter.value = value
}

const addToCart = (product: MarketplaceItem) => {
  const existing = cart.value.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category,
      quantity: 1,
    })
  }
  persistCart()
}
</script>

<template>
  <div class="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-50 via-amber-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="space-y-4">
          <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
            🛒 Marketplace
            <span class="w-1 h-1 rounded-full bg-amber-400" />
            Pet essentials
          </p>
          <h1 class="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Shop for everything your pet <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">loves</span>
          </h1>
          <p class="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Discover curated food, toys, accessories, and comfort items - all picked with happy
            paws in mind. This is a demo marketplace; items are for display only.
          </p>
          <!-- Search -->
          <div class="mt-2">
            <input
              v-model="search"
              type="text"
              placeholder="Search by name, category, or description..."
              class="w-full max-w-md rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 px-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/80"
            />
          </div>
        </div>

        <div class="flex flex-col items-end gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <!-- Cart summary -->
          <router-link
            to="/marketplace/cart"
            class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <span class="text-base">🧺</span>
            <span class="font-semibold">View cart</span>
            <span class="inline-flex items-center justify-center min-w-[1.75rem] h-7 rounded-full bg-amber-500 text-white text-xs font-bold">
              {{ cartCount }}
            </span>
          </router-link>

          <!-- Filters + My Orders -->
          <div class="flex flex-wrap justify-end gap-2 sm:gap-3">
            <router-link
              to="/marketplace/orders"
              class="px-3 py-2 rounded-full border border-emerald-400/70 text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-white/80 dark:bg-slate-900/80 hover:bg-emerald-50 dark:hover:bg-slate-800 transition"
            >
              My orders
            </router-link>
          <button
            class="px-3 py-2 rounded-full border shadow-sm"
            :class="activeFilter === 'All'
              ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-700/80'
              : 'bg-white/40 dark:bg-slate-900/40 border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition'"
            @click="setFilter('All')"
          >
            All
          </button>
          <button
            class="px-3 py-2 rounded-full border"
            :class="activeFilter === 'Food'
              ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-700/80 shadow-sm'
              : 'bg-white/40 dark:bg-slate-900/40 border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition'"
            @click="setFilter('Food')"
          >
            Food
          </button>
          <button
            class="px-3 py-2 rounded-full border"
            :class="activeFilter === 'Toys'
              ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-700/80 shadow-sm'
              : 'bg-white/40 dark:bg-slate-900/40 border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition'"
            @click="setFilter('Toys')"
          >
            Toys
          </button>
          <button
            class="px-3 py-2 rounded-full border"
            :class="activeFilter === 'Accessories'
              ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-700/80 shadow-sm'
              : 'bg-white/40 dark:bg-slate-900/40 border-transparent hover:border-slate-300/80 dark:hover:border-slate-600/80 transition'"
            @click="setFilter('Accessories')"
          >
            Accessories
          </button>
          </div>
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

          <div class="flex flex-col h-full">
            <!-- Image -->
            <div class="h-40 w-full overflow-hidden">
              <img
                :src="product.imageUrl"
                :alt="product.name"
                class="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div class="p-5 flex flex-col flex-1">
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
                  @click="addToCart(product)"
                >
                  Add to cart
                  <span class="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped>  </style>