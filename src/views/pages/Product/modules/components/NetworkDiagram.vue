<template>
    <!-- Diagram Jaringan -->
    <div class="w-full text-center mt-16 px-4" v-if="product?.networkDiagram">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">
        {{ product.category }} Network Configuration Diagram
      </h2>
      <LineDiagram/>
    </div>
    
</template>

<script setup>
import { ref, computed, watchEffect, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import products from '@/composable/useProducts'
import LineDiagram from '../components/LineDiagram.vue'


const product = ref(null)

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products.value.filter(
    (p) =>
      p.slug !== product.value.slug &&
      p.category === product.value.category &&
      p.subCategory === product.value.subCategory
  )
})

const props = defineProps({
  productId: { type: [String, Number], required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  networkDiagram: { type: String, required: true },
  title: { type: String, required: true },
})
</script>