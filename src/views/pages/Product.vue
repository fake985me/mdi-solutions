<template>
  <div>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div
        class="flex items-baseline justify-between border-b g-gradient-to-t from-transparent to-slate-900 pb-6 pt-24 flex-wrap">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
        <div class="flex space-x-2 mt-4 sm:mt-0">
          <button v-for="(tab, index) in tabs" :key="index" @click="switchTab(index)" :class="[
            'px-4 py-2 rounded text-sm font-medium',
            activeTab === index
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]">
            {{ tab.title }}
          </button>
        </div>
      </div>

      <!-- Filter dan Produk -->
      <section class="pb-24 pt-6">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar filter -->
          <aside class="lg:block">
            <ul class="space-y-2 text-sm font-medium text-gray-900">
              <li v-for="(category, index) in currentCategories" :key="index" @click="activeCategoryTab = index" :class="[
                'cursor-pointer rounded px-3 py-2',
                activeCategoryTab === index
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'hover:bg-gray-100',
              ]">
                {{ category }}
              </li>
            </ul>
          </aside>

          <!-- Grid Produk -->
          <div class="lg:col-span-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="product in paginatedProducts" :key="product.id"
                class="w-full bg-white shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl">
                <RouterLink :to="`/product/${product.id}`">
                  <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain rounded-t-lg p-4" />
                </RouterLink>
                <div class="px-4 py-3">
                  <h3 class="text-lg font-semibold text-gray-900 truncate">
                    <RouterLink :to="`/product/${product.id}`" class="hover:underline">
                      {{ product.title }}
                    </RouterLink>
                  </h3>
                  <p class="text-sm text-gray-500" v-if="product.port">{{ product.port }}</p>
                  <p class="text-sm text-gray-500" v-if="product.dimensions">
                    {{ product.dimensions }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-6 flex justify-center space-x-2">
              <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="[
                'px-4 py-2 border rounded',
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
              ]">
                {{ page }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import products from '@/composable/useProducts'

// Tab dan kategori
const activeTab = ref(0)
const activeCategoryTab = ref(0)

const tabs = [{ title: 'XGS-PON' }, { title: 'G-PON' }, { title: 'SWITCH' }, { title: 'WIFI' }]
const categories = {
  0: ['XGS-PON OLT', 'XGS-PON ONU', 'XGS-PON ONT'],
  1: ['G-PON OLT', 'G-PON ONT', 'G-PON ONU/PoE'],
  2: ['Core Switch', 'L2 Switch', 'L3 Switch'],
}

const currentCategories = computed(() => categories[activeTab.value] || [])

// Filter produk berdasarkan kategori aktif
const filteredProducts = computed(() => {
  const selectedCategory = currentCategories.value[activeCategoryTab.value]
  return products.value.filter((product) => product.category === selectedCategory)
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(6)

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

// Fungsi
function switchTab(index) {
  activeTab.value = index
  activeCategoryTab.value = 0
  currentPage.value = 1
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>
