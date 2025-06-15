<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-blue-700">D2224GP - L2 Managed PoE Switch</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Gambar -->
      <div>
        <img :src="product.image" :alt="product.title" class="w-full h-auto rounded-lg shadow" />
      </div>

      <!-- Spesifikasi Singkat -->
      <div>
        <ul class="space-y-2 text-gray-700">
          <li><strong>Model:</strong>{{ product.title }}</li>
          <li><strong>Port:</strong>{{ product.port }}</li>
          <li><strong>Switching Capacity:</strong>{{ SwitchingCapacity }}</li>
          <li><strong>Packet Forwarding:</strong>{{ PacketForwarding }}</li>
          <li><strong>MAC Address Table:</strong>{{ MACAddressTable }}</li>
          <li><strong>PoE Budget:</strong>{{ PoEBudget }}</li>
          <li><strong>Jumbo Frame:</strong>{{ JumboFrame }}</li>
          <li><strong>Dimensions:</strong>{{ dimensions }}</li>
          <li><strong>Power Consumption:</strong>{{ PowerConsumption }}</li>
        </ul>
      </div>
    </div>

    <!-- Deskripsi -->
    <section class="mt-10">
      <h2 class="text-2xl font-semibold mb-2 text-gray-800">Overview</h2>
      <p class="text-gray-600">{{ descriptions }}</p>
    </section>

    <!-- Fitur -->
    <section class="mt-8">
      <h2 class="text-2xl font-semibold mb-2 text-gray-800">Key Features</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-1">
        <li>{{ fitur1 }}</li>
        <li>{{ fitur2 }}</li>
        <li>{{ fitur3 }}</li>
        <li>{{ fitur4 }}</li>
        <li>{{ fitur5 }}</li>
        <li>{{ fitur6 }}</li>
        <li>{{ fitur7 }}</li>
      </ul>
    </section>

    <!-- PoE Info -->
    <section class="mt-8">
      <h2 class="text-2xl font-semibold mb-2 text-gray-800">PoE Power</h2>
      <p class="text-gray-600">{{ info }}</p>
    </section>

    <!-- Environmental -->
    <section class="mt-8">
      <h2 class="text-2xl font-semibold mb-2 text-gray-800">Environmental & Physical</h2>
      <ul class="list-disc pl-6 text-gray-700 space-y-1">
        <li>{{ environment1 }}</li>
        <li>{{ environment2 }}</li>
        <li>{{ environment3 }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductById } from '@/composable/useProducts'

const route = useRoute()
const id = route.params.id
const product = useProductById(id)
</script>
