<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleSignup = () => {
  if (email.value && password.value) {
    router.push('/')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

    <div class="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

      <h2 class="text-3xl font-bold text-center mb-8">
        Create Account
      </h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-4 px-4 py-3 rounded-xl border"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-6 px-4 py-3 rounded-xl border"
      />

      <button
        @click="handleSignup"
        class="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      >
        Sign Up
      </button>

    </div>
  </div>
</template>
