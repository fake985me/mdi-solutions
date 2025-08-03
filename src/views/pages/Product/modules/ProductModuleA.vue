<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Detail Produk (Gambar - Fitur - Spesifikasi) -->
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mt-32 md:mt-20 lg:mt-20">
      <!-- Gambar dan Deskripsi -->
      <div class="flex-1 flex flex-col items-center justify-center text-center lg:text-left px-4">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full max-w-xs md:max-w-sm object-contain rounded-lg mb-4"
        />
      </div>

      <!-- Vertical Divider -->
      <div class="hidden lg:block w-px bg-gray-950"></div>

      <!-- Fitur -->
      <div
        class="flex-1 px-4 border-t lg:border-t-0 lg:border-l border-gray-300 pt-4 lg:pt-0"
        v-if="features.length"
      >
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
          <li><strong>Flash Memory:</strong> {{ product.flashmemory }}</li>
          <li><strong>SDRAM Memory:</strong> {{ product.sdrammemory }}</li>
          <li><strong>Interface:</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.Interface1">{{ product.Interface1 }}</li>
            <li v-if="product.Interface2">{{ product.Interface2 }}</li>
            <li v-if="product.Interface3">{{ product.Interface3 }}</li>
            <li v-if="product.Interface4">{{ product.Interface4 }}</li>
          </ul>
          <li><strong>Operating Temp:</strong> {{ product.operatingtemperature }}</li>
          <li><strong>Storage Temp:</strong> {{ product.storagetemperature }}</li>
          <li><strong>Humidity:</strong> {{ product.operatinghumidity }}</li>
          <li><strong>Power:</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.power1">{{ product.power1 }}</li>
            <li v-if="product.power2">{{ product.power2 }}</li>
          </ul>
          <li><strong>Power Consumption:</strong> {{ product.powercomsumptions }}</li>
          <li><strong>Dimensions:</strong> {{ product.dimensions }}</li>
        </ul>
      </div>
    </div>

    <!-- Overview -->
    <div class="w-full max-w-7xl px-4 mt-8">
      <h2 class="text-xl font-semibold mb-2">Overview</h2>
      <p class="text-gray-800 text-sm">{{ product.descriptions }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// Ambil fitur dari product.fitur1 - fitur15
const features = computed(() => {
  return Array.from({ length: 15 }, (_, i) => props.product[`fitur${i + 1}`]).filter(
    (f) => f && f !== 'null',
  )
})
</script>
