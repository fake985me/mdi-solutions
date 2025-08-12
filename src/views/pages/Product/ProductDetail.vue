<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Tombol Back -->
    <div
      class="flex flex-col sm:flex-row items-center justify-between border-b border-black pb-4 pt-4 bg-gradient-to-r bg-slate-400  fixed left-0 w-full z-10 px-4">
      <button @click="goBack"
        class="text-base sm:text-lg text-sky-800 tracking-tight hover:underline self-start sm:self-auto">
        ← Back
      </button>
      <h2 class="text-3xl lg:mr-[860px] sm:mr-0 font-bold tracking-tight text-gray-900 sm:justify-between">
        Product Detail
      </h2>
    </div>
    <component :is="detailComponent" v-if="detailComponent && product" :product="product" />

    <!-- Diagram Jaringan -->
    <section v-if="product" class="mt-8 w-full max-w-7xl mx-auto px-4">
      <AccessDiagram :productImage="product.image" :productTitle="product.title" />
      <AccessSwitchDiagram :productImage="product.image" :productTitle="product.title" />
      <ApControllerDiagram :productImage="product.image" :productTitle="product.title" />

      <!-- horizontal line -->
      <!-- polyline kuning -->
      <DistributionsDiagram :productImage="product.image" :productTitle="product.title" :sizeLinePx="110"
        :sizePolylinePct="9" :offsetYLine="-16" :offsetYPolyline="-20" />
      <DistributionsSwitchDiagram :productImage="product.image" :productTitle="product.title" :sizeLinePx="110"
        :sizePolylinePct="9" :offsetYLine="-16" :offsetYPolyline="-20" />

      <!-- polyline atas -->
      <!-- polyline bawah -->
      <UsersDiagram :productImage="product.image" :productTitle="product.title" :sizeTopPct="12" :sizeBottomPct="8"
        :offsetYTop="-18" :offsetYBottom="-22" />

      <AccessPointDiagram :productImage="product.image" :productTitle="product.title" />
    </section>






    <!-- Related Products -->
    <section class="mt-16 w-full max-w-7xl px-4" v-if="relatedProducts.length">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">Related Products</h2>
      <div class="flex-grid md:flex lg:grid-cols-3 sm:grid-cols-1 gap-6">
        <div v-for="item in relatedProducts" :key="item.id"
          class="w-full bg-white border border-slate-900 shadow-md rounded-xl hover:scale-105 duration-300 hover:shadow-xl">
          <RouterLink :to="{
            name: 'product-detail',
            params: { slug: item.slug },
            query: {
              category: item.category,
              sub: item.subCategory
            }
          }">
            <img :src="item.image" :alt="item.title" class="w-full h-44 object-contain rounded-t-lg p-4" />
          </RouterLink>
          <div class="px-4 py-3 text-center">
            <h3 class="text-md font-semibold text-gray-900 truncate">
              <RouterLink :to="{
                name: 'product-detail',
                params: { slug: item.slug },
                query: {
                  category: item.category,
                  sub: item.subCategory
                }
              }" class="hover:underline">
                {{ item.title }}
              </RouterLink>
            </h3>
            <p class="text-sm text-gray-500" v-if="item.port">{{ item.port }}</p>
          </div>
        </div>
      </div>
    </section>
    <div v-else class="p-8 text-center text-gray-500">
      Produk tidak ditemukan atau tipe tidak dikenali.
    </div>
  </section>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import products from '@/composable/useProducts'

import AccessDiagram from '../Product/modules/components/AccessDiagram.vue'
import AccessSwitchDiagram from '../Product/modules/components/AccessSwitchDiagram.vue'
import ApControllerDiagram from '../Product/modules/components/ApControllerDiagram.vue'
import DistributionsDiagram from '../Product/modules/components/DistributionsDiagram.vue'
import DistributionsSwitchDiagram from '../Product/modules/components/DistributionsSwitchDiagram.vue'
import UsersDiagram from '../Product/modules/components/UsersDiagram.vue'
import AccessPointDiagram from './modules/components/AccessPointDiagram.vue'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

const product = computed(() => {
  const list = Array.isArray(products?.value) ? products.value : []
  return list.find(p => p.slug === slug.value) ||
    list.find(p => String(p.id) === String(slug.value)) ||
    null
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products.value.filter(
    (p) =>
      p.slug !== product.value.slug &&
      p.category === product.value.category &&
      p.subCategory === product.value.subCategory
  )
})

const features = computed(() => {
  if (!product.value) return []
  return Array.from({ length: 15 }, (_, i) => product.value[`fitur${i + 1}`]).filter(
    (f) => f && f !== 'null'
  )
})

const detailComponent = computed(() => {
  const mod = product.value?.module
  if (!mod) return null

  const loaders = {
    A: () => import('./modules/ProductModuleA.vue'),
    B: () => import('./modules/ProductModuleB.vue'),
    C: () => import('./modules/ProductModuleC.vue'),
    D: () => import('./modules/ProductModuleD.vue'),
    E: () => import('./modules/ProductModuleE.vue'),
    F: () => import('./modules/ProductModuleF.vue'),
    G: () => import('./modules/ProductModuleG.vue'),
    H: () => import('./modules/ProductModuleH.vue'),
  }

  const loader = loaders[mod]
  return loader ? defineAsyncComponent(loader) : null
})


const goBack = () => {
  const category = route.query.category
  const subCategory = route.query.sub

  router.push({
    name: 'product',
    query: {
      ...(category ? { category } : {}),
      ...(subCategory ? { sub: subCategory } : {}),
    },
  })
}
</script>
