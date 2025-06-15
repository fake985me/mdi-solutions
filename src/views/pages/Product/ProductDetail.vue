<template>
  <div class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
    <!-- Grid Utama -->
    <div class="overflow-hidden max-w-5xl w-full grid md:grid-cols-[1fr_1px_1fr]">
      <!-- Gambar Utama -->
      <div class="w-full h-auto">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <!-- Divider -->
      <div class="bg-gray-300 w-px h-full mx-auto hidden md:block"></div>

      <!-- Deskripsi -->
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-3xl font-bold font-serif text-gray-800 dark:text-sky-900 mb-2">
            {{ product.title }}
          </h2>
          <p class="text-gray-900 dark:text-gray-800 mb-4">
            {{ descriptions }}
          </p>

          <!-- Spesifikasi -->
          <div class="mb-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2">
              Spesifications
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm">
              <li><strong class="mr-1">Model :</strong>{{ product.title }}</li>
              <li><strong class="mr-1">Port :</strong>{{ product.port }}</li>
              <li><strong class="mr-1">Switching Capacity :</strong>{{ SwitchingCapacity }}</li>
              <li><strong class="mr-1">Packet Forwarding :</strong>{{ PacketForwarding }}</li>
              <li><strong class="mr-1">MAC Address Table :</strong>{{ MACAddressTable }}</li>
              <li><strong class="mr-1">PoE Budget :</strong>{{ PoEBudget }}</li>
              <li><strong class="mr-1">Jumbo Frame :</strong>{{ JumboFrame }}</li>
              <li><strong class="mr-1">Dimensions :</strong>{{ dimensions }}</li>
              <li><strong class="mr-1">Power Consumption :</strong>{{ PowerConsumption }}</li>
            </ul>
          </div>

          <!-- Key Features -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2">
              Key Features
            </h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm">
              <li>{{ fitur1 }}</li>
              <li>{{ fitur2 }}</li>
              <li>{{ fitur3 }}</li>
              <li>{{ fitur4 }}</li>
              <li>{{ fitur5 }}</li>
              <li>{{ fitur6 }}</li>
              <li>{{ fitur7 }}</li>
            </ul>
          </div>
        </div>

        <!-- PoE Info -->
        <div class="mt-6">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2">PoE Power</h2>
          <p class="text-gray-600">{{ info }}</p>
        </div>

        <!-- Environmental -->
        <div class="mt-4">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-600 mb-2">
            Environmental & Physical
          </h2>
          <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm">
            <li>{{ environment1 }}</li>
            <li>{{ environment2 }}</li>
            <li>{{ environment3 }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Galeri Gambar -->
    <div class="w-full max-w-5xl mt-10">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">More Images</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <img
          v-for="n in 4"
          :key="n"
          :src="product.image"
          :alt="`Additional view ${n}`"
          class="w-full h-32 object-contain bg-white border rounded shadow-sm hover:scale-105 transition"
        />
      </div>
    </div>
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
