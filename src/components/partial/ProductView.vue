<template>
  <section class="py-8 px-4 relative">
    <h2 class="text-3xl font-bold text-center">Product Solutions</h2>
    <p class="text-gray-800 mb-3">choose what you need</p>

    <!-- Tabs -->
    <div class="flex flex-wrap gap-3 border-b mb-4 justify-center">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        @click="
          () => {
            activeTab = i
            activeSubTab = 0
            desktopIndex = 0
            mobileIndex = 0
          }
        "
        :class="[
          'cursor-pointer py-2 px-2 border-b-2',
          i === activeTab
            ? 'border-blue-600 text-blue-600 font-bold'
            : 'border-transparent border-b-slate-900 text-gray-800 hover:text-blue-800',
        ]"
      >
        {{ tab.title }}
      </div>
    </div>

    <!-- Sub Tabs -->
    <div
      v-if="tabs[activeTab].subCategories"
      class="flex flex-wrap gap-2 border-b mb-6 justify-center"
    >
      <div
        v-for="(sub, j) in tabs[activeTab].subCategories"
        :key="j"
        @click="
          () => {
            activeSubTab = j
            desktopIndex = 0
            mobileIndex = 0
          }
        "
        :class="[
          'cursor-pointer text-sm py-1 px-3 border-b-2',
          j === activeSubTab
            ? 'border-blue-500 text-blue-600 font-medium'
            : 'border-transparent border-b-slate-900 text-gray-800 hover:text-blue-800',
        ]"
      >
        {{ sub }}
      </div>
    </div>

    <!-- Desktop Grid (4 per page) -->
    <div class="hidden md:flex justify-center items-center relative">
      <button
        v-if="pagedDesktop.length > 1"
        @click="prevDesktop"
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full px-2 py-1 z-10"
      >
        ❮
      </button>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(product, i) in pagedDesktop[desktopIndex]"
          :key="i"
          class="bg-white shadow rounded-md p-4 w-[220px] text-center flex flex-col justify-between min-h-[320px] hover:shadow-lg transition"
        >
          <img :src="product.logo" alt="logo" class="h-6 mb-2 mx-auto" />
          <RouterLink
            :to="`/product/${product.slug}`"
            class="block flex-1 flex-col justify-between"
          >
            <div>
              <img :src="product.image" alt="" class="h-24 object-contain mb-2 mx-auto" />
              <h4 class="text-sm font-semibold">{{ product.title }}</h4>
              <ul class="text-xs text-gray-600 mt-1">
                <li>{{ product.port }}</li>
                <li>{{ product.textc }}</li>
              </ul>
            </div>
          </RouterLink>
        </div>
      </div>

      <button
        v-if="pagedDesktop.length > 1"
        @click="nextDesktop"
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow rounded-full px-2 py-1 z-10"
      >
        ❯
      </button>
    </div>

    <!-- Mobile (1 per page + navigation) -->
    <div class="md:hidden text-center relative mt-4">
      <div
        v-if="pagedMobile.length"
        class="mx-auto w-[85%] min-h-[350px] flex flex-col items-center relative"
      >
        <div class="bg-white shadow rounded-md p-4 w-full">
          <img :src="pagedMobile[mobileIndex].logo" alt="logo" class="h-6 mb-2 mx-auto" />
          <RouterLink :to="`/product/${pagedMobile[mobileIndex].slug}`">
            <img
              :src="pagedMobile[mobileIndex].image"
              alt=""
              class="h-28 object-contain mb-2 mx-auto"
            />
            <h4 class="text-base font-semibold">{{ pagedMobile[mobileIndex].title }}</h4>
            <ul class="text-sm text-gray-600 mt-1">
              <li>{{ pagedMobile[mobileIndex].port }}</li>
              <li>{{ pagedMobile[mobileIndex].textc }}</li>
            </ul>
          </RouterLink>
        </div>

        <!-- Mobile Navigation -->
        <div class="flex justify-center gap-6 mt-4">
          <button
            v-if="pagedMobile.length > 1"
            @click="prevMobile"
            class="text-2xl bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1"
          >
            ❮
          </button>
          <button
            v-if="pagedMobile.length > 1"
            @click="nextMobile"
            class="text-2xl bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1"
          >
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
  { title: 'GPON', subCategories: ['All', 'OLT', 'ONT', 'ONU PoE', 'ONU'] },
  {
    title: 'SWITCH',
    subCategories: ['All', 'CORE SWITCH', 'L3 SWITCH', 'L2 SWITCH PoE', 'L2 SWITCH'],
  },
  { title: 'WIFI', subCategories: ['All'] },
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
</script>
