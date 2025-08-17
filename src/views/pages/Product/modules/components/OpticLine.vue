<template>
  <div class="relative group w-full bg-white rounded shadow p-4" @click="restartAnimation">
    <div class="relative w-full" style="aspect-ratio: 815.1 / 578.2;">
      <!-- Background Diagram -->
      <img v-if="imageDiagramSrc" :src="imageDiagramSrc"
        class="absolute top-0 left-0 w-full h-auto object-contain pointer-events-none" alt="Network Diagram" />

      <!-- Marker + Text -->
<div
  v-for="(m, i) in resolvedMarkers"
  :key="`marker-${i}-${svgKey}`"
  class="absolute"
  :style="m.style"
>
  <!-- Layer posisi (translate) -->
  <div class="marker-pos">
    <!-- Layer scale -->
    <div class="marker-scale">
      <!-- Marker -->
      <img
        :src="m.image"
        :alt="m.title || 'Marker'"
        class="marker-img cursor-pointer"
      />
    </div>

    <!-- Text (muncul saat hover marker) -->
    <span
      class="marker-text absolute left-1/2 top-full mt-1 px-2 py-1 text-xs font-semibold bg-black/70 text-white rounded opacity-0 scale-0 transition-all duration-300"
    >
      {{ m.title }}
    </span>
  </div>
</div>

      <!-- SVG Overlay -->
      <div class="svg">
        <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.1 578.2">
          <!-- Biru (OLT) -->
          <polyline points="323.3 305.8 194.7 305.8 164.2 289.8" fill="none" class="line blue step-2" stroke-miterlimit="10"
            stroke-width="6" />
          <!-- Light blue -->
          <line x1="65.1" y1="226.2" x2="164.2" y2="289.8" fill="none" class="line lightblue step-1" stroke-miterlimit="10"
            stroke-width="4" />
          <!-- Kuning (ONT/ONU) -->
          <polyline points="473.3 179.1 420.7 179.1 393.4 294 334.1 294.1" fill="none" class="line yellow step-3"
            stroke-miterlimit="10" stroke-width="3" />
          <polyline points="503.1 225.5 434.9 225.5 412.5 301.6 334.1 301.6" fill="none" class="line yellow step-3"
            stroke-miterlimit="10" stroke-width="3" />
          <!-- Hijau (ONU/ONT branches) -->
          <polyline points="566.7 309.7 597.2 302 634.3 302 634.3 253.5 665.2 253.5" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597 296.9 627.7 296.9 627.7 243.7 663.9 243.7" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.8 317.3 634 317.3 634 340.9 658.3 340.9 658.3 349.3 710.2 349.3" fill="none"
            class="line green step-4" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.5 312.4 641.8 312.4 641.8 322.2 702.1 322.2" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.2 307.1 641.8 307.1 641.8 288.1 702.1 288.1" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.7 322.4 627.6 322.4 627.6 356 643.7 356 643.7 394.7 695.5 394.7" fill="none"
            class="line green step-4" stroke-miterlimit="10" />
          <line x1="566.7" y1="309.7" x2="334.1" y2="309.7" fill="none" class="line yellow step-3" stroke-miterlimit="10"
            stroke-width="3" />

          <!-- Kuning (ONT bawah) + hijau ujung-ujung -->
          <polyline points="471.3 439.3 429.6 439.3 393.4 317.3 334.1 317.3" fill="none" class="line yellow step-3"
            stroke-miterlimit="10" stroke-width="3" />
          <polyline points="471.3 439.3 492.7 442.9 492.7 491.2 532.9 491.2" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="471.3 439.3 504.3 439.3 504.3 457.5 521.9 457.5" fill="none" class="line green step-4"
            stroke-miterlimit="10" />
          <polyline points="471.3 439.3 511 434.8 511 423.9 528.6 423.9" fill="none" class="line green step-4"
            stroke-miterlimit="10" />

          <g isolation="isolate">
            <text transform="translate(310.1 333.3)" font-family="ArialNarrow, Arial" font-size="9" isolation="isolate">
              <tspan x="0" y="0">Optical Splitter</tspan>
            </text>
          </g>
          <polygon points="314.7 306 335.1 323.3 335.1 288.7 314.7 306" fill="#404041" />
          <rect x=".5" y=".5" width="814.1" height="577.2" fill="none" opacity="0" stroke="#f5f5f5"
            stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

// ======= Props =======
const props = defineProps({
  product: { type: Object, required: true },           // { title, image, subCategory, diagram? }
  diagram: { type: String, required: false },          // nama file png tanpa ekstensi (mis. 'optic_olt')
})

// ======= Route (opsional jika perlu slug) =======
useRoute()

// ======= Load background diagram (opsional, sesuai foldermu) =======
const diagrams = import.meta.glob('@/assets/static/network_diagram/optic/*.png', {
  eager: true,
  import: 'default',
})
const imageDiagramSrc = computed(() => {
  const name = props.diagram || props.product?.diagram
  if (!name) return ''
  const path = `/src/assets/static/network_diagram/optic/${name}.png`
  return diagrams[path] || ''
})

