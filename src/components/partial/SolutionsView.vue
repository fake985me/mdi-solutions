<template>
  <section class="py-8 px-4 relative" id="Product">
    <!-- Judul -->
    <div class="text-center mb-6">
      <h2 class="text-3xl font-bold">Our Service & Solutions</h2>
      <p class="text-gray-500">make it easier</p>
    </div>

    <!-- Centered container -->
    <div class="flex justify-center">
      <div class="w-full">
        <!-- Tabs -->
        <ul class="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          <li
            v-for="feature in features"
            :key="feature.id"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition',
              isOpen === feature.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            <a @click.prevent="isOpen = feature.id">
              {{ feature.name }}
            </a>
          </li>
        </ul>

        <!-- Transition Card -->
        <div class="relative min-h-[12rem] sm:min-h-[10rem] overflow-hidden">
          <transition name="fade-slide" mode="out-in">
            <div
              v-if="activeFeature"
              :key="activeFeature.id"
              class="bg-white shadow-md rounded-xl flex flex-col sm:flex-row gap-4 p-4 items-center sm:items-start h-90"
            >
              <!-- Gambar -->
              <div class="w-full sm:w-40 md:w-56 h-40 sm:h-full flex-shrink-0">
                <img
                  :src="activeFeature.details.imageUrl"
                  :alt="activeFeature.details.title"
                  class="object-cover w-full h-full rounded-lg p-1"
                />
              </div>

              <!-- Teks -->
              <div class="w-full flex-1 flex flex-col justify-center text-center sm:text-left">
                <h3 class="text-lg sm:text-xl font-semibold mb-2">
                  {{ activeFeature.details.title }}
                </h3>
                <p class="text-gray-600 text-sm mb-4">
                  {{ activeFeature.details.description }}
                </p>
                <button
                  class="self-center sm:self-start px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </transition>
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
