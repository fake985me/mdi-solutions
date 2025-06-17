<template>
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900">Our Service & Solutions</h2>
      <p class="text-gray-500 mt-2">Explore DASAN's comprehensive network technology offerings</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

  <!-- ====== -->

  <section>
    <div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
      <div class="relative">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-8 w-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    ></path>
                  </svg>
                </span>
              </div>

              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-white">Taining & Education</h2>
                <p class="mt-4 text-lg text-gray-300">
                  Learn how to use our platform effectively. Our training and education resources
                  will help you get the most out of your experience.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color: transparent"
                src="../../assets/static/solutions/training.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-8 w-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-white">
                  Provide direction and help resolve problems remotely
                </h2>
                <p class="mt-4 text-lg text-gray-300">
                  Troubleshooting, Configuration changes, Network audits, Customer migration,
                  Additions, Changes, Software upgrades, 24x7 help desk support, and more.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width="647"
                height="486"
                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color: transparent"
                src="../../assets/static/solutions/Remote.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"
        >
          <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-8 w-8 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="mt-6">
                <h2 class="text-3xl font-bold tracking-tight text-white">
                  Coming to the location to provide support
                </h2>
                <p class="mt-4 text-lg text-gray-300">
                  Professional support engineers, resident engineers, equipment and installation
                  engineers (E,F & I), and more.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-12 sm:mt-16 lg:mt-0">
            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="646"
                height="485"
                class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style="color: transparent"
                src="../../assets/static/solutions/onsite.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import broadband from '@/assets/static/solutions/broadband.jpg'
import mobiletransport from '@/assets/static/solutions/mobiletransport.jpg'
import subscribercpe from '@/assets/static/solutions/subscribercpe.png'
import inas from '@/assets/static/solutions/inas.png'

// Contoh gambar placeholder
const placeholder = 'https://via.placeholder.com/300x180?text=Solution'

// Data berdasarkan isi dari dokumen solutions.pdf
const solutions = ref([
  {
    title: 'Broadband Access',
    image: broadband,
    features: ['EPON / 10GE-PON', 'GPON / XGS-PON', 'L2, L3 Access Switch', 'Copper Access'],
  },
  {
    title: 'Mobile Transport',
    image: mobiletransport,
    features: [
      'O-RAN Compliant Fronthaul Switch',
      'M-series Any-haul Switch',
      'PON based Mobile Transport',
    ],
  },
  {
    title: 'Subscriber CPE',
    image: subscribercpe,
    features: [
      'Fiber Termination Points – ONT (xPON)',
      'Wi-Fi Residential Gateways',
      'Enterprise / Mobile ONTs',
      'Fixed Wireless Access',
    ],
  },
  {
    title: 'Network Management',
    image: inas,
    features: ['NMS/EMS', 'SDN Controller & Orchestrator', 'CPE Management System'],
  },
])
</script>
