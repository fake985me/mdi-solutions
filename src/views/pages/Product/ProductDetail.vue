<script setup>
import { ref, computed, watchEffect, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import products from '@/composable/useProducts'

const route = useRoute()
const slug = computed(() => route.params.slug)

const product = ref(null)

watchEffect(() => {
  product.value = products.value.find((p) => p.slug === slug.value)
})

const detailComponent = computed(() => {
  if (!product.value) return null
  switch (product.value.module) {
    case 'A':
      return defineAsyncComponent(() => import('./modules/ProductModuleA.vue'))
    case 'B':
      return defineAsyncComponent(() => import('./modules/ProductModuleB.vue'))
    case 'C':
      return defineAsyncComponent(() => import('./modules/ProductModuleC.vue'))
    case 'D':
      return defineAsyncComponent(() => import('./modules/ProductModuleD.vue'))
    case 'E':
      return defineAsyncComponent(() => import('./modules/ProductModuleE.vue'))
    case 'F':
      return defineAsyncComponent(() => import('./modules/ProductModuleF.vue'))
    case 'G':
      return defineAsyncComponent(() => import('./modules/ProductModuleG.vue'))
    case 'H':
      return defineAsyncComponent(() => import('./modules/ProductModuleH.vue'))
    default:
      return null
  }
})

watchEffect(() => {
  console.log('slug:', slug.value)
  console.log('products:', products.value)
  product.value = products.value.find((p) => p.slug === slug.value)
  console.log('found product:', product.value)
})
</script>

<template>
  <component :is="detailComponent" v-if="detailComponent && product" :product="product" />
  <div v-else class="p-8 text-center text-gray-500">
    Produk tidak ditemukan atau tipe tidak dikenali.
  </div>
</template>
