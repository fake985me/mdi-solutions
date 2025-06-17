<template>
  <div v-if="product" class="min-h-screen">
    <!-- === -->
    <section class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
          <h1 class="text-2xl md:text-2xl text-center font-semibold text-violet-800">
            {{ product.title }}
          </h1>

          <!-- Gambar Utama -->
          <div class="w-full h-auto">
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <p class="w-full px-3 md:!px-0 md:pr-8 text-normal md:text-xl my-6">
            {{ descriptions }}
          </p>
        </div>

        <div class="w-full flex flex-row mt-6 md:!mt-0">
          <div class="w-10/12 pl-4">
            <h1 class="text-xl md:text-3xl font-semibold text-gray-800">Features</h1>
            <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm py-3">
              <li>{{ fitur1 }}</li>
              <li>{{ fitur2 }}</li>
              <li>{{ fitur3 }}</li>
              <li>{{ fitur4 }}</li>
              <li>{{ fitur5 }}</li>
              <li>{{ fitur6 }}</li>
              <li>{{ fitur7 }}</li>
              <li>{{ fitur8 }}</li>
              <li>{{ fitur9 }}</li>
              <li>{{ fitur10 }}</li>
            </ul>
          </div>
        </div>

        <div class="w-full mt-6 md:!mt-0">
          <div class="w-10/12 pl-4">
            <h1 class="text-xl md:text-3xl font-semibold text-gray-800">Specification</h1>
            <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm py-3">
              <li><strong class="mr-1">Flash Memory :</strong>{{ fitur11 }}</li>
              <li><strong class="mr-1">SDRAM Memory :</strong>{{ fitur12 }}</li>
              <li><strong class="mr-1">Interface :</strong>{{ fitur13 }}</li>
              <li><strong class="mr-1">Operating Temperature :</strong>{{ fitur14 }}</li>
              <li><strong class="mr-1">Storage Temperature :</strong>{{ fitur15 }}</li>
              <li><strong class="mr-1">Operating Humidity :</strong>{{ fitur16 }}</li>
              <li><strong class="mr-1">Power :</strong>{{ fitur17 }}</li>
              <li><strong class="mr-1">Power Consumption :</strong>{{ fitur18 }}</li>
              <li><strong class="mr-1">Dimensions (W x H x D) :</strong>{{ fitur19 }}</li>
              <li>{{ fitur20 }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
        <h1 class="text-xl md:text-xl font-semibold text-gray-800">
          Network configuration diagram
        </h1>

        <div class="p-3 w-full h-auto">
          <img
            :src="product.networkdiagram"
            :alt="product.title"
            class="w-cover h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <!-- Related Products -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Related Products</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in relatedProducts"
            :key="item.id"
            class="bg-white shadow-md rounded-xl hover:scale-105 duration-300 hover:shadow-xl"
          >
            <RouterLink :to="`/product/${item.slug}`">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-44 object-contain rounded-t-lg p-4"
              />
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import products from '@/composable/useProducts'

// Ambil slug dari URL
const route = useRoute()
const slug = route.params.slug

// Cari produk berdasarkan slug
const product = ref(null)

onMounted(() => {
  product.value = products.value.find((p) => p.slug === slug)
  if (!product.value) {
    console.warn('Produk tidak ditemukan untuk slug:', slug)
  }
})

// Ambil related products berdasarkan kategori
const relatedProducts = computed(() => {
  if (!product.value) return []
  return products.value
    .filter((p) => p.category === product.value.category && p.slug !== product.value.slug)
    .slice(0, 4)
})

// Deskripsi & fitur fallback
const descriptions = computed(() => product.value?.description || '')
const fitur1 = computed(() => product.value?.fitur1 || '')
const fitur2 = computed(() => product.value?.fitur2 || '')
const fitur3 = computed(() => product.value?.fitur3 || '')
const fitur4 = computed(() => product.value?.fitur4 || '')
const fitur5 = computed(() => product.value?.fitur5 || '')
const fitur6 = computed(() => product.value?.fitur6 || '')
const fitur7 = computed(() => product.value?.fitur7 || '')
const fitur8 = computed(() => product.value?.fitur8 || '')
const fitur9 = computed(() => product.value?.fitur9 || '')
const fitur10 = computed(() => product.value?.fitur10 || '')
const fitur11 = computed(() => product.value?.fitur11 || '')
const fitur12 = computed(() => product.value?.fitur12 || '')
const fitur13 = computed(() => product.value?.fitur13 || '')
const fitur14 = computed(() => product.value?.fitur14 || '')
const fitur15 = computed(() => product.value?.fitur15 || '')
const fitur16 = computed(() => product.value?.fitur16 || '')
const fitur17 = computed(() => product.value?.fitur17 || '')
const fitur18 = computed(() => product.value?.fitur18 || '')
const fitur19 = computed(() => product.value?.fitur19 || '')
const fitur20 = computed(() => product.value?.fitur20 || '')
</script>
