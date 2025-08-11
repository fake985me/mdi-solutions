

<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Header fixed + Back -->
    <div
      class="flex flex-col sm:flex-row items-center justify-between border-b border-black pb-4 pt-4 bg-gradient-to-r from-slate-300 to-slate-500 fixed left-0 top-0 w-full z-10 px-4">
      <button
        @click="goBack"
        class="text-base sm:text-lg text-sky-800 tracking-tight hover:underline self-start sm:self-auto"
        aria-label="Kembali ke daftar produk"
      >
        ← Back
      </button>
      <h2 class="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:justify-between">
        Product Detail
      </h2>
    </div>

    <!-- Detail Product Module -->
    <component :is="detailComponent" v-if="detailComponent && product" :product="product" />

    <!-- Diagram Jaringan (DINAMIS) -->
    <div class="mt-10">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">
        {{ diagramTitle }}
      </h2>
      

      <component
        v-if="diagramComponent && product"
        :is="diagramComponent"
        v-bind="diagramProps"
      />

      <p v-else class="text-sm text-gray-500">Diagram belum tersedia.</p>
    </div>

    <!-- Related Products -->
    <section class="mt-16 w-full max-w-7xl" v-if="relatedProducts.length">
      <h2 class="text-2xl font-bold mb-6 text-gray-900 text-center">Related Products</h2>
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        <div
          v-for="item in relatedProducts"
          :key="item.id"
          class="w-full bg-white border border-slate-200 shadow-md rounded-xl hover:scale-[1.01] duration-300 hover:shadow-xl"
        >
          <RouterLink
            :to="{
              name: 'product-detail',
              params: { slug: item.slug },
              query: { category: item.category, sub: item.subCategory }
            }"
            class="block"
          >
            <img :src="item.image" :alt="item.title" class="w-full h-44 object-contain rounded-t-lg p-4" />
          </RouterLink>
          <div class="px-4 py-3 text-center">
            <h3 class="text-md font-semibold text-gray-900 truncate">
              <RouterLink
                :to="{
                  name: 'product-detail',
                  params: { slug: item.slug },
                  query: { category: item.category, sub: item.subCategory }
                }"
                class="hover:underline"
              >
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
import { ref, computed, watchEffect, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import products from '@/composable/useProducts'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)

const product = ref(null)

// helper aman
const safeGet = (obj, key, fallback = null) =>
  obj && obj[key] != null && obj[key] !== 'null' ? obj[key] : fallback

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
  return Array.from({ length: 15 }, (_, i) => safeGet(product.value, `fitur${i + 1}`)).filter(Boolean)
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

watchEffect(() => {
  product.value = products.value.find((p) => p.slug === slug.value)
})

// modul detail produk (sudah ada di proyekmu)
const detailComponent = computed(() => {
  if (!product.value) return null
  switch (product.value.module) {
    case 'A': return defineAsyncComponent(() => import('./modules/ProductModuleA.vue'))
    case 'B': return defineAsyncComponent(() => import('./modules/ProductModuleB.vue'))
    case 'C': return defineAsyncComponent(() => import('./modules/ProductModuleC.vue'))
    case 'D': return defineAsyncComponent(() => import('./modules/ProductModuleD.vue'))
    case 'E': return defineAsyncComponent(() => import('./modules/ProductModuleE.vue'))
    case 'F': return defineAsyncComponent(() => import('./modules/ProductModuleF.vue'))
    case 'G': return defineAsyncComponent(() => import('./modules/ProductModuleG.vue'))
    case 'H': return defineAsyncComponent(() => import('./modules/ProductModuleH.vue'))
    default:  return null
  }
})

// === DIAGRAM DINAMIS BERDASARKAN KATEGORI === //
const DIAGRAM_COMPONENT_BY_CATEGORY = {
  access: () => import('../Product/modules/components/AccessDiagram.vue'),
  xgspn: () => import('../Product/modules/components/XgSponDiagram.vue'),
  switch: () => import('../Product/modules/components/SwitchDiagram.vue'),
  gpon:  () => import('../Product/modules/components/GponDiagram.vue'),
  wifi:  () => import('../Product/modules/components/WifiNetworkDiagram.vue'),
  __default: () => import('../Product/modules/components/NetworkDiagram.vue'),
}

const diagramComponent = computed(() => {
  if (!product.value) return null
  const cat = (product.value.category || '').toLowerCase()
  const loader = DIAGRAM_COMPONENT_BY_CATEGORY[cat] || DIAGRAM_COMPONENT_BY_CATEGORY.__default
  return defineAsyncComponent(loader)
})

// Judul dinamis
const diagramTitle = computed(() => {
  if (!product.value) return 'Network Configuration Diagram'
  const cat = product.value.category
  const sub = product.value.subCategory
  return `Network Configuration — ${cat}${sub ? ` (${sub})` : ''}`
})

// Props dinamis (ubah sesuai kebutuhan komponen diagram)
const diagramProps = computed(() => {
  if (!product.value) return {}
  return {
    product: product.value,
    // jika di data produk tersedia nodes/edges khusus:
    nodes: safeGet(product.value, 'nodes', []),
    edges: safeGet(product.value, 'edges', []),
    // info tambahan untuk label
    portInfo: safeGet(product.value, 'port', undefined),
    // contoh meta
    bandwidth: safeGet(product.value, 'bandwidth', undefined),
  }
})
</script>