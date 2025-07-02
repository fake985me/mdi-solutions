<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h2 class="text-xl font-semibold mb-4 text-center">Login</h2>
      <div class="mb-4">
        <label for="email" class="block text-gray-700">Email</label>
        <input v-model="email" type="email" id="email" class="w-full p-2 border rounded" required />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebaseConfig'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleSubmit = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    authStore.setUser(userCredential.user)
    router.push('/dashboard')
  } catch (error) {
    console.error('Login gagal:', error.code, error.message)
    alert('Login gagal: ' + error.message)
  }
}
</script>
