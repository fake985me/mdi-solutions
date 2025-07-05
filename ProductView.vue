<template>
  <section class="py-8 px-4 relative">
    <h2 class="text-3xl font-bold text-center">Product Solutions</h2>
    <p class="text-gray-800 mb-3">choose what you need</p>

    <!-- Tabs -->
    <div class="flex flex-wrap gap-3 border-b mb-4 justify-center">
      <div v-for="(tab, i) in tabs" :key="i" @click="
        () => {
          activeTab = i
          activeSubTab = 0
          desktopIndex = 0
          mobileIndex = 0
        }
      " :class="[
        'cursor-pointer py-2 px-2 border-b-2',
        i === activeTab
          ? 'border-blue-600 text-blue-600 font-bold'
          : 'border-transparent border-b-slate-900 text-gray-800 hover:text-blue-800',
      ]">
        {{ tab.title }}
      </div>
    </div>

    <!-- Sub Tabs -->
    <div v-if="tabs[activeTab].subCategories" class="flex flex-wrap gap-2 -mt-2 mb-8 justify-center">
      <div v-for="(sub, j) in tabs[activeTab].subCategories" :key="j" @click="
        () => {
          activeSubTab = j
          desktopIndex = 0
          mobileIndex = 0
        }
      " :class="[
        'cursor-pointer text-sm py-1 px-3 border-2',
        j === activeSubTab
          ? 'bg-black border-blue-500 rounded-md text-white font-medium'
          : 'bg-white border-slate-900 rounded-md text-gray-900 hover:text-blue-800',
      ]">
        {{ sub }}
      </div>
    </div>

    <!-- Desktop Grid (4 per page) -->
    <div class="hidden md:flex justify-center items-center relative">
      <button v-if="pagedDesktop.length > 1" @click="prevDesktop"
        class="block absolute left-4 top-1/2 -translate-y-1/2 px-2 py-1 z-10">
        ❮
      </button>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-7xl px-16">
        <div v-for="(product, i) in pagedDesktop[desktopIndex]" :key="i"
          class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
          <RouterLink :to="`/product/${product.slug}`" class="block flex-1 flex-col justify-between">
            <img :src="product.logo" alt="logo" class="h-6 mb-2 mx-auto" />
            <div class="aspect-w-16 aspect-h-16 bg-gradient-to-br from-primary-50 to-primary-100">
              <div class="w-50 h-48 flex object-contain justify-center item-center mx-auto p-4">
                <div class="w-80% h-80% bg-primary-200 rounded-full flex items-center justify-center">
                  <img :src="product.image" alt="" />
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-lg font-mono font-semibold mb-1 line-clamp-2">{{ product.title }}</h3>
              </div>
              <ul class="text-xs text-shadow-2xl/30 shadow-slate-300 font-semibold italic text-black -mt-2">
                <li class="text-sm overline">
                  {{ product.subtitle }}
                </li>
                <ul class="list-disc pl-5 text-justify text-xs text-gray-950 mt-1" v-if="getSpecs(product).length">
                  <li v-for="(spec, index) in getSpecs(product)" :key="index">{{ spec }}</li>
                </ul>
              </ul>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="(product, i) in pagedDesktop[desktopIndex]" :key="i"
          class="bg-gradient-to-t from-blue-800 to-transparent border border-slate-950 shadow rounded-md p-4 w-[220px] text-center flex flex-col justify-between min-h-[320px] hover:shadow-lg transition">
          <img :src="product.logo" alt="logo" class="h-6 mb-2 mx-auto" />
          <RouterLink :to="`/product/${product.slug}`" class="block flex-1 flex-col justify-between">
            <div>
              <img :src="product.image" alt="" class="h-24 object-contain mb-2 mx-auto" />
              <h4 class="text-lg font-mono font-semibold mb-1">
                {{ product.title }}
              </h4>
              <ul class="text-xs text-shadow-2xl/30 shadow-slate-300 font-semibold italic text-black -mt-2">
                <li class="text-sm overline">
                  {{ product.subtitle }}
                </li>
                <ul class="list-disc pl-5 text-justify text-xs text-gray-950 mt-1" v-if="getSpecs(product).length">
                  <li v-for="(spec, index) in getSpecs(product)" :key="index">{{ spec }}</li>
                </ul>
              </ul>
            </div>
          </RouterLink>
        </div>
      </div> -->

      <button v-if="pagedDesktop.length > 1" @click="nextDesktop"
        class="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 z-10">
        ❯
      </button>
    </div>

    <!-- Mobile (1 per page + navigation) -->
    <div class="md:hidden text-center relative mt-4">
      <div v-if="pagedMobile.length" class="mx-auto w-[250px] min-h-[130px] flex flex-col items-center relative">
        <div
          class="block bg-gradient-to-t from-blue-800 to-transparent border border-slate-950 shadow rounded-md p-4 max-w-2xl w-full">
          <img :src="pagedMobile[mobileIndex].logo" alt="logo" class="h-6 mb-2 mx-auto" />
          <RouterLink :to="`/product/${pagedMobile[mobileIndex].slug}`">
            <img :src="pagedMobile[mobileIndex].image" alt="" class="w-32 h-28 object-contain mb-2 mx-auto" />
            <h4 class="text-base font-mono font-semibold">{{ pagedMobile[mobileIndex].title }}</h4>
            <ul class="text-sm text-justify font-semibold italic text-black">
              <li>{{ pagedMobile[mobileIndex].subtitle }}</li>
              <ul class="list-disc pl-5 text-justify text-sm whitespace-normal text-gray-950"
                v-if="getSpecs(pagedMobile[mobileIndex]).length">
                <li v-for="(spec, index) in getSpecs(pagedMobile[mobileIndex])" :key="index">
                  {{ spec }}
                </li>
              </ul>
            </ul>
          </RouterLink>
        </div>

        <!-- Mobile Navigation -->
        <div class="flex justify-center gap-6 mt-4">
          <button v-if="pagedMobile.length > 1" @click="prevMobile" class="text-2xl px-3 py-1">
            ❮
          </button>
          <button v-if="pagedMobile.length > 1" @click="nextMobile" class="text-2xl px-3 py-1">
            ❯
          </button>
        </div>
      </div>
    </div>

    <!-- Kosong -->
    <div v-if="filteredProducts.length === 0" class="text-center text-gray-500 py-8">
      No products found in this category.
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import products from '@/composable/useProducts'

