<template>
  <div
    class="relative group w-full max-w-5xl mx-auto bg-white rounded shadow p-4"
    @click="restartAnimation"
  >
    <!-- SVG Animated Overlay -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 841.9 595.3"
      class="w-full h-auto"
      :key="svgKey"
    >
      <line x1="336.75" y1="314.43" x2="197.98" y2="314.37" class="line blue" />
      <line x1="78.55" y1="234.85" x2="177.65" y2="298.43" class="line lightblue" />
      <polyline
        points="486.74 187.71 434.09 187.71 406.81 302.61 347.55 302.66"
        class="line yellow"
      />
      <polyline
        points="484.72 447.87 443.02 447.87 406.81 325.93 347.55 325.88"
        class="line yellow"
      />
      <line x1="540.25" y1="318.31" x2="347.55" y2="318.31" class="line yellow" />
      <polyline
        points="516.52 234.14 448.27 234.14 425.86 310.24 347.55 310.24"
        class="line yellow"
      />
    </svg>

    <!-- Gambar background diagram -->
    <img
      src="@/assets/static/network_diagram/network_diagram.png"
      alt="Network Diagram Overlay"
      class="absolute top-1 left-1 w-full h-auto pointer-events-none"
    />   
  </div>
</template>

<script setup>
import { ref } from 'vue'

const svgKey = ref(0)

const props = defineProps({
  networkDiagram: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
})

function restartAnimation() {
  svgKey.value++
}
</script>

<style scoped>
.line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 2.5s ease;
  fill: none;
}

.group:hover .line {
  stroke-dashoffset: 0;
}

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
</style>
