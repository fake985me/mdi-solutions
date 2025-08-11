

<template>
  <div class="relative w-full rounded-xl bg-white shadow p-4">
    <svg viewBox="0 0 800 400" class="w-full h-auto">
      <defs>
        <marker id="arrow-gpon" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <text x="16" y="30" font-size="14">GPON Topology</text>

      <g v-for="(e, i) in (edges.length ? edges : defaultEdges)" :key="'egp'+i">
        <line
          :x1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).x"
          :y1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).y"
          :x2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).x"
          :y2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).y"
          stroke-width="3"
          stroke="currentColor"
          marker-end="url(#arrow-gpon)"
        />
      </g>

      <g v-for="(n, i) in (nodes.length ? nodes : defaultNodes)" :key="'ngp'+i">
        <rect
          v-if="n.id === 'olt' || n.id.startsWith('splitter')"
          :x="n.x-24" :y="n.y-16" width="48" height="32" rx="6" ry="6"
          stroke="currentColor" fill="none" stroke-width="3"
        />
        <circle v-else :cx="n.x" :cy="n.y" r="14" stroke="currentColor" fill="none" stroke-width="3" />
        <text :x="n.x" :y="n.y - 22" text-anchor="middle" font-size="12">{{ n.label || n.id }}</text>
      </g>
    </svg>

    <div class="mt-3 grid gap-1 text-sm text-gray-600">
      <div><span class="font-medium">OLT:</span> {{ product?.title || product?.name }}</div>
      <div v-if="portInfo"><span class="font-medium">PON Port:</span> {{ portInfo }}</div>
      <div v-if="bandwidth"><span class="font-medium">Downlink:</span> {{ bandwidth }}</div>
    </div>
  </div>


  <div class="relative group w-full bg-white rounded shadow p-4" @click="restartAnimation">
    <div class="relative w-full" style="aspect-ratio: 815.1 / 578.2;">
      <!-- Background Image (DINAMIS) -->
      <img
        :src="bgSrc"
        :alt="`Network Diagram - ${category}`"
        class="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      <LineDiagram/>
    </div>
  </div>
  
</template>


<script setup>
import LineDiagram from './LineDiagram.vue'
import { ref, computed } from 'vue'



/**
 * IMPORT gambarnya.
 * Pastikan file berikut ada di: /src/assets/static/network_diagram/
 * - xgspon.png
 * - gpon.png
 * - switch.png
 * - wifi.png
 * - AccessLayoutDiagram.png  (fallback/default)
 */
import imgDefault from '@/assets/static/network_diagram/LayoutDiagram.png'
import imgAccess from '@/assets/static/network_diagram/AccessLayoutDiagram.png'
import imgDistributions from '@/assets/static/network_diagram/DistributionsLayoutDiagram.png'
import imgUSers from '@/assets/static/network_diagram/UsersLayoutDiagram.png'
import imgAccessSwitch from '@/assets/static/network_diagram/AccessSwitchLayoutDiagram.png'
import imgSwitch from '@/assets/static/network_diagram/SwitchLayoutDiagram.png'
import imgWifi from '@/assets/static/network_diagram/WifiLayoutDiagram.png'

const imageMap = {
  Access: imgAccess,
  Distributions: imgDistributions,
  USers: imgUSers,
  AccessSwitch: imgAccessSwitch,
  Switch: imgSwitch,
  Wifi: imgWifi,
  default: imgDefault,
}

const bgSrc = computed(() => {
  const key = (props.category || '').toLowerCase().trim()
  return imageMap[key] || imgDefault
})

const props = defineProps({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  product: { type: Object, required: true },
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
  portInfo: { type: String, default: '' },
  bandwidth: { type: [String, Number], default: '' },
})

const defaultNodes = [
  { id: 'olt', x: 120, y: 200, label: 'OLT' },
  { id: 'splitter1', x: 360, y: 120, label: '1:8' },
  { id: 'splitter2', x: 360, y: 280, label: '1:8' },
  { id: 'onu1', x: 620, y: 60, label: 'ONU-1' },
  { id: 'onu2', x: 620, y: 120, label: 'ONU-2' },
  { id: 'onu3', x: 620, y: 180, label: 'ONU-3' },
  { id: 'onu4', x: 620, y: 240, label: 'ONU-4' },
  { id: 'onu5', x: 620, y: 300, label: 'ONU-5' },
  { id: 'onu6', x: 620, y: 360, label: 'ONU-6' },
]
const defaultEdges = [
  { from: 'olt', to: 'splitter1' },
  { from: 'olt', to: 'splitter2' },
  { from: 'splitter1', to: 'onu1' },
  { from: 'splitter1', to: 'onu2' },
  { from: 'splitter1', to: 'onu3' },
  { from: 'splitter2', to: 'onu4' },
  { from: 'splitter2', to: 'onu5' },
  { from: 'splitter2', to: 'onu6' },
]

const svgKey = ref(0)
function restartAnimation() {
  svgKey.value += 1
}
</script>
