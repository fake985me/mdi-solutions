<template>
  <div class="w-screen flex flex-col items-center justify-center bg-white relative">
    <!-- Tombol kembali -->
    <button
      @click="goBack"
      class="top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      ← Kembali
    </button>

    <!-- Tampilkan diagram sesuai tipe -->
    <OpticLine
      v-if="diagramType.startsWith('optic_')"
      :product="selectedProduct"
      :diagram="diagramType"
    />
    <SwitchLine
      v-else-if="diagramType.startsWith('switch_')"
      :product="selectedProduct"
      :diagram="diagramType"
    />
    <Wireless
      v-else-if="diagramType.startsWith('wireless')"
      :product="selectedProduct"
      :diagram="diagramType"
    />
    <DiagramUnavailable v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from '@/composable/useProducts'

// Import komponen diagram
import OpticLine from './OpticLine.vue'
import SwitchLine from './SwitchLine.vue'
import Wireless from './WifiLine.vue'
import DiagramUnavailable from './DiagramUnavailable.vue'

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.query.slug || '')

const { products } = useProducts()
const selectedProduct = computed(() => {
  const list = products?.value || []
  return list.find((p) => p.slug === slug.value) || null
})

// Pakai field diagram dari data product
const diagramType = computed(() =>
  (selectedProduct.value?.diagram || '').toString().trim().toLowerCase()
)

// Fungsi tombol kembali
const goBack = () => {
  // kembali ke halaman produk jika ada slug
  if (slug.value) {
    router.push(`/product/${slug.value}`)
  } else {
    router.back()
  }
}
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
