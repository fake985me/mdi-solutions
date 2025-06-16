<template>
  <section class="py-8 px-4 relative" id="Product">
    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold">Our Products</h2>
      <p class="text-gray-500">choose what you need</p>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center flex-wrap gap-2 mb-6">
      <div v-for="(tab, tabName) in tabs" :key="tabName" @click="setTabActive(tabName)"
        class="cursor-pointer px-4 py-2 border rounded-md text-sm font-medium" :class="{
          'bg-gray-900 text-white': tabName === activeTab,
          'bg-gray-100 text-gray-700': tabName !== activeTab,
        }">
        {{ tabName }}
      </div>
    </div>

    <!-- Card container -->
    <div class="relative overflow-hidden max-w-7xl mx-auto">
      <div class="flex justify-center gap-6 transition-all duration-500 ease-in-out">
        <div v-for="(product, index) in groupedProducts[currentIndex]" :key="index"
          class="bg-white shadow-md rounded-lg w-full max-w-xs p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
          <img :src="product.logo" alt="logo" class="h-8 object-contain mb-2" />
          <RouterLink :to="`/product/${product.id}`" class="w-full flex flex-col items-center">
            <img :src="product.image" :alt="product.title" class="h-28 object-contain mb-2" />
            <h4 class="text-base font-semibold">{{ product.title }}</h4>
            <ul>
              <li class="text-sm text-gray-600 mt-1">{{ product.port }}</li>
              <li class="text-sm text-gray-600 mt-1">{{ product.textc }}</li>
              <li class="text-sm text-gray-600 mt-1">{{ product.descriptions }}</li>
            </ul>
          </RouterLink>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full z-10">
        ❮
      </button>
      <button @click="nextSlide"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700 text-white p-2 rounded-full z-10">
        ❯
      </button>

      <!-- Dots -->
      <div class="flex justify-center mt-6 gap-2 relative z-10">
        <button v-for="(group, idx) in groupedProducts" :key="idx"
          class="w-3 h-3 rounded-full bg-gray-300 transition-colors duration-300"
          :class="{ 'bg-blue-600': idx === currentIndex }" @click="goToSlide(idx)"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import products from '@/composable/useProducts'

const activeTab = ref('XGS-Pon')
const currentIndex = ref(0)
const productsPerSlide = ref(4)

const tabs = ref({
  'XGS-Pon': {
    products: products.value.filter((p) =>
      [
        'XGS-Pon',
        'OLT',
        'ONT',
        'ONU'
      ].includes(p.category, p.subCategory),
    ),
  },
  'G-Pon': {
    products: products.value.filter((p) =>
      [
        'G-Pon',
        'OLT',
        'ONT',
        'ONU'
      ].includes(p.category, p.subCategory),
    ),
  },
  'Switch': {
    products: products.value.filter((p) =>
      [
        'Switch',
        'CoreSwitch',
        'L2Switch',
        'L3Switch',
      ].includes(p.category, p.subCategory),
    ),
  },
  'WiFi': {
    products: products.value.filter((p) =>
      [
        'WiFi', 'Controller', 'AccessPoint'
      ].includes(p.category, p.subCategory),
    ),
  },
})


function setTabActive(tab) {
  activeTab.value = tab
  currentIndex.value = 0
}

function nextSlide() {
  const total = groupedProducts.value.length
  currentIndex.value = (currentIndex.value + 1) % total
}

function prevSlide() {
  const total = groupedProducts.value.length
  currentIndex.value = (currentIndex.value - 1 + total) % total
}

function goToSlide(index) {
  currentIndex.value = index
}

function updateProductsPerSlide() {
  const width = window.innerWidth
  if (width < 640) {
    productsPerSlide.value = 1
  } else if (width < 1024) {
    productsPerSlide.value = 2
  } else {
    productsPerSlide.value = 4
  }
}

onMounted(() => {
  updateProductsPerSlide()
  window.addEventListener('resize', updateProductsPerSlide)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateProductsPerSlide)
})

const groupedProducts = computed(() => {
  const currentProducts = tabs.value[activeTab.value]?.products || []
  const result = []
  for (let i = 0; i < currentProducts.length; i += productsPerSlide.value) {
    result.push(currentProducts.slice(i, i + productsPerSlide.value))
  }
  return result
})
</script>
