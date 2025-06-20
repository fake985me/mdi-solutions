<template>
  <section class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
    <!-- Detail Produk -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="relative basis-1/2 text-center md:text-left px-2 py-0 md:py-6 self-center col-span-2">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title" class="w-full rounded-lg mb-4" />
        <p class="text-gray-600 mb-4">{{ product.descriptions }}</p>
      </div>

      <!-- Fitur -->
      <div class="col-span-1" v-if="features.length">
        <h2 class="text-xl font-semibold mb-2">Features</h2>
        <ul class="list-disc pl-5">
          <li v-for="(fitur, index) in features" :key="index">{{ fitur }}</li>
        </ul>
      </div>

      <!-- Spesifikasi -->
      <div class="w-full col-span-1">
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
          <li><strong>Antenna:</strong> {{ product.Antena }}</li>
          <li><strong>Operating Temp:</strong> {{ product.operatingtemperature }}</li>
          <li><strong>Humidity:</strong> {{ product.operatinghumidity }}</li>
          <li><strong>Power Optical:</strong> {{ product.poweroptical }}</li>
        </ul>
      </div>
    </div>

    <!-- Diagram Jaringan -->
    <div class="w-full text-center mt-16" v-if="product.networkdiagram">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Network Configuration Diagram</h2>
      <img :src="product.networkdiagram" :alt="product.title" class="mx-auto w-1/2 rounded-lg" />
    </div>

    <!-- Related Products -->
    <section class="mt-16 w-full" v-if="relatedProducts.length">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in relatedProducts" :key="item.id"
          class="bg-white shadow-md rounded-xl hover:scale-105 duration-300 hover:shadow-xl">
          <RouterLink :to="`/product/${item.slug}`">
            <img :src="item.image" :alt="item.title" class="w-full h-44 object-contain rounded-t-lg p-4" />
          </RouterLink>
          <div class="px-4 py-3">
            <h3 class="text-md font-semibold text-gray-900 truncate">
              <RouterLink :to="`/product/${item.slug}`" class="hover:underline">
                {{ item.title }}
              </RouterLink>
            </h3>
            <p class="text-sm text-gray-500" v-if="item.port">{{ item.port }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import products from '@/composable/useProducts'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// Daftar fitur yang valid (tidak kosong dan bukan string 'null')
const features = computed(() => {
  return Array.from({ length: 20 }, (_, i) => props.product[`fitur${i + 1}`])
    .filter((f) => f && f !== 'null')
})

// Produk terkait (related)
const relatedProducts = computed(() => {
  return products.value.filter(
    (p) =>
      p.category === props.product.category &&
      p.slug !== props.product.slug
  )
})
</script>
