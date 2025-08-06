<template>
  <div class="relative group w-full max-w-5xl mx-auto bg-white rounded shadow p-4" @click="restartAnimation">
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" :key="svgKey">
      <polyline points="336.7 314.4 208.1 314.4 177.6 298.4" fill="none" class="line blue" stroke-miterlimit="10" />
      <line x1="78.5" y1="234.8" x2="177.6" y2="298.4" class="line lightblue" stroke-miterlimit="10" />

      <polyline points="486.7 187.7 434.1 187.7 406.8 302.6 347.5 302.7" class="line yellow" fill="none"
        stroke-miterlimit="10" />
      <polyline points="484.7 447.9 443 447.9 406.8 325.9 347.5 325.9" class="line yellow" fill="none"
        stroke-miterlimit="10" />
      <line x1="540.3" y1="318.3" x2="347.5" y2="318.3" class="line yellow" fill="none" stroke-miterlimit="10" />
      <polyline points="516.5 234.1 448.3 234.1 425.9 310.2 347.5 310.2" class="line yellow" fill="none"
        stroke-miterlimit="10" />
    </svg>
    <img src="@/assets/static/network_diagram/network_diagram.png" class="absolute h-auto" />
  </div>

</template>

<script setup>
function
  restartAnimation() {
  svgKey.value += 1
}
</script>

<style>
@keyframes drawLine {
  0% {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000
  }

  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0
  }
}

.cls-3 {
  fill: none;
  stroke-miterlimit: 10;
  stroke: #f4cd15;
  stroke-width: 3px;
  animation: drawLine 3s forwards 1s
}

.line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 2s ease;
  fill: none;
}

.group:hover .line {
  stroke-dashoffset: 0;
}

.blue {
  stroke: #1c75bc;
  stroke-width: 6px;
  animation: drawLine 3s backwards 1s
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