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

.line {
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease forwards;
}

.group:hover .line {
  stroke-dashoffset: 0;
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
.step-1 {
  animation-delay: 0s;
}

.step-2 {
  animation-delay: 1.2s;
}

.step-3 {
  animation-delay: 2.4s;
}

.step-4 {
  animation-delay: 3.6s;
}

.step-5 {
  animation-delay: 4.8s;
}

.step-6 {
  animation-delay: 6.0s;
}

.step-7 {
  animation-delay: 7.2s;
}

.step-8 {
  animation-delay: 8.4s;
}

.step-9 {
  animation-delay: 9.6s;
}

.step-10 {
  animation-delay: 10.8s;
}

.step-11 {
  animation-delay: 12.0s;
}

.step-12 {
  animation-delay: 13.2s;
}

.step-13 {
  animation-delay: 14.4s;
}

.step-14 {
  animation-delay: 15.6s;
}

.step-15 {
  animation-delay: 16.8s;
}
</style>
