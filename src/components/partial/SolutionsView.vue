<template>
  <section class="py-12 px-6 relative" id="Product">
    <!-- Title -->
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-gray-800">Our Service & Solutions</h2>
      <p class="text-gray-500 text-lg mt-2">Make it easier</p>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center">
      <div class="w-full max-w-6xl">
        <ul class="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <li
            v-for="feature in features"
            :key="feature.id"
            :class="[
              'px-5 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-all',
              isOpen === feature.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
            @click.prevent="isOpen = feature.id"
          >
            {{ feature.name }}
          </li>
        </ul>

        <!-- Feature Card -->
        <div
          v-if="activeFeature"
          :key="activeFeature.id"
          class="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex"
        >
          <div class="md:w-1/2">
            <img
              :src="activeFeature.details.imageUrl"
              :alt="activeFeature.details.title"
              class="h-64 w-full object-cover md:h-full"
            />
          </div>
          <div class="p-8 md:w-1/2">
            <h3 class="text-xl font-semibold text-indigo-600 uppercase tracking-wide mb-2">
              {{ activeFeature.details.title }}
            </h3>
            <p class="text-gray-600 text-base leading-relaxed">
              {{ activeFeature.details.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import features from '@/composable/useSolutions'

const isOpen = ref(1)

// Ambil fitur aktif berdasarkan ID
const activeFeature = computed(() => features.find((feature) => feature.id === isOpen.value))
</script>

<style scoped>
/* Tambahan opsional styling kustom */
</style>
