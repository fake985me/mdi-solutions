<template>
  <div class="py-12 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-4">
      <h2 class="text-3xl font-bold text-gray-900">Product</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(solution, index) in solutions" :key="index"
        class="bg-gray-300 shadow-black rounded-lg p-6 hover:shadow-md transition cursor-pointer"
        @click="() => $router.push(`/product?category=${solution.title.toUpperCase()}`)">
        <img v-if="solution.image" :src="solution.image" :alt="solution.title"
          class="w-full h-82 object-contain mb-4" />
        <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ solution.title }}</h3>
        <p class="text-gray-600 mb-4">{{ solution.desc || 'No description available.' }}</p>
        <router-link :to="`/product?category=${solution.title.toUpperCase()}`"
          class="text-blue-600 hover:underline text-sm font-medium">
          View Product →
        </router-link>
      </div>
    </div>
  </div>

  <!-- ====== -->

  <div class="py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      <!-- Card 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <img src="../../assets/static/solutions/training.jpg"
          class="w-full h-[240px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5" alt="Training">
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-gray-700">Training</h2>
          <p class="mt-2 text-gray-600 text-base">
            This training provides a comprehensive understanding of GPON technology, from basic theory to hands-on
            configuration.
          </p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="md:order-last">
          <img src="../../assets/static/solutions/Remote.jpg"
            class="w-full h-[240px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
            alt="Maintenance">
        </div>
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-gray-700">Maintenance and Support</h2>
          <p class="mt-2 text-gray-600 text-base">
            Regular maintenance and audits ensure smooth operations, minimize downtime, and protect your systems from
            threats.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <img src="../../assets/static/solutions/managed.png"
          class="w-full h-[240px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          alt="Managed Services">
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-gray-700">Managed Services</h2>
          <p class="mt-2 text-gray-600 text-base">
            We offer managed services with clear SLAs to help your business operate efficiently and scale effectively.
          </p>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="md:order-last">
          <img src="../../assets/static/solutions/cable.jpg"
            class="w-full h-[240px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
            alt="Design and Build">
        </div>
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold text-gray-700">Design and Build</h2>
          <p class="mt-2 text-gray-600 text-base">
            From network design to deployment, our team handles consultation, planning, and installation to meet your
            needs.
          </p>
        </div>
      </div>

    </div>
  </div>



</template>

<script setup>
import { ref } from 'vue'
import xgspon from '@/assets/static/solutions/xgspon.png'
import gpon from '@/assets/static/solutions/gpon.png'
import lswitch from '@/assets/static/solutions/switch.png'
import wireless from '@/assets/static/solutions/wireless.png'

// Contoh gambar placeholder
const placeholder = 'https://via.placeholder.com/300x180?text=Solution'

// Data berdasarkan isi dari dokumen solutions.pdf
const solutions = ref([
  {
    title: 'XGSPON',
    image: xgspon,
    desc: 'XGSPON is a next-generation fiber access technology that provides high-speed broadband services.',
    features: ['EPON / 10GE-PON', 'GPON / XGS-PON', 'L2, L3 Access Switch', 'Copper Access'],
  },
  {
    title: 'GPON',
    image: gpon,
    desc: 'GPON is a widely deployed fiber access technology that delivers high-speed internet and voice services.',
    features: [
      'O-RAN Compliant Fronthaul Switch',
      'M-series Any-haul Switch',
      'PON based Mobile Transport',
    ],
  },
  {
    title: 'SWITCH',
    image: lswitch,
    desc: 'Switches for various applications including residential, enterprise, and mobile networks.',
    features: [
      'Fiber Termination Points – ONT (xPON)',
      'Wi-Fi Residential Gateways',
      'Enterprise / Mobile ONTs',
      'Fixed Wireless Access',
    ],
  },
  {
    title: 'WIRELESS',
    image: wireless,
    desc: 'Wireless solutions for broadband access and mobile transport.',
    features: ['NMS/EMS', 'SDN Controller & Orchestrator', 'CPE Management System'],
  },
])
</script>
