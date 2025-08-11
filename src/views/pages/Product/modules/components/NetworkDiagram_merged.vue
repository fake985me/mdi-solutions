<template>

    <div class="relative group w-full text-center mt-16 px-4" v-if="networkDiagram">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">
            {{ category }} Network Configuration Diagram
        </h2>
        <div class="relative group w-full bg-white rounded shadow p-4" @click="restartAnimation">
    <div class="relative w-full" style="aspect-ratio: 815.1 / 578.2;">
      <!-- Background Image (DINAMIS dari id) -->
      <img
        :src="bgSrc"
        :alt="`Network Diagram - ${product?.title || 'diagram'}`"
        class="absolute top-0 left-0 w-full h-auto object-contain pointer-events-none"
      />

      <div class="svg">
        <svg :key="svgKey" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 815.1 578.2">
          <polyline points="323.3 305.8 194.7 305.8 164.2 289.8" fill="none" class="line blue" stroke-miterlimit="10"
            stroke-width="6" />
          <line x1="65.1" y1="226.2" x2="164.2" y2="289.8" fill="none" class="line lightblue" stroke-miterlimit="10"
            stroke-width="4" />
          <polyline points="473.3 179.1 420.7 179.1 393.4 294 334.1 294.1" fill="none" class="line yellow"
            stroke-miterlimit="10" stroke-width="3" />
          <polyline points="503.1 225.5 434.9 225.5 412.5 301.6 334.1 301.6" fill="none" class="line yellow"
            stroke-miterlimit="10" stroke-width="3" />
          <polyline points="566.7 309.7 597.8 317.3 634 317.3 634 340.9 658.3 340.9 658.3 349.3 710.2 349.3" fill="none"
            class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.5 312.4 641.8 312.4 641.8 322.2 702.1 322.2" fill="none" class="line green"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.2 307.1 641.8 307.1 641.8 288.1 702.1 288.1" fill="none" class="line green"
            stroke-miterlimit="10" />
          <line x1="566.7" y1="309.7" x2="334.1" y2="309.7" fill="none" class="line yellow" stroke-miterlimit="10"
            stroke-width="3" />
          <polyline points="471.3 439.3 429.6 439.3 393.4 317.3 334.1 317.3" fill="none" class="line yellow"
            stroke-miterlimit="10" stroke-width="3" />
          <polyline points="471.3 439.3 492.7 442.9 492.7 491.2 532.9 491.2" fill="none" class="line green"
            stroke-miterlimit="10" />
          <polyline points="471.3 439.3 504.3 439.3 504.3 457.5 521.9 457.5" fill="none" class="line green"
            stroke-miterlimit="10" />
          <polyline points="471.3 439.3 511 434.8 511 423.9 528.6 423.9" fill="none" class="line green"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.7 322.4 627.6 322.4 627.6 356 643.7 356 643.7 394.7 695.5 394.7" fill="none"
            class="line green" stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597.2 302 634.3 302 634.3 253.5 665.2 253.5" fill="none" class="line green"
            stroke-miterlimit="10" />
          <polyline points="566.7 309.7 597 296.9 627.7 296.9 627.7 243.7 663.9 243.7" fill="none" class="line green"
            stroke-miterlimit="10" />
          <g isolation="isolate"><text transform="translate(310.1 333.3)" font-family="ArialNarrow, Arial" font-size="9"
              isolation="isolate">
              <tspan x="0" y="0">Passive Optical Splitter</tspan>
            </text></g>
          <polygon points="314.7 306 335.1 323.3 335.1 288.7 314.7 306" fill="#404041" />
          <rect x=".5" y=".5" width="814.1" height="577.2" fill="none" opacity="0" stroke="#f5f5f5"
            stroke-miterlimit="10" />
        </svg>
      </div>
    </div>
  </div>
        <!-- Teks di atas gambar -->
        <div
            class="absolute top-[185px] sm:top-[375px] left-[102px] sm:left-[350px] transform transition-transform duration-1000 ease-in-out scale-100 group-hover:scale-150 sm:text-[14px] text-[6px]">
            {{ category }} {{ subCategory }}
        </div>
        <img :src="networkDiagram" :alt="title"
            class="absolute top-[208px] sm:top-[425px] left-[105px] sm:left-[360px] w-[25px] sm:w-[55px] h-auto pointer-events-none transition-transform duration-1000 ease-in-out scale-125 group-hover:scale-[2.5]" />

    </div>

</template>

<script>

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

/* Urutan delay animasi */
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