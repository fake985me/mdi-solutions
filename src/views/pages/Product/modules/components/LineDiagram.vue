<template>
  <div class="relative group w-full mx-auto bg-white rounded shadow p-4" @click="restartAnimation">
    <!-- SVG Diagram Lines -->
    <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" class="w-full h-auto">
      <polyline points="336.7 314.4 208.1 314.4 177.6 298.4" class="line blue" />
      <line x1="78.5" y1="234.8" x2="177.6" y2="298.4" class="line lightblue" />
      <polyline points="486.7 187.7 434.1 187.7 406.8 302.6 347.5 302.7" class="line yellow" />
      <polyline points="516.5 234.1 448.3 234.1 425.9 310.2 347.5 310.2" class="line yellow" />
      <polyline points="580.1 318.3 611.2 325.9 647.4 325.9 647.4 349.5 671.7 349.5 671.7 357.9 723.6 357.9"
        class="line green" />
      <polyline points="580.1 318.3 610.9 321 655.2 321 655.2 330.8 715.5 330.8" class="line green" />
      <polyline points="580.1 318.3 610.6 315.7 655.2 315.7 655.2 296.7 715.5 296.7" class="line green" />
      <line x1="580.1" y1="318.3" x2="347.5" y2="318.3" class="line yellow" />
      <polyline points="484.7 447.9 443 447.9 406.8 325.9 347.5 325.9" class="line yellow" />
      <polyline points="484.7 447.9 506.1 451.5 506.1 499.8 546.3 499.8" class="line green" />
      <polyline points="484.7 447.9 511.4 447.9 511.4 466.1 529 466.1" class="line green" />
      <polyline points="484.7 447.9 507.6 444 507.6 388.1 535.5 388.1" class="line green" />
      <polyline points="580.1 318.3 611.1 331 641 331 641 364.6 657.1 364.6 657.1 403.3 708.9 403.3"
        class="line green" />
      <polyline points="580.1 318.3 610.6 310.6 647.7 310.6 647.7 262.1 678.6 262.1" class="line green" />
      <polyline points="580.1 318.3 610.4 305.5 641.1 305.5 641.1 252.3 677.3 252.3" class="line green" />
    </svg>

    <!-- Responsive Background Image -->
     <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <AccessSvg/>
     </div>
    <!-- <img src="@/assets/static/network_diagram/access.png" alt="Network Diagram Overlay"
      class="absolute xl:top-[8px] lg:top-[14px] md:top-[13px] sm:top-[13px] xl:left-[9px] lg:left-[14px] md:left-[13px] sm:left-[13px] xl:w-[1202px] lg:w-[1170px] md:w-[945px] sm:w-[685px] pointer-events-none" /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AccessSvg from './AccessSvg.vue'

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
})

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

/* Line colors */
.blue {
  stroke: #1c75bc;
  stroke-width: 6px;
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
</style>