const activeTab = ref(0)
const activeSubTab = ref(0)
const desktopIndex = ref(0)
const mobileIndex = ref(0)

const tabs = [
  { title: 'XGSPON', subCategories: ['All', 'OLT', 'ONT', 'XGSPON STICK'] },
  { title: 'GPON', subCategories: ['All', 'OLT', 'ONT', 'ONU PoE', 'ONU', 'GPON STICK'] },
  {
    title: 'SWITCH',
    subCategories: ['All', 'BACKBONE', 'L3 SWITCH', 'L2 SWITCH', 'PoE SWITCH'],
  },
  { title: 'WIRELESS', subCategories: ['All', 'AP', 'CONTROLLER'] },
]

const filteredProducts = computed(() => {
  const category = tabs[activeTab.value].title
  const subCategory = tabs[activeTab.value].subCategories[activeSubTab.value] || 'All'
  let filtered = products.value.filter((p) => p.category === category)
  if (subCategory !== 'All') {
    filtered = filtered.filter((p) => p.subCategory === subCategory)
  }
  return filtered
})

const pagedDesktop = computed(() => {
  const chunkSize = 4
  const pages = []
  const source = filteredProducts.value
  for (let i = 0; i < source.length; i += chunkSize) {
    pages.push(source.slice(i, i + chunkSize))
  }
  return pages
})

// Daftar spec yang valid (tidak kosong dan bukan string 'null')
const getSpecs = (product) => {
  return Array.from({ length: 7 }, (_, i) => product[`spec${i + 1}`]).filter(
    (s) => s && s !== 'null',
  )
}

const pagedMobile = computed(() => {
  return filteredProducts.value
})

const prevDesktop = () => {
  desktopIndex.value =
    (desktopIndex.value - 1 + pagedDesktop.value.length) % pagedDesktop.value.length
}
const nextDesktop = () => {
  desktopIndex.value = (desktopIndex.value + 1) % pagedDesktop.value.length
}

const prevMobile = () => {
  mobileIndex.value = (mobileIndex.value - 1 + pagedMobile.value.length) % pagedMobile.value.length
}
const nextMobile = () => {
  mobileIndex.value = (mobileIndex.value + 1) % pagedMobile.value.length
}

console.log(getSpecs(products.value[0]))

// Sample products to display (4 random products as requested)
const sampleProducts = ref([
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description:
      'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 129.99,
    sku: 'WBH-001',
    unit: 'pcs',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Professional Drill Set',
    description: 'Complete 18V cordless drill set with multiple bits and carrying case.',
    price: 89.5,
    sku: 'PDS-002',
    unit: 'set',
    category: 'Tools',
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable height.',
    price: 245.0,
    sku: 'EOC-003',
    unit: 'pcs',
    category: 'Office Supplies',
  },
  {
    id: '4',
    name: 'Safety Hard Hat',
    description: 'ANSI-approved safety hard hat with adjustable suspension system.',
    price: 24.99,
    sku: 'SHH-004',
    unit: 'pcs',
    category: 'Safety Equipment',
  },
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
