<template>
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900">Our Service & Solutions</h2>
      <p class="text-gray-500 mt-2">Explore DASAN's comprehensive network technology offerings</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(solution, index) in solutions"
        :key="index"
        class="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
      >
        <img
          v-if="solution.image"
          :src="solution.image"
          :alt="solution.title"
          class="w-full h-40 object-contain mb-4"
        />
        <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ solution.title }}</h3>
        <ul class="list-disc pl-5 text-gray-600 text-sm space-y-1">
          <li v-for="(item, idx) in solution.features" :key="idx">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Contoh gambar placeholder
const placeholder = 'https://via.placeholder.com/300x180?text=Solution'

// Data berdasarkan isi dari dokumen solutions.pdf
const solutions = ref([
  {
    title: 'Broadband Access',
    image: placeholder,
    features: ['EPON / 10GE-PON', 'GPON / XGS-PON', 'L2, L3 Access Switch', 'Copper Access'],
  },
  {
    title: 'Mobile Transport',
    image: placeholder,
    features: [
      'O-RAN Compliant Fronthaul Switch',
      'M-series Any-haul Switch',
      'PON based Mobile Transport',
    ],
  },
  {
    title: 'Subscriber CPE',
    image: placeholder,
    features: [
      'Fiber Termination Points – ONT (xPON)',
      'Wi-Fi Residential Gateways',
      'Enterprise / Mobile ONTs',
      'Fixed Wireless Access',
    ],
  },
  {
    title: 'Network Management',
    image: placeholder,
    features: ['NMS/EMS', 'SDN Controller & Orchestrator', 'CPE Management System'],
  },
])
</script>
