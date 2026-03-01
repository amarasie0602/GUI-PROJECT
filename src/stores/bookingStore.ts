import { ref, computed } from 'vue'

export interface Booking {
  id: string
  petName: string
  ownerName: string
  userEmail: string
  service: string
  category: string
  date: string
  time: string
  notes?: string
}

const STORAGE_KEY = 'pawmie_bookings'

function getCurrentUserEmail(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('userEmail')
}

function loadInitialBookings(): Booking[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      // Some dummy seed data for initial view
      return [
        {
          id: 'demo-1',
          petName: 'Buddy',
          ownerName: 'Alice',
          userEmail: 'demo@pawmie.com',
          service: 'Vet Appointment Booking',
          category: 'Medical Care',
          date: '2026-03-05',
          time: '10:30',
          notes: 'Annual health check-up',
        },
        {
          id: 'demo-2',
          petName: 'Milo',
          ownerName: 'Rahul',
          userEmail: 'demo@pawmie.com',
          service: 'Grooming Booking',
          category: 'Grooming & Training',
          date: '2026-03-08',
          time: '15:00',
          notes: 'Full grooming session',
        },
      ]
    }
    const parsed = JSON.parse(raw) as Booking[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const bookings = ref<Booking[]>(loadInitialBookings())

function persist() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings.value))
  } catch {
    // ignore storage errors for now
  }
}

export function useBookingStore() {
  const addBooking = (booking: Omit<Booking, 'id' | 'userEmail'>) => {
    const email = getCurrentUserEmail() ?? 'unknown'
    const newBooking: Booking = {
      ...booking,
      userEmail: email,
      id: `bk-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    }
    bookings.value.push(newBooking)
    persist()
  }

  const groupedByCategory = computed(() => {
    const groups: Record<string, Booking[]> = {}
    for (const booking of bookings.value) {
      let list = groups[booking.category]
      if (!list) {
        list = []
        groups[booking.category] = list
      }
      list.push(booking)
    }
    return groups
  })

  const myGroupedByCategory = computed(() => {
    const email = getCurrentUserEmail()
    if (!email) return {}
    const groups: Record<string, Booking[]> = {}
    for (const booking of bookings.value) {
      if (booking.userEmail !== email) continue
      let list = groups[booking.category]
      if (!list) {
        list = []
        groups[booking.category] = list
      }
      list.push(booking)
    }
    return groups
  })

  return {
    bookings,
    addBooking,
    groupedByCategory,
    myGroupedByCategory,
  }
}

