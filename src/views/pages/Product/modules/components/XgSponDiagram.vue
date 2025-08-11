<script setup>
const props = defineProps({
  product: { type: Object, required: true },
  nodes: { type: Array, default: () => [] },
  edges: { type: Array, default: () => [] },
  portInfo: { type: String, default: '' },
  bandwidth: { type: [String, Number], default: '' },
})

const defaultNodes = [
  { id: 'olt', x: 100, y: 200, label: 'OLT 10G' },
  { id: 'splitter', x: 320, y: 200, label: '1:64' },
  { id: 'onu1', x: 620, y: 80, label: 'ONU-1 10G' },
  { id: 'onu2', x: 620, y: 160, label: 'ONU-2 10G' },
  { id: 'onu3', x: 620, y: 240, label: 'ONU-3 10G' },
  { id: 'onu4', x: 620, y: 320, label: 'ONU-4 10G' },
]
const defaultEdges = [
  { from: 'olt', to: 'splitter' },
  { from: 'splitter', to: 'onu1' },
  { from: 'splitter', to: 'onu2' },
  { from: 'splitter', to: 'onu3' },
  { from: 'splitter', to: 'onu4' },
]
</script>

<template>
  <div class="relative w-full rounded-xl bg-white shadow p-4">
    <svg viewBox="0 0 800 400" class="w-full h-auto">
      <defs>
        <marker id="arrow-xgs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <text x="16" y="30" font-size="14">XGS-PON Topology (10G)</text>

      <g v-for="(e, i) in (edges.length ? edges : defaultEdges)" :key="'exg'+i">
        <line
          :x1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).x"
          :y1="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.from).y"
          :x2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).x"
          :y2="(nodes.length ? nodes : defaultNodes).find(n => n.id === e.to).y"
          stroke-width="3"
          stroke="currentColor"
          marker-end="url(#arrow-xgs)"
        />
      </g>

      <g v-for="(n, i) in (nodes.length ? nodes : defaultNodes)" :key="'nxg'+i">
        <rect v-if="n.id === 'olt' || n.id === 'splitter'"
              :x="n.x-28" :y="n.y-18" width="56" height="36" rx="6" ry="6"
              stroke="currentColor" fill="none" stroke-width="3" />
        <circle v-else :cx="n.x" :cy="n.y" r="14" stroke="currentColor" fill="none" stroke-width="3" />
        <text :x="n.x" :y="n.y - 24" text-anchor="middle" font-size="12">{{ n.label || n.id }}</text>
      </g>
    </svg>

    <div class="mt-3 grid gap-1 text-sm text-gray-600">
      <div><span class="font-medium">OLT:</span> {{ product?.title || product?.name }}</div>
      <div v-if="portInfo"><span class="font-medium">XGS-PON Port:</span> {{ portInfo }}</div>
      <div v-if="bandwidth"><span class="font-medium">Capacity:</span> {{ bandwidth }}</div>
    </div>
  </div>
</template>
