<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Detail Produk (Gambar - Fitur - Spesifikasi) -->
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mt-32 md:mt-20 lg:mt-20">
      <!-- Gambar dan Deskripsi -->
      <div class="flex-1 flex flex-col items-center justify-center text-center lg:text-left px-4">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title"
          class="w-full max-w-xs md:max-w-sm object-contain rounded-lg mb-4" />
      </div>
      <!-- Vertical Divider -->
      <div class="hidden lg:block w-px bg-gray-950"></div>
      <!-- Fitur -->
      <div class="flex-1 px-4 border-t lg:border-t-0 lg:border-l border-gray-300 pt-4 lg:pt-0" v-if="features.length">
        <h2 class="text-xl font-semibold mb-2">Features</h2>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li v-for="(fitur, index) in features" :key="index">{{ fitur }}</li>
        </ul>
      </div>
      <!-- Vertical Divider -->
      <div class="hidden lg:block w-px bg-gray-950"></div>
      <!-- Spesifikasi -->
      <div class="flex-1 px-4 border-t lg:border-t-0 lg:border-l border-gray-300 pt-4 lg:pt-0">
        <h2 class="text-xl font-semibold mb-2">Specification</h2>
        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-800">
          <li><strong>Switching Capacity :</strong> {{ product.switching }}</li>
          <li><strong>Throughput :</strong> {{ product.throughput }}</li>
          <li><strong>Interface :</strong> {{ product.Interface }}</li>
          <ul class="list-disc pl-5">
            <li v-if="product.Interface1">{{ product.Interface1 }}</li>
            <li v-if="product.Interface2">{{ product.Interface2 }}</li>
            <li v-if="product.Interface3">{{ product.Interface3 }}</li>
            <li v-if="product.Interface4">{{ product.Interface4 }}</li>
          </ul>
          <li><strong>Control Unit :</strong> {{ product.cu }}</li>
          <ul class="list-disc pl-5">
            <li v-if="product.cu1">{{ product.cu1 }}</li>
            <li v-if="product.cu2">{{ product.cu2 }}</li>
            <li v-if="product.cu3">{{ product.cu3 }}</li>
            <li v-if="product.cu4">{{ product.cu4 }}</li>
          </ul>
          <li><strong>Additional Interface :</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.aditionalinterface1">{{ product.aditionalinterface1 }}</li>
            <li v-if="product.aditionalinterface2">{{ product.aditionalinterface2 }}</li>
            <li v-if="product.aditionalinterface3">{{ product.aditionalinterface3 }}</li>
            <li v-if="product.aditionalinterface4">{{ product.aditionalinterface4 }}</li>
          </ul>
          <li><strong>MAC Address :</strong> {{ product.macaddress }}</li>
          <li><strong>Routing Table :</strong> {{ product.routingtable }}</li>
          <li><strong>Dustproof and waterproof :</strong> {{ product.dustproofwaterproof }}</li>
          <li><strong>Noise :</strong> {{ product.noise }}</li>
          <li><strong>MTBF :</strong> {{ product.mtbf }}</li>
          <li><strong>Operating Temp :</strong> {{ product.operatingtemperature }}</li>
          <li><strong>Storage Temp :</strong> {{ product.storagetemperature }}</li>
          <li><strong>Humidity :</strong> {{ product.operatinghumidity }}</li>
          <li><strong>Power :</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.power1">{{ product.power1 }}</li>
            <li v-if="product.power2">{{ product.power2 }}</li>
          </ul>
          <li><strong>Dimensions :</strong> {{ product.dimensions }}</li>
        </ul>
      </div>
    </div>
    <!-- Overview -->
    <div class="w-full max-w-7xl px-4 mt-8">
      <h2 class="text-xl font-semibold mb-2">Overview</h2>
      <p class="text-gray-800 text-sm">{{ product.descriptions }}</p>
    </div>
    <!-- Diagram Section -->
    <div v-if="selectedProduct && DiagramComponent" class="w-full max-w-7xl px-4 mt-8">
      <h2 class="text-xl font-semibold mb-2 justify-center text-center">
        {{ selectedProduct.title || product.title }}<br>
        {{ selectedProduct.category }} {{ selectedProduct.subCategory }} Network Diagram
      </h2>
      <!-- Komponen diagram dinamis -->
      <component :is="DiagramComponent" />
    </div>
    <!-- State kosong/jika diagram tidak ditemukan -->
    <div v-else-if="selectedProduct && !DiagramComponent" class="w-full max-w-7xl px-4 mt-8">
      <div class="text-sm text-gray-500">
        Diagram belum tersedia untuk produk ini.
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '@/composable/useProducts'

// Diagram components
import AccessDiagram from './components/AccessDiagram.vue'
import AccessSwitchDiagram from './components/AccessSwitchDiagram.vue'
import ApControllerDiagram from './components/ApControllerDiagram.vue'
import DistributionsDiagram from './components/DistributionsDiagram.vue'
import DistributionsSwitchDiagram from './components/DistributionsSwitchDiagram.vue'
import UsersDiagram from './components/UsersDiagram.vue'
import AccessPointDiagram from './components/AccessPointDiagram.vue'

const route = useRoute()

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { products } = useProducts()

// Fitur dari props.product (sesuai data yang kamu kirim dari parent)
const features = computed(() =>
  Array.from({ length: 15 }, (_, i) => props.product?.[`fitur${i + 1}`]).filter((f) => f && f !== 'null'),
)

// --- Pilih produk berdasar slug di URL; fallback ke props.product jika list belum siap ---
const selectedProduct = computed(() => {
  const slug = route.params.slug
  if (!slug) return props.product || null
  const list = products?.value || []
  return list.find((p) => p.slug === slug) || props.product || null
})

// Pemetaan nama diagram -> komponen
const diagramMap = {
  access: AccessDiagram,
  accessswitch: AccessSwitchDiagram,
  accesspoint: AccessPointDiagram,
  distributions: DistributionsDiagram,
  distributionsswitch: DistributionsSwitchDiagram,
  apcontroller: ApControllerDiagram,
  users: UsersDiagram,
}

// Komponen diagram yang dipilih (case-insensitive + optional chaining aman)
const DiagramComponent = computed(() => {
  const key = selectedProduct.value?.diagram?.toString()?.trim()?.toLowerCase()
  return key ? diagramMap[key] || null : null
})
</script>

<style scoped>
/* Opsional: garis pemisah untuk layar besar sudah pakai border/tailwind.
   Tambahan styling kecil jika diperlukan. */
</style>
