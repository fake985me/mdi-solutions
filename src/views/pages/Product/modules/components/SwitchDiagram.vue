<script setup>
import LineDiagram from './LineDiagram.vue'
const props = defineProps({
  product: { type: Object, required: true },
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
  portInfo: { type: String, default: '' },
  bandwidth: { type: [String, Number], default: '' },
})

// fallback minimal jika nodes kosong
const defaultNodes = [
  { id: 'core', x: 120, y: 200, label: 'Core' },
  { id: 'sw1', x: 350, y: 120, label: 'SW-1' },
  { id: 'sw2', x: 350, y: 280, label: 'SW-2' },
  { id: 'ap1', x: 600, y: 80,  label: 'AP-1' },
  { id: 'ap2', x: 600, y: 160, label: 'AP-2' },
  { id: 'pc1', x: 600, y: 240, label: 'PC-1' },
  { id: 'pc2', x: 600, y: 320, label: 'PC-2' },
]
const defaultEdges = [
  { from: 'core', to: 'sw1' },
  { from: 'core', to: 'sw2' },
  { from: 'sw1', to: 'ap1' },
  { from: 'sw1', to: 'ap2' },
  { from: 'sw2', to: 'pc1' },
  { from: 'sw2', to: 'pc2' },
]
</script>

<template>
  <div class="relative w-full rounded-xl bg-white shadow p-4">
    <LineDiagram/>
    <svg viewBox="0 0 800 400" class="w-full h-auto">
      <defs>
        <marker id="arrow-sw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <text x="16" y="30" font-size="14">Switch Access Topology</text>

      <g v-for="(e, i) in (edges.length ? edges : defaultEdges)" :key="'esw'+i">
        <line
          :x1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).x"
          :y1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).y"
          :x2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).x"
          :y2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).y"
          stroke-width="3"
          stroke="currentColor"
          marker-end="url(#arrow-sw)"
        />
      </g>

      <g v-for="(n, i) in (nodes.length ? nodes : defaultNodes)" :key="'nsw'+i">
        <rect :x="n.x-24" :y="n.y-16" width="48" height="32" rx="6" ry="6" stroke="currentColor" fill="none" stroke-width="3"/>
        <text :x="n.x" :y="n.y - 22" text-anchor="middle" font-size="12">{{ n.label || n.id }}</text>
      </g>
    </svg>

    <div class="mt-3 grid gap-1 text-sm text-gray-600">
      <div><span class="font-medium">Switch:</span> {{ product?.title || product?.name }}</div>
      <div v-if="portInfo"><span class="font-medium">Port:</span> {{ portInfo }}</div>
      <div v-if="bandwidth"><span class="font-medium">Uplink:</span> {{ bandwidth }}</div>
    </div>
  </div>
</template>