// ======= Konstanta ukuran viewBox SVG =======
const VIEW_W = 815.1
const VIEW_H = 578.2

// ======= Titik anchor per subCategory =======
// Setiap item: { x, y, sizePct } — sizePct dipakai untuk penyesuaian ukuran per titik
const ANCHORS = {
  // OLT: 1 titik di ujung polyline biru
  OLT: [
    { x: 250.7, y: 330.8, sizePct: 8 },
  ],

  // ONU & ONU PoE:
  // - Ujung polyline kuning (334.1, 301.6)
  // - Ujung 3 cabang hijau (710.2,349.3), (702.1,322.2), (702.1,288.1)
  // - Ujung line kuning lurus ke kiri (334.1,309.7)
  ONU: [
    { x: 540.1, y: 245.7, sizePct: 8 },
    { x: 580.1, y: 330.6, sizePct: 8 },
  ],
  'ONU PoE': [
    { x: 540.1, y: 236.7, sizePct: 9 },
    { x: 580.1, y: 320.6, sizePct: 9 },
  ],

  // ONT:
  // - Ujung polyline kuning atas (334.1, 294.1)
  // - Ujung polyline kuning bawah (334.1, 317.3)
  // - Ujung 3 cabang hijau bawah (532.9,491.2), (521.9,457.5), (528.6,423.9)
  ONT: [
    { x: 495.1, y: 200.1, sizePct: 5.5 },
    { x: 485, y: 460.3, sizePct: 5.5 },
  ],
}

// fallback jika subCategory tidak dikenali
const FALLBACK = [{ x: 400, y: 300, sizePct: 7 }]

// ======= Util: konversi titik -> style absolut =======
function toStyle(pt, extra = {}) {
  return {
    position: 'absolute',
    top: `${(pt.y / VIEW_H) * 100}%`,
    left: `${(pt.x / VIEW_W) * 100}%`,
    width: `${pt.sizePct ?? 6}%`,
    transform: 'translate(-50%, -50%)',
    ...extra,
  }
}


// ======= Markers otomatis dari subCategory =======
const resolvedMarkers = computed(() => {
  const p = props.product
  if (!p) return []

  const sub = p.subCategory || ''
  const points = ANCHORS[sub] || FALLBACK

  // Kamu bisa tambahkan offset kecil per sub kategori jika perlu:
  // contoh: untuk OLT geser ke atas 1% agar tidak menimpa garis.
  const offset = (sub === 'OLT') ? { transform: 'translate(-50%, calc(-50% - 2px))' } : {}

  return points.map((pt) => ({
    image: p.image,
    title: p.title,
    style: toStyle(pt, offset),
  }))
})

// ======= Re-trigger animasi garis =======
const svgKey = ref(0)
function restartAnimation() {
  svgKey.value += 1
}

watchEffect(() => {
  // debug ringan
  // console.log('subCategory:', props.product?.subCategory)
  // console.log('markers:', resolvedMarkers.value)
})
</script>

<style>
/* Layer posisi (absolute + translate) */
.marker-pos {
  position: relative;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

/* Layer untuk scaling */
.marker-scale {
  display: inline-block;
  transform-origin: center center;
  transition: transform 0.3s ease;
}

.marker-img {
  display: block;
  width: 100%;
  height: auto;
}

/* Zoom hanya scale, posisi tetap */
.marker-pos:hover .marker-scale {
  transform: scale(1.4);
}

/* Text muncul dengan zoom */
.marker-pos:hover .marker-text {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

/* Default state text */
.marker-text {
  transform-origin: top center;
  transform: translateX(-50%) scale(0);
}

@keyframes drawLine {
  0% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }

  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}

svg {
  width: 100%;
  height: auto;
}

/* Default garis: sembunyi */
.line {
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 0.3s ease;
}

/* Saat hover, baru animasi berjalan */
.group:hover .line {
  animation: drawLine 2s ease forwards;
}

.blue {
  stroke: #1c75bc;
  stroke-width: 4px;
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

.green {
  stroke: #39b54a;
  stroke-width: 1px;
}

/* urutan delay (optional, tetap ada) */
.group:hover
.step-1 {
  animation-delay: 0s;
}
.group:hover
.step-2 {
  animation-delay: 0.2s;
}
.group:hover
.step-3 {
  animation-delay: 0.5s;
}
.group:hover
.step-4 {
  animation-delay: 0.7s;
}
.group:hover
.step-5 {
  animation-delay: 4.8s;
}
.group:hover
.step-6 {
  animation-delay: 6.0s;
}
.group:hover
.step-7 {
  animation-delay: 7.2s;
}
.group:hover
.step-8 {
  animation-delay: 8.4s;
}
.group:hover
.step-9 {
  animation-delay: 9.6s;
}
.group:hover
.step-10 {
  animation-delay: 10.8s;
}
.group:hover
.step-11 {
  animation-delay: 12.0s;
}
.group:hover
.step-12 {
  animation-delay: 13.2s;
}
.group:hover
.step-13 {
  animation-delay: 14.4s;
}
.group:hover
.step-14 {
  animation-delay: 15.6s;
}
.group:hover
.step-15 {
  animation-delay: 16.8s;
}
</style>
