<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useBookingStore } from '@/stores/bookingStore'

const props = defineProps<{
  service?: string
  category?: string
  heading?: string
}>()

const router = useRouter()
const { addBooking } = useBookingStore()

const form = reactive({
  petName: '',
  ownerName: '',
  service: props.service ?? '',
  category: props.category ?? '',
  date: '',
  time: '',
  notes: '',
})

const handleSubmit = () => {
  if (!form.petName || !form.ownerName || !form.service || !form.category || !form.date || !form.time) {
    alert('Please fill in all required fields.')
    return
  }

  addBooking({
    petName: form.petName,
    ownerName: form.ownerName,
    service: form.service,
    category: form.category,
    date: form.date,
    time: form.time,
    notes: form.notes || undefined,
  })

  alert('Booking saved (dummy data).')
  router.push('/my-bookings')
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-lg">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
      {{ heading || 'Book Service' }}
    </h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
          Pet Name *
        </label>
        <input
          v-model="form.petName"
          type="text"
          class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="Enter your pet's name"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
          Owner Name *
        </label>
        <input
          v-model="form.ownerName"
          type="text"
          class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="Enter your name"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
            Service *
          </label>
          <input
            v-model="form.service"
            type="text"
            class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="e.g. Vet Appointment Booking"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
            Category *
          </label>
          <input
            v-model="form.category"
            type="text"
            class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="e.g. Medical Care"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
            Date *
          </label>
          <input
            v-model="form.date"
            type="date"
            class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
            Time *
          </label>
          <input
            v-model="form.time"
            type="time"
            class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">
          Notes
        </label>
        <textarea
          v-model="form.notes"
          rows="3"
          class="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 resize-none"
          placeholder="Any special instructions for your pet"
        />
      </div>

      <button
        type="submit"
        class="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        Confirm Booking
      </button>
    </form>
  </div>
</template>

<style scoped>  </style>