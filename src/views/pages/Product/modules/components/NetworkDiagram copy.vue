<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import products from '@/composable/useProducts'
const LineDiagram = defineAsyncComponent(() => import('@/views/pages/Product/modules/components/LineDiagram.vue'))

const props = defineProps({
  networkDiagram: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
})

// contoh data dinamis (bisa kamu hitung dari posisi node di diagram)
const nodes = ref([
  { id: 'olt', x: 100, y: 120, label: 'OLT' },
  { id: 'splitter', x: 260, y: 180, label: 'Splitter' },
  { id: 'onu1', x: 420, y: 120, label: 'ONU-1' },
  { id: 'onu2', x: 420, y: 240, label: 'ONU-2' },
])

const edgesPoints = computed(() => ([
  { x: nodes.value[0].x, y: nodes.value[0].y, label: nodes.value[0].label },
  { x: nodes.value[1].x, y: nodes.value[1].y, label: nodes.value[1].label },
  { x: nodes.value[2].x, y: nodes.value[2].y, label: nodes.value[2].label },
  { x: nodes.value[3].x, y: nodes.value[3].y, label: nodes.value[3].label },
]))

// akses method restart() dari LineDiagram untuk ulang animasi saat diagram di-klik
const lineRef = ref<{ restart: () => void } | null>(null)
function restartAnimation() {
  lineRef.value?.restart()
}
</script>

<template>
  <div class="relative w-full h-auto p-4" @click="restartAnimation" v-for="networkProduct in products" :key="networkProduct.id">
    <!-- Garis jaringan -->
    <LineDiagram/>
    
    
  </div>
</template>
