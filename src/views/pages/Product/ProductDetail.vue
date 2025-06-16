<template>
  <div>
    <!-- === -->
    <section class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
      <div class="overflow-hidden max-w-5xl w-full grid grid-cols-3 gap-4 grid-flow-row grid">
        <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
          <h1 class="text-2xl md:text-2xl text-center font-semibold text-violet-800">
            {{ product.title }}
          </h1>

          <!-- Gambar Utama -->
          <div class="w-full h-auto">
            <img :src="product.image" :alt="product.title" class="w-full h-auto object-cover rounded-lg" />
          </div>

          <p class="w-full px-3 md:!px-0 md:pr-8 text-normal md:text-xl my-6">
            {{ descriptions }}
          </p>
        </div>

        <div class="w-full flex flex-col col-start-2 col-end-10 flex-wrap md:flex-row">
          <div class="w-full xl:w-1/2 flex flex-row mt-6 md:!mt-0">
            <div class="w-10/12 pl-4">
              <h1 class="text-xl md:text-3xl font-semibold text-gray-800">
                Spesifications
              </h1>
              <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm py-3">
                <li>{{ fitur1 }}</li>
                <li>{{ fitur2 }}</li>
                <li>{{ fitur3 }}</li>
                <li>{{ fitur4 }}</li>
                <li>{{ fitur5 }}</li>
                <li>{{ fitur6 }}</li>
                <li>{{ fitur7 }}</li>
                <li>{{ fitur8 }}</li>
                <li>{{ fitur9 }}</li>
                <li>{{ fitur10 }}</li>
              </ul>
            </div>
          </div>

          <div class="w-full xl:w-1/2 flex flex-row mt-6 md:!mt-0">
            <div class="w-10/12 pl-4">
              <h1 class="text-xl md:text-3xl font-semibold text-gray-800">
                Key Features
              </h1>
              <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm py-3">
                <li>{{ fitur11 }}</li>
                <li>{{ fitur12 }}</li>
                <li>{{ fitur13 }}</li>
                <li>{{ fitur14 }}</li>
                <li>{{ fitur15 }}</li>
                <li>{{ fitur16 }}</li>
                <li>{{ fitur17 }}</li>
                <li>{{ fitur18 }}</li>
                <li>{{ fitur19 }}</li>
                <li>{{ fitur20 }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-800">
          Network configuration diagram
        </h1>

        <div class="w-full h-auto">
          <img :src="product.image" :alt="product.title" class="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
      <!-- Galeri Gambar -->
      <div class="w-full max-w-5xl mt-10">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">More Images</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img v-for="n in 4" :key="n" :src="product.image" :alt="`Additional view ${n}`"
            class="w-full h-32 object-contain bg-white border rounded shadow-sm hover:scale-105 transition" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductById } from '@/composable/useProducts'

const route = useRoute()
const id = route.params.id
const product = useProductById(id)

// Dummy data untuk demo, seharusnya berasal dari product detail
const descriptions = 'High-performance managed switch suitable for enterprise or industrial use.'
const SwitchingCapacity = '56 Gbps'
const PacketForwarding = '41.66 Mpps'
const MACAddressTable = '8K'
const PoEBudget = '370W total (30W max per port)'
const JumboFrame = '9KB'
const dimensions = '440 x 208 x 44 mm'
const PowerConsumption = 'Max 20W (device only)'
const fitur1 = 'Supports IEEE 802.3af/at'
const fitur2 = 'VLAN, QoS, IGMP, ACL'
const fitur3 = '802.1X, RADIUS, TACACS+'
const fitur4 = 'STP/RSTP/MSTP & ERPS'
const fitur5 = 'SNMPv1/v2c/v3, RMON'
const fitur6 = 'Dynamic ARP Inspection'
const fitur7 = 'Port Mirroring, LLDP-MED'
const info =
  'Supports 30W per port, with 370W total PoE power budget. Perfect for IP Cameras & APs.'
const environment1 = 'Operating Temperature: 0℃ ~ 45℃'
const environment2 = 'Storage Temperature: -40℃ ~ 70℃'
const environment3 = 'Humidity: 10% ~ 90% RH (non-condensing)'
</script>
