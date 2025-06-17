<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import products from '@/composable/useProducts'

const route = useRoute()
const slug = route.params.slug

const product = ref(null)

onMounted(() => {
  product.value = products.value.find((p) => p.slug === slug)
})

const detailComponent = computed(() => {
  if (!product.value) return null
  switch (product.value.module) {
    case 'A':
      return defineAsyncComponent(() => import('./modules/ProductModuleA.vue'))
    case 'B':
      return defineAsyncComponent(() => import('./modules/ProductModuleB.vue'))
    default:
      return null
  }
})
</script>

<template>
  <component :is="detailComponent" v-if="detailComponent && product" :product="product" />
  <div v-else class="p-8 text-center text-gray-500">
    Produk tidak ditemukan atau tipe tidak dikenali.
  </div>
</template>
