<template>
  <div class="relative group w-full bg-white rounded shadow p-4" @click="restartAnimation">
    <!-- SVG Overlay -->
    <div class="svg">
      <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.1 578.2">

        
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


/* =======================
   Animation reload
   ======================= */
const svgKey = ref(0)
function restartAnimation() {
  svgKey.value += 1
}
</script>

<style>
/* ======= POSITIONING MARKER ======= */
.marker-pos {
  position: relative;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.marker-scale {
  display: inline-block;
  transform-origin: center center;
  transition: transform 0.3s ease;
}

.marker-img {
  display: block;
  width: auto;
  height: auto;
}

/* Marker Zoom saat hover */
.marker-pos:hover .marker-scale {
  opacity: 1;
  transform: scale(1.4);
}

/* Teks marker muncul saat hover */
.marker-pos:hover .marker-text {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

/* Default teks marker */
.marker-text {
  transform-origin: top center;
  transform: translateX(-50%) scale(1);
}

/* ======= ANIMASI GARIS BERJALAN TERUS ======= */

/* Keyframe animasi garis dash */
@keyframes dashLoop {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

/* SVG full width */
svg {
  width: 100%;
  height: auto;
}

/* Semua garis */
.line {
  fill: none;
  stroke-dasharray: 20, 5;
  stroke-dashoffset: 1000;
  animation: dashLoop 4s linear infinite;
}

/* Warna dan ketebalan garis */
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

/* (Opsional) Variasi kecepatan animasi per warna */
.line.blue {
  animation-duration: 4s;
}

.line.green {
  animation-duration: 6s;
}

.line.black {
  animation-duration: 8s;
}

/* (Opsional) Delay berurutan jika pakai class step-X */
.line.step-1 { animation-delay: 0s; }
.line.step-2 { animation-delay: 0.2s; }
.line.step-3 { animation-delay: 0.5s; }
.line.step-4 { animation-delay: 0.7s; }
.line.step-5 { animation-delay: 1s; }
.line.step-6 { animation-delay: 1.3s; }
.line.step-7 { animation-delay: 1.6s; }
.line.step-8 { animation-delay: 1.9s; }
.line.step-9 { animation-delay: 2.2s; }
.line.step-10 { animation-delay: 2.5s; }
.line.step-11 { animation-delay: 2.8s; }
.line.step-12 { animation-delay: 3.1s; }
.line.step-13 { animation-delay: 3.4s; }
.line.step-14 { animation-delay: 3.7s; }
.line.step-15 { animation-delay: 4s; }

</style>
