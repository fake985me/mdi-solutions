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
