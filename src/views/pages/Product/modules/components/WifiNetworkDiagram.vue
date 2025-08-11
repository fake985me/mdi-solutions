<script setup>
const props = defineProps({
  product: { type: Object, required: true },
  nodes: { type: Array, default: () => [] }, // [{id,x,y,label}]
  edges: { type: Array, default: () => [] }, // [{from,to}]
  portInfo: { type: String, default: '' },
  bandwidth: { type: [String, Number], default: '' },
})
</script>

<template>
  <div class="relative w-full rounded-xl bg-white shadow p-4">
    <svg viewBox="0 0 800 400" class="w-full h-auto">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>

      <!-- edges -->
      <g v-for="(e, i) in edges" :key="'e'+i">
        <line
          v-if="nodes.find(n => n.id === e.from) && nodes.find(n => n.id === e.to)"
          :x1="nodes.find(n => n.id === e.from).x"
          :y1="nodes.find(n => n.id === e.from).y"
          :x2="nodes.find(n => n.id === e.to).x"
          :y2="nodes.find(n => n.id === e.to).y"
          stroke-width="3"
          stroke="currentColor"
          marker-end="url(#arrow)"
        />
      </g>

      <!-- nodes -->
      <g v-for="(n, i) in nodes" :key="'n'+i">
        <circle :cx="n.x" :cy="n.y" r="16" stroke="currentColor" fill="none" stroke-width="3" />
        <text :x="n.x" :y="n.y - 22" text-anchor="middle" font-size="12">{{ n.label || n.id }}</text>
      </g>

      <text x="16" y="30" font-size="14">Generic Topology</text>
    </svg>

    <div class="mt-3 grid gap-1 text-sm text-gray-600">
      <div v-if="portInfo"><span class="font-medium">Port:</span> {{ portInfo }}</div>
      <div v-if="bandwidth"><span class="font-medium">Bandwidth:</span> {{ bandwidth }}</div>
    </div>
  </div>
</template>
