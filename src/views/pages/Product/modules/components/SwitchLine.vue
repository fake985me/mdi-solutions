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
            class="marker-text absolute left-1/2 top-full mt-1 px-2 py-1 text-xs font-semibold bg-black/70 text-white rounded opacity-100 scale-100 transition-all duration-300">
            {{ m.title }}
          </span>
  </div>
</div>


      <!-- SVG Overlay -->
      <div class="svg">
        <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.1 578.2">

          <line x1="407.6" y1="76.5" x2="407.6" y2="216.8" fill="none" class="line lightblue" stroke-miterlimit="10"
            stroke-width="4" />

          <polyline points="407.6 216.8 379 265.6 227 289.6 116.3 338.2 116.3 391.8" class="line blue"
            stroke-miterlimit="10" stroke-width="4" />
          <polyline points="407.6 216.8 393.1 275.9 288.2 336.2 288.3 391.8" class="line blue" stroke-miterlimit="10"
            stroke-width="4" />
          <polyline points="407.6 216.8 421.9 275.9 493.9 336.2 493.8 391.8" class="line blue" stroke-miterlimit="10"
            stroke-width="4" />
          <polyline points="407.6 216.8 436.1 265.6 572.1 289.6 698.8 338.2 698.8 391.8" class="line blue"
            stroke-miterlimit="10" stroke-width="4" />


          <polyline points="116.3 391.4 104.4 426.1 61.4 447.4" fill="none" class="line green" stroke-miterlimit="10" />
          <line x1="116.3" y1="391.8" x2="116.3" y2="460.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="116.3 391.8 131.4 426.1 174.4 447.4" fill="none" class="line green"
            stroke-miterlimit="10" />

          <polyline points="288 391.6 275.4 426.1 232.4 447.4" fill="none" class="line green" stroke-miterlimit="10" />
          <line x1="287.9" y1="391.9" x2="287.4" y2="460.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="288 391.6 302.4 426.1 345.4 447.4" fill="none" class="line green" stroke-miterlimit="10" />

          <polyline points="494.3 391.8 465.7 426.1 422.7 447.4" fill="none" class="line green"
            stroke-miterlimit="10" />
          <line x1="494.3" y1="391.8" x2="494" y2="460.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="494.3 391.8 524 426.1 567 447.4" fill="none" class="line green" stroke-miterlimit="10" />

          <polyline points="698.8 391.8 683.7 426.1 640.7 447.4" fill="none" class="line green"
            stroke-miterlimit="10" />
          <line x1="698.8" y1="391.8" x2="698.8" y2="460.2" fill="none" class="line green" stroke-miterlimit="10" />
          <polyline points="698.8 391.8 710.7 426.1 753.7 447.4" fill="none" class="line green"
            stroke-miterlimit="10" />

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
const diagrams = import.meta.glob('@/assets/static/network_diagram/switch/*.png', {
  eager: true,
  import: 'default',
})
const imageDiagramSrc = computed(() => {
  const name = props.diagram || props.product?.diagram
  if (!name) return ''
  const path = `/src/assets/static/network_diagram/switch/${name}.png`
  return diagrams[path] || ''
})

// ======= Konstanta ukuran viewBox SVG =======
const VIEW_W = 815.1
const VIEW_H = 578.2

// ======= Titik anchor per subCategory =======
// Setiap item: { x, y, sizePct } — sizePct dipakai untuk penyesuaian ukuran per titik
const ANCHORS = {
  // OLT: 1 titik di ujung polyline biru
  BACKBONE: [
    { x: 440, y: 240, sizePct: 8 },
  ],

  // ONU & ONU PoE:
  // - Ujung polyline kuning (334.1, 301.6)
  // - Ujung 3 cabang hijau (710.2,349.3), (702.1,322.2), (702.1,288.1)
  // - Ujung line kuning lurus ke kiri (334.1,309.7)
  'L3 SWITCH': [
    { x: 150.1, y: 405.6, sizePct: 8 },
    { x: 320.1, y: 405.6, sizePct: 8 },
    { x: 530.1, y: 405.6, sizePct: 8 },
    { x: 730.1, y: 405.6, sizePct: 8 },
  ],
  'L2 SWITCH': [
    { x: 150.1, y: 405.6, sizePct: 8 },
    { x: 320.1, y: 405.6, sizePct: 8 },
    { x: 530.1, y: 405.6, sizePct: 8 },
    { x: 730.1, y: 405.6, sizePct: 8 },
  ],
  'PoE SWITCH': [
    { x: 150.1, y: 405.6, sizePct: 8 },
    { x: 320.1, y: 405.6, sizePct: 8 },
    { x: 530.1, y: 405.6, sizePct: 8 },
    { x: 730.1, y: 405.6, sizePct: 8 },
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
  const offset = (sub === 'BACKBONE') ? { transform: 'translate(-50%, calc(-50% - 2px))' } : {}

  return points.map((pt) => ({
    image: p.image,
    title: p.title,
    style: toStyle(pt, offset),
  }))
})

/* =======================
   Animation reload
   ======================= */
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
  opacity: 1;
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
  transform: translateX(-50%) scale(1);
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
  stroke-dasharray: 20, 5;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 0.3s ease;
}

/* Saat hover, baru animasi berjalan */
.group:hover .line {
  animation: drawLine 5s ease forwards;
}

.black {
  stroke: #020202;
  stroke-width: 1.5px;
}

.blue {
  stroke: #64abf9;
  stroke-width: 2px;
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
  stroke: #32f93c;
  stroke-width: 3px;
}

/* urutan delay (optional, tetap ada) */
.group:hover .step-1 {
  animation-delay: 0s;
}

.group:hover .step-2 {
  animation-delay: 0.2s;
}

.group:hover .step-3 {
  animation-delay: 0.5s;
}

.group:hover .step-4 {
  animation-delay: 0.7s;
}

.group:hover .step-5 {
  animation-delay: 4.8s;
}

.group:hover .step-6 {
  animation-delay: 6.0s;
}

.group:hover .step-7 {
  animation-delay: 7.2s;
}

.group:hover .step-8 {
  animation-delay: 8.4s;
}

.group:hover .step-9 {
  animation-delay: 9.6s;
}

.group:hover .step-10 {
  animation-delay: 10.8s;
}

.group:hover .step-11 {
  animation-delay: 12.0s;
}

.group:hover .step-12 {
  animation-delay: 13.2s;
}

.group:hover .step-13 {
  animation-delay: 14.4s;
}

.group:hover .step-14 {
  animation-delay: 15.6s;
}

.group:hover .step-15 {
  animation-delay: 16.8s;
}
</style>
