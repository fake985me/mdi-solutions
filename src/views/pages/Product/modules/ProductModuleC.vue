<template>
  <section class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
    <h2 class="text-3xl font-bold text-center">Product Detail</h2>

    <!-- Tombol Back -->
    <div class="w-full max-w-7xl mb-4">
      <RouterLink
        to="/product"
        class="inline-flex items-center text-sm text-sky-900 hover:underline"
      >
        ← Back to Products
      </RouterLink>
    </div>

    <!-- Detail Produk (Gambar - Fitur - Spesifikasi) -->
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-6">
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
          <li><strong>Flash Memory :</strong> {{ product.flashmemory }}</li>
          <li><strong>SDRAM Memory :</strong> {{ product.sdrammemory }}</li>
          <li><strong>Interface :</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.Interface1">{{ product.Interface1 }}</li>
            <li v-if="product.Interface2">{{ product.Interface2 }}</li>
            <li v-if="product.Interface3">{{ product.Interface3 }}</li>
            <li v-if="product.Interface4">{{ product.Interface4 }}</li>
          </ul>
          <li><strong>Operating Temp :</strong> {{ product.operatingtemperature }}</li>
          <li><strong>Power :</strong></li>
          <ul class="list-disc pl-5">
            <li v-if="product.power1">{{ product.power1 }}</li>
            <li v-if="product.power2">{{ product.power2 }}</li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- Overview -->
    <div class="w-full max-w-7xl px-4 mt-8">
      <h2 class="text-xl font-semibold mb-2">Overview</h2>
      <p class="text-gray-800 text-sm">{{ product.descriptions }}</p>
    </div>

    <!-- Diagram Jaringan -->
    <div class="w-full text-center mt-16 px-4" v-if="product.networkdiagram">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Network Configuration Diagram</h2>
      <img
        :src="product.networkdiagram"
        :alt="product.title"
        class="mx-auto w-full max-w-xl rounded-lg"
      />
    </div>

    <!-- Related Products -->
    <section class="mt-16 w-full max-w-7xl px-4" v-if="relatedProducts.length">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in relatedProducts"
          :key="item.id"
          class="bg-white border-1 border-slate-900 shadow-md rounded-xl hover:scale-105 duration-300 hover:shadow-xl"
        >
          <RouterLink :to="`/product/${item.slug}`">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-44 object-contain rounded-t-lg p-4"
            />
          </RouterLink>
          <div class="px-4 py-3 text-center">
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

// Ambil fitur dari product.fitur1 - fitur15
const features = computed(() => {
  return Array.from({ length: 15 }, (_, i) => props.product[`fitur${i + 1}`]).filter(
    (f) => f && f !== 'null',
  )
})

// Related Products: limit 4 & cocok subcategory
const relatedProducts = computed(() => {
  return products.value
    .filter(
      (p) =>
        p.category === props.product.category &&
        p.subCategory === props.product.subCategory &&
        p.slug !== props.product.slug,
    )
    .slice(0, 4)
})
</script>
