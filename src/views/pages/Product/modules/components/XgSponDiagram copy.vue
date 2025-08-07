<template>
  <div class="relative group w-full max-w-5xl mx-auto bg-white rounded shadow p-4" @click="restartAnimation">
    <!-- SVG Animated Overlay -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" class="w-full h-auto" :key="svgKey">
      <line x1="336.7" y1="314.4" x2="253.4" y2="314.4" class="line blue" />
      <line x1="78.5" y1="234.8" x2="177.6" y2="298.4" class="line lightblue" />
      <polyline points="486.7 187.7 434.1 187.7 406.8 302.6 347.5 302.7" class="line yellow" />
      <polyline points="484.7 447.9 443 447.9 406.8 325.9 347.5 325.9" class="line yellow" />
      <line x1="540.3" y1="318.3" x2="347.5" y2="318.3" class="line yellow" />
      <polyline points="516.5 234.1 448.3 234.1 425.9 310.2 347.5 310.2" class="line yellow" />
    </svg>
    <img :src="dynamicDiagram" :alt="`${category} ${subCategory} Diagram`"
      :class="['absolute lg:w-[1123px] lg:top-[28px] lg:left-[35px] pointer-events-none', overlayPositionClass]" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const svgKey = ref(0)
const props = defineProps({
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  }
})

// Tentukan prioritas key: jika subCategory cocok, pakai itu; jika tidak, pakai category
const key = computed(() => {
  const subKeys = ['olt', 'ont', 'onu', 'backbone', 'controller', 'access point']
  const catKeys = ['switch l2', 'switch l3', 'poe switch']

  const sub = (props.subCategory || '').toLowerCase().replace(/\s+/g, '_')
  const cat = (props.category || '').toLowerCase().replace(/\s+/g, '_')

  if (subKeys.includes(sub)) return sub
  if (catKeys.includes(cat)) return cat

  // fallback
  return `${cat}_${sub}`
})

const diagrams = import.meta.glob('@/assets/static/network_diagram/*.png', {
  eager: true,
  import: 'default'
})

const dynamicDiagram = computed(() => {
  const filename = `network_diagram_${key.value}.png`
  const path = `/src/assets/static/network_diagram/${filename}`

  return diagrams[path] || diagrams['/src/assets/static/network_diagram/network_diagram.png']
})

const overlayPositionClass = computed(() => {
  const positionMap = {
    'olt': 'top-[100px] left-[80px] w-[200px]',
    'ont': 'top-[120px] left-[100px] w-[180px]',
    'onu': 'top-[200px] left-[150px] w-[230px]',
    'switch_backbone': 'top-[240px] left-[120px] w-[220px]',
    'access_point': 'top-[260px] left-[160px] w-[190px]',
    'switch_l2': 'top-[280px] left-[140px] w-[210px]',
    'switch_l3': 'top-[300px] left-[130px] w-[200px]',
    'apcontroller': 'top-[320px] left-[150px] w-[180px]',
    'switch_poe': 'top-[340px] left-[170px] w-[170px]'
  }

  return positionMap[key.value] || 'top-1 left-1 w-full'
})

watch([key, dynamicDiagram, overlayPositionClass], () => {
  console.log('Diagram Key:', key.value)
  console.log('Image Source:', dynamicDiagram.value)
  console.log('Overlay Position:', overlayPositionClass.value)
})

function restartAnimation() {
  // Trigger remount SVG to restart animation
  svgKey.value++
}

</script>

<style scoped>
.line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 2s ease;
  fill: none;
}

.group:hover .line {
  stroke-dashoffset: 0;
}

.blue {
  stroke: #1c75bc;
  stroke-width: 6px;
}

.lightblue {
  stroke: #79caf1;
  stroke-width: 4px;
  fill: #7ad0f2;
}

.yellow {
  stroke: #f4cd15;
  stroke-width: 3px;
}
</style>
