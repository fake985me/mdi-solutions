<template>
  <div class="relative group w-full bg-white rounded shadow p-4" @click="restartAnimation">
    <div class="relative w-full" style="aspect-ratio: 815.1 / 578.2;">
      <!-- Background dinamis -->
      <img
        :key="bgKey"
        :src="bgSrc"
        class="absolute top-0 left-0 w-full h-auto object-contain pointer-events-none"
        alt=""
      />

      <!-- Markers (banyak gambar) -->
      <img
        v-for="(m, i) in resolvedMarkers"
        :key="i"
        :src="m.image"
        :alt="m.title || 'Product image'"
        class="absolute z-20 h-auto object-contain pointer-events-none"
        :style="m.style"
      />

      <!-- SVG Overlay -->
      <div class="svg">
        <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.1 578.2">
          <polyline points="323.3 305.8 194.7 305.8 164.2 289.8" fill="none" class="line blue" stroke-miterlimit="10" stroke-width="6" />
          <line x1="65.1" y1="226.2" x2="164.2" y2="289.8" fill="none" class="line lightblue" stroke-miterlimit="10" stroke-width="4" />
          <polyline points="473.3 179.1 420.7 179.1 393.4 294 334.1 294.1" fill="none" class="line yellow" stroke-miterlimit="10" stroke-width="3" />
          <polyline points="503.1 225.5 434.9 225.5 412.5 301.6 334.1 301.6" fill="none" class="line yellow" stroke-miterlimit="10" stroke-width="3" />
          <polyline points="566.7 309.7 597.8 317.3 634 317.3 634 340.9 658.3 340.9 658.3 349.3 710.2 349.3" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.5 312.4 641.8 312.4 641.8 322.2 702.1 322.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.2 307.1 641.8 307.1 641.8 288.1 702.1 288.1" fill="none" class="line green" stroke-miterlimit="10" />
          <line x1="566.7" y1="309.7" x2="334.1" y2="309.7" fill="none" class="line yellow" stroke-miterlimit="10" stroke-width="3" />
          <polyline points="471.3 439.3 429.6 439.3 393.4 317.3 334.1 317.3" fill="none" class="line yellow" stroke-miterlimit="10" stroke-width="3" />
          <polyline points="471.3 439.3 492.7 442.9 492.7 491.2 532.9 491.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="471.3 439.3 504.3 439.3 504.3 457.5 521.9 457.5" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="471.3 439.3 511 434.8 511 423.9 528.6 423.9" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.7 322.4 627.6 322.4 627.6 356 643.7 356 643.7 394.7 695.5 394.7" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.2 302 634.3 302 634.3 253.5 665.2 253.5" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597 296.9 627.7 296.9 627.7 243.7 663.9 243.7" fill="none" class="line green" stroke-miterlimit="10" />
          <g isolation="isolate"><text transform="translate(310.1 333.3)" font-family="ArialNarrow, Arial" font-size="9" isolation="isolate"><tspan x="0" y="0">Passive Optical Splitter</tspan></text></g>
          <polygon points="314.7 306 335.1 323.3 335.1 288.7 314.7 306" fill="#404041" />
          <rect x=".5" y=".5" width="814.1" height="577.2" fill="none" opacity="0" stroke="#f5f5f5" stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // pakai lowercase saat memanggil: "access", "distributions", "distributionsswitch", "accessswitch", "accesspoint", "apcontroller", "users"
  diagram: { type: String, required: true },

  // fallback single marker
  productImage: { type: String, default: '' },
  productTitle: { type: String, default: '' },
  positionIndex: { type: Number, default: 0 },
  offsetX: { type: Number, default: 0 },
  offsetY: { type: Number, default: -20 },

  // multiple markers: [{ image, title?, widthPct?, widthPx?, x?, y?, diagramKey?, index?, offsetX?, offsetY? }]
  markers: { type: Array, default: () => [] },
})

/* =======================
   Background mapping (robust & normalized)
   ======================= */
const modules = import.meta.glob('/src/assets/static/network_diagram/*.{png,jpg,svg}', {
  eager: true,
  import: 'default',
})

