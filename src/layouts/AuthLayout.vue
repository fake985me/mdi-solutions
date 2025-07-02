<template>
  <div class="auth-layout">
    <header>
      <button @click="logout">Logout</button>
    </header>
    <main><slot /></main>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()

const logout = () => {
  auth.logout()
  location.reload()
}
</script>
