<script setup lang="ts">
import { useRouter } from 'vue-router'
import {ref} from 'vue'

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const handleLogin = () => 
{
    //fake login validation
    if(email.value && password.value)
    {
        // In a real app, you'd verify credentials here
        router.push('/') // Redirect to home on successful login
    }
     else 
     {
        errorMessage.value = 'Please enter both email and password.'
        return
     }
}

const handleGoogleLogin = () => {
   //temporary fake google login
   router.push('/') // Redirect to home on successful login
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center 
              bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
              dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

    <div class="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl w-full max-w-md">

      <h2 class="text-3xl font-bold text-center mb-8 
                 text-gray-900 dark:text-white">
        Sign In to Pawmie
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-6">

        <div>
          <label class="block mb-2 text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-3 rounded-xl
                   border border-gray-300
                   dark:border-gray-600
                   dark:bg-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <div>
          <label class="block mb-2 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-3 rounded-xl
                   border border-gray-300
                   dark:border-gray-600
                   dark:bg-gray-700 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm mt-2">
            {{ errorMessage }}
        </p>

        <button
            type="submit"
            class="w-full py-4 rounded-2xl
                    bg-gradient-to-r from-blue-500 to-purple-500
                    text-white font-semibold text-lg
                    hover:opacity-90 transition">
            Sign In
        </button>

        <div class="mt-6 text-center">

        <div class="flex items-center gap-4 mb-4">
            <div class="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
            <span class="text-gray-500 dark:text-gray-400 text-sm">OR</span>
            <div class="flex-1 h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>

        <button
            @click="handleGoogleLogin"
            class="w-full py-3 rounded-xl
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-600
                flex items-center justify-center gap-3
                hover:shadow-md transition">

            <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            class="w-5 h-5"/>
            
            <span class="font-medium text-gray-700 dark:text-white">
            Sign in with Google
            </span>
        </button>

        <div class="mt-6 text-center text-sm text-grey-600 dark:text-gray-300">
            Don't have an account?
            <roter-link to="/signup"
                        class="text-blue-500 hover:underline font-medium">
                Sign up
            </roter-link>
        </div>
        
        </div>

      </form>

    </div>
  </div>
</template>
