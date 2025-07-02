<template>
  <component :is="layout">
    <div class="app">
      <Navbar />
      <main>
        <router-view />
      </main>
      <CustomerVIew />
      <Footer />
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import GuestLayout from './layouts/GuestLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

import Navbar from './components/Navbar.vue'
import CustomerVIew from '@/components/partial/CustomerVIew.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : GuestLayout
})
</script>
