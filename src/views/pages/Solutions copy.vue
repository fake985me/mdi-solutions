<template>
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900">Our Service & Solutions</h2>
      <p class="text-gray-500 mt-2">Explore DASAN's comprehensive network technology offerings</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(solution, index) in solutions" :key="index"
        class="bg-gray-300 shadow-black rounded-lg p-6 hover:shadow-md transition">
        <img v-if="solution.image" :src="solution.image" :alt="solution.title"
          class="w-full h-82 object-contain mb-4" />
        <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ solution.title }}</h3>
        <p class="text-gray-600 mb-4">{{ solution.desc || 'No description available.' }}</p>
        <!-- <ul class="list-disc pl-5 text-gray-600 text-sm space-y-1">
          <li v-for="(item, idx) in solution.features" :key="idx">{{ item }}</li>
        </ul> -->
      </div>
    </div>
  </section>

  <!-- ====== -->

  <section>
    <div class="relative overflow-hidden pt-16 pb-32 space-y-24">
      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <!-- <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                    </path>
                  </svg>
                </span> -->
              </div>

              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-700">Training</h2>
                <p class="mt-4 text-lg text-gray-600">
                  This training is designed to provide a comprehensive understanding of GPON
                  (Gigabit Passive Optical Network) technology, covering basic theory, network
                  architecture, device introduction, to installation and configuration practices.
                  GPON is a modern fiber optic network solution that is widely used by internet
                  service providers (ISPs), telecommunications operators, and enterprises.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="flex justify-center lg:justify-end">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                class="w-[500px] h-[320px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                style="color: transparent" src="../../assets/static/solutions/training.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <!-- <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                    </path>
                  </svg>
                </span> -->
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-700">
                  Maintenance and Support Services
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                  With proper maintenance and taking preventive measures to avoid future network
                  issues, such as regular maintenance and security audits, we can ensure smooth
                  operations, minimize downtime, increase productivity, and protect data from the
                  risk of loss or security breaches.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="flex justify-center lg:justify-start">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                class="w-[500px] h-[320px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                style="color: transparent" src="../../assets/static/solutions/Remote.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <!-- <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                    </path>
                  </svg>
                </span> -->
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-700">Managed Services</h2>
                <p class="mt-4 text-lg text-gray-600">
                  We provide services and set clear SLAs, as appropriate and effective solutions,
                  optimizing the use of IT resources, to improve the operational efficiency of your
                  business.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="flex justify-center lg:justify-end">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                class="w-[500px] h-[320px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                style="color: transparent" src="../../assets/static/solutions/managed.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <!-- <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true" class="h-8 w-8 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                    </path>
                  </svg>
                </span> -->
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-gray-700">Design and Build</h2>
                <p class="mt-4 text-lg text-gray-600">
                  Our team of experts will help handle the process from design, consultation and
                  installation, according to what you want.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="flex justify-center lg:justify-start">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                class="w-[500px] h-[320px] object-cover rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                style="color: transparent" src="../../assets/static/solutions/cable.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