// urutan SPESIFIK → UMUM, semua key lowercase
const MATCHERS = [
  ['distributionsswitch', /(distribution[-_\s]?switch(?:es)?)/i],
  ['accessswitch',        /(access[-_\s]?switch(?:es)?)/i],
  ['accesspoint',         /(access[-_\s]?point(?:s)?)/i],
  ['apcontroller',        /(ap[-_\s]?controller|access[-_\s]?point[-_\s]?controller)/i],
  ['distributions',       /(distribution|distrib|dist|agg|aggregation)/i],
  ['users',               /(users?|ont|onu|client|customer)/i],
  // 'access' tanpa -switch/-point
  ['access',              /(access(?![-_\s]?switch|[-_\s]?point)|\bcore\b|\bolt\b)/i],
]

const diagramIndex = Object.create(null)
for (const [path, url] of Object.entries(modules)) {
  const name = (path.split('/').pop() || '').toLowerCase()
  for (const [key, re] of MATCHERS) {
    if (!diagramIndex[key] && re.test(name)) {
      diagramIndex[key] = url
      break // first-match wins
    }
  }
}

// fallback substring
function findBySubstr(substrs) {
  const hit = Object.entries(modules).find(([p]) =>
    substrs.some(s => p.toLowerCase().includes(s))
  )
  return hit?.[1]
}
diagramIndex.access              ||= findBySubstr(['access-', 'access_', '/access', 'core', 'olt'])
diagramIndex.accessswitch        ||= findBySubstr(['access-switch', 'access_switch', 'access switch'])
diagramIndex.accesspoint         ||= findBySubstr(['access-point', 'access_point', 'access point'])
diagramIndex.apcontroller        ||= findBySubstr(['ap-controller', 'ap_controller', 'access-point-controller', 'access_point_controller'])
diagramIndex.distributions       ||= findBySubstr(['distribution', 'distrib', '/dist/', 'agg', 'aggregation'])
diagramIndex.distributionsswitch ||= findBySubstr(['distribution-switch', 'distribution_switch', 'distribution switch'])
diagramIndex.users               ||= findBySubstr(['/user', 'users', '/ont', '/onu', 'client', 'customer'])

const allUrls   = Object.values(modules)
const diagramKey = computed(() => (props.diagram || 'access').toLowerCase().trim())
const bgSrc     = computed(() => diagramIndex[diagramKey.value] || diagramIndex.access || allUrls[0] || '')
const bgKey     = computed(() => `${diagramKey.value}:${bgSrc.value}`)

/* =======================
   Anchors (key lowercase)
   ======================= */
// ViewBox: 815.1 x 578.2
const anchors = {
  access: [
    { x: 194.7, y: 305.8 },
  ],
  accessswitch: [
    { x: 194.7, y: 305.8 },
  ],
  apcontroller: [
    { x: 194.7, y: 305.8 },
  ],
  accesspoint: [
    { x: 597.7, y: 322.4 }, { x: 627.6, y: 322.4 }, { x: 627.6, y: 356.0 },
    { x: 643.7, y: 356.0 }, { x: 643.7, y: 394.7 }, { x: 695.5, y: 394.7 },
  ],
  distributions: [
    { x: 597.7, y: 322.4 }, { x: 627.6, y: 356.0 }, { x: 643.7, y: 356.0 }, { x: 643.7, y: 394.7 }, { x: 695.5, y: 394.7 },
    { x: 597.8, y: 317.3 }, { x: 634.0, y: 340.9 }, { x: 658.3, y: 349.3 }, { x: 710.2, y: 349.3 },
    { x: 597.5, y: 312.4 }, { x: 641.8, y: 322.2 }, { x: 702.1, y: 322.2 },
    { x: 597.2, y: 307.1 }, { x: 641.8, y: 288.1 }, { x: 702.1, y: 288.1 },
    { x: 566.7, y: 309.7 }, { x: 334.1, y: 309.7 },
    { x: 503.1, y: 225.5 }, { x: 434.9, y: 225.5 }, { x: 412.5, y: 301.6 }, { x: 334.1, y: 301.6 },
  ],
  distributionsswitch: [
    { x: 597.7, y: 322.4 }, { x: 627.6, y: 356.0 }, { x: 643.7, y: 356.0 }, { x: 643.7, y: 394.7 }, { x: 695.5, y: 394.7 },
    { x: 597.8, y: 317.3 }, { x: 634.0, y: 340.9 }, { x: 658.3, y: 349.3 }, { x: 710.2, y: 349.3 },
    { x: 597.5, y: 312.4 }, { x: 641.8, y: 322.2 }, { x: 702.1, y: 322.2 },
    { x: 597.2, y: 307.1 }, { x: 641.8, y: 288.1 }, { x: 702.1, y: 288.1 },
    { x: 566.7, y: 309.7 }, { x: 334.1, y: 309.7 },
    { x: 503.1, y: 225.5 }, { x: 434.9, y: 225.5 }, { x: 412.5, y: 301.6 }, { x: 334.1, y: 301.6 },
  ],
  users: [
    { x: 471.3, y: 439.3 }, { x: 492.7, y: 442.9 }, { x: 504.3, y: 439.3 }, { x: 511.0, y: 434.8 },
    { x: 528.6, y: 423.9 }, { x: 393.4, y: 317.3 }, { x: 334.1, y: 317.3 },
    { x: 473.3, y: 179.1 }, { x: 420.7, y: 179.1 }, { x: 393.4, y: 294.0 }, { x: 334.1, y: 294.1 },
  ],
}

