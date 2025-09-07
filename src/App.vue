<template>
  <!-- Pakai layout terpilih (Guest/Auth/Blank) -->
  <component :is="layoutComp">
    <div class="app">
      <!-- Navbar & Footer disembunyikan saat noLayout/blank -->
      <Navbar v-if="!isNoLayout" />

      <main :class="isNoLayout ? 'min-h-screen' : ''">
        <RouterView />
      </main>

      <CustomerVIew v-if="!isNoLayout" />
      <Footer v-if="!isNoLayout" />
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import GuestLayout from './layouts/GuestLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import BlankLayout from './layouts/BlankLayout.vue'

import Navbar from './components/Navbar.vue'
import CustomerVIew from '@/components/partial/CustomerVIew.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

/**
 * isNoLayout = true jika:
 * - route.meta.noLayout === true, ATAU
 * - route.meta.layout === 'blank'
 */
const isNoLayout = computed(() => route.meta.noLayout === true || route.meta.layout === 'blank')

/**
 * Pilih layout berdasarkan route.meta.layout
 * - 'blank'  -> BlankLayout (kosong)
 * - 'auth'   -> AuthLayout
 * - default  -> GuestLayout
 */
const layoutComp = computed(() => {
  const name = route.meta.layout || 'guest'
  if (name === 'blank') return BlankLayout
  return name === 'auth' ? AuthLayout : GuestLayout
})
</script>

<style>
/* opsional */
html, body, #app {
  height: 100%;
}
</style>