function anchorPoint(dKey, index) {
  const key = (dKey || props.diagram || 'access').toLowerCase()
  const list = anchors[key] || anchors.access
  const i = Math.min(Math.max(index ?? 0, 0), list.length - 1)
  return list[i]
}

/* =======================
   Markers resolver
   ======================= */
const VIEW_W = 815.1
const VIEW_H = 578.2
const MIN_PCT = 3
const MAX_PCT = 30

const resolvedMarkers = computed(() => {
  const items = (props.markers && props.markers.length)
    ? props.markers
    : [{
        image: props.productImage,
        title: props.productTitle,
        diagramKey: props.diagram,
        index: props.positionIndex,
        offsetX: props.offsetX,
        offsetY: props.offsetY,
        widthPct: 10,
      }]

  return items
    .filter(m => !!m.image)
    .map((m) => {
      const hasXY = typeof m.x === 'number' && typeof m.y === 'number'
      const pt    = hasXY ? { x: m.x, y: m.y } : anchorPoint(m.diagramKey, m.index)
      const offX  = m.offsetX ?? 0
      const offY  = m.offsetY ?? -20
      const left  = ((pt.x + offX) / VIEW_W) * 100
      const top   = ((pt.y + offY) / VIEW_H) * 100

      // widthPx > widthPct; clamp % supaya aman
      const widthStyle = (typeof m.widthPx === 'number' && m.widthPx > 0)
        ? `${m.widthPx}px`
        : `${Math.max(MIN_PCT, Math.min(MAX_PCT, m.widthPct ?? 10))}%`

      return {
        image: m.image,
        title: m.title || 'Product image',
        style: {
          left: `${left}%`,
          top: `${top}%`,
          width: widthStyle,
          transform: 'translate(-50%, -100%)',
        },
      }
    })
})

/* =======================
   Animation reload
   ======================= */
const svgKey = ref(0)
function restartAnimation() {
  svgKey.value += 1
}
</script>

<style>
@keyframes drawLine { 0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; } to { stroke-dasharray: 1000; stroke-dashoffset: 0; } }
svg { width: 100%; height: auto; }
.line { fill: none; stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawLine 2s ease forwards; }
.group:hover .line { stroke-dashoffset: 0; }
.blue { stroke: #1c75bc; stroke-width: 6px; }
.lightblue { stroke: #79caf1; stroke-width: 4px; fill: #7ad0f2; }
.yellow { stroke: #f4cd15; stroke-width: 3px; }
.green { stroke: #39b54a; stroke-width: 1px; }

/* urutan delay (optional, tetap ada) */
.step-1 { animation-delay: 0s; } .step-2 { animation-delay: 1.2s; } .step-3 { animation-delay: 2.4s; }
.step-4 { animation-delay: 3.6s; } .step-5 { animation-delay: 4.8s; } .step-6 { animation-delay: 6.0s; }
.step-7 { animation-delay: 7.2s; } .step-8 { animation-delay: 8.4s; } .step-9 { animation-delay: 9.6s; }
.step-10 { animation-delay: 10.8s; } .step-11 { animation-delay: 12.0s; } .step-12 { animation-delay: 13.2s; }
.step-13 { animation-delay: 14.4s; } .step-14 { animation-delay: 15.6s; } .step-15 { animation-delay: 16.8s; }
</style>
