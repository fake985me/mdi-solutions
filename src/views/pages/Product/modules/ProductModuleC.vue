<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Detail Produk (Gambar - Fitur - Spesifikasi) -->
    <div class="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div class="flex flex-col lg:flex-row gap-8 pt-8">

        <!-- Bagian Gambar & Fitur -->
        <div class="flex-1 flex flex-col">
          <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ selectedProduct?.title || product.title }}</h3>
          <div class="w-full h-64 flex justify-center mb-6">
            <img :src="(selectedProduct?.image || product.image)" :alt="(selectedProduct?.title || product.title)"
              class="w-[65%] max-w-xs md:max-w-sm object-contain " />
          </div>

          <!-- Features -->
          <div v-if="features.length" class="border-t border-gray-800 pt-4 mt-4">
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Features</h3>
            <table class="table-auto w-full text-sm text-gray-700">
              <tbody>
                <tr v-for="(fitur, index) in features" :key="index">
                  <td class="border-b border-gray-800 px-3 py-1">{{ fitur }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Divider untuk layar besar -->
        <div class="hidden lg:block w-px bg-gray-800"></div>

        <!-- Bagian Spesifikasi -->
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-4 text-gray-900">Specification</h2>
          <div class="overflow-x-auto">
            <table class="table-auto w-full text-sm text-gray-700 border-collapse">
              <tbody>
                <tr>
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1">Flash Memory</td>
                  <td class="border-b border-gray-800 px-2 py-1">{{ selectedProduct?.flashmemory || product.flashmemory
                    }}</td>
                </tr>
                <tr>
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1">SDRAM Memory</td>
                  <td class="border-b border-gray-800 px-2 py-1">{{ selectedProduct?.sdrammemory || product.sdrammemory
                    }}</td>
                </tr>

                <!-- Interface -->
                <tr
                  v-if="(selectedProduct?.Interface1 || product.Interface1) && !(selectedProduct?.Interface2 || product.Interface2 || selectedProduct?.Interface3 || product.Interface3 || selectedProduct?.Interface4 || product.Interface4)">
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1">Interface</td>
                  <td class="border-b border-gray-800 px-2 py-1">{{ selectedProduct?.Interface1 || product.Interface1 }}
                  </td>
                </tr>
                <tr
                  v-else-if="(selectedProduct?.Interface2 || product.Interface2 || selectedProduct?.Interface3 || product.Interface3 || selectedProduct?.Interface4 || product.Interface4)">
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1 align-top">Interface</td>
                  <td class="border-b border-gray-800 px-2 py-1">
                    <ul class="list-disc pl-4 space-y-1">
                      <li v-if="(selectedProduct?.Interface1 || product.Interface1)">{{ selectedProduct?.Interface1 ||
                        product.Interface1 }}</li>
                      <li v-if="(selectedProduct?.Interface2 || product.Interface2)">{{ selectedProduct?.Interface2 ||
                        product.Interface2 }}</li>
                      <li v-if="(selectedProduct?.Interface3 || product.Interface3)">{{ selectedProduct?.Interface3 ||
                        product.Interface3 }}</li>
                      <li v-if="(selectedProduct?.Interface4 || product.Interface4)">{{ selectedProduct?.Interface4 ||
                        product.Interface4 }}</li>
                    </ul>
                  </td>
                </tr>

                <!-- Temperature -->
                <tr>
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1">Operating Temp</td>
                  <td class="border-b border-gray-800 px-2 py-1">{{ selectedProduct?.operatingtemperature ||
                    product.operatingtemperature }}</td>
                </tr>

                <!-- Power -->
                <tr v-if="(selectedProduct?.power2 || product.power2)">
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1 align-top">Power</td>
                  <td class="border-b border-gray-800 px-2 py-1">
                    <ul class="list-disc pl-4 space-y-1">
                      <li v-if="(selectedProduct?.power1 || product.power1)">{{ selectedProduct?.power1 ||
                        product.power1 }}</li>
                      <li v-if="(selectedProduct?.power2 || product.power2)">{{ selectedProduct?.power2 ||
                        product.power2 }}</li>
                    </ul>
                  </td>
                </tr>
                <tr v-else-if="(selectedProduct?.power1 || product.power1)">
                  <td class="font-semibold border-b border-r border-gray-800 px-2 py-1">Power</td>
                  <td class="border-b border-gray-800 px-2 py-1">{{ selectedProduct?.power1 || product.power1 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="w-full max-w-7xl px-4 mt-8">
            <h2 class="text-xl font-semibold mb-2">Overview</h2>
            <p class="text-gray-800 text-sm">
              {{ selectedProduct?.descriptions || product.descriptions }}
            </p>
          </div>
        </div>

      </div>
    </div>


    <!-- Detail Produk (Gambar - Fitur - Spesifikasi) -->
    <div class="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mt-32 md:mt-20 lg:mt-20">
      <!-- Gambar dan Deskripsi -->
      <div class="flex-1 flex flex-col items-center justify-center text-center lg:text-left px-4">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <img :src="product.image" :alt="product.title"
          class="w-full max-w-xs md:max-w-sm object-contain rounded-lg mb-4" />
      </div>
      <!-- Vertical Divider -->
      <div class="hidden lg:block w-px bg-gray-950"></div>
      <!-- Fitur -->
      <div class="flex-1 px-4 pt-4 lg:pt-0" v-if="features.length">
        <h2 class="text-xl font-semibold mb-2">Features</h2>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li v-for="(fitur, index) in features" :key="index">{{ fitur }}</li>
        </ul>
      </div>
      <!-- Vertical Divider -->
      <div class="hidden lg:block w-px bg-gray-950"></div>
      <!-- Spesifikasi -->
      <div class="flex-1 pt-4 lg:pt-0">
        <h2 class="text-xl font-semibold mb-2">Specification</h2>
        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-800">
          <li><strong>Flash Memory :</strong> {{ selectedProduct?.flashmemory || product.flashmemory }}</li>
          <li><strong>SDRAM Memory :</strong> {{ selectedProduct?.sdrammemory || product.sdrammemory }}</li>

          <!-- Interface -->
          <template
            v-if="(selectedProduct?.Interface2 || product.Interface2) || (selectedProduct?.Interface3 || product.Interface3) || (selectedProduct?.Interface4 || product.Interface4)">
            <li><strong>Interface :</strong></li>
            <ul class="list-disc pl-5">
              <li v-if="(selectedProduct?.Interface1 || product.Interface1)">{{ selectedProduct?.Interface1 ||
                product.Interface1 }}</li>
              <li v-if="(selectedProduct?.Interface2 || product.Interface2)">{{ selectedProduct?.Interface2 ||
                product.Interface2 }}</li>
              <li v-if="(selectedProduct?.Interface3 || product.Interface3)">{{ selectedProduct?.Interface3 ||
                product.Interface3 }}</li>
              <li v-if="(selectedProduct?.Interface4 || product.Interface4)">{{ selectedProduct?.Interface4 ||
                product.Interface4 }}</li>
            </ul>
          </template>
          <template v-else>
            <li v-if="(selectedProduct?.Interface1 || product.Interface1)">
              <strong>Interface :</strong> {{ selectedProduct?.Interface1 || product.Interface1 }}
            </li>
          </template>

          <li><strong>Operating Temp :</strong> {{ selectedProduct?.operatingtemperature || product.operatingtemperature
          }}</li>

          <!-- Power -->
          <template v-if="(selectedProduct?.power2 || product.power2)">
            <li><strong>Power :</strong></li>
            <ul class="list-disc pl-5">
              <li v-if="(selectedProduct?.power1 || product.power1)">{{ selectedProduct?.power1 || product.power1 }}
              </li>
              <li v-if="(selectedProduct?.power2 || product.power2)">{{ selectedProduct?.power2 || product.power2 }}
              </li>
            </ul>
          </template>
          <template v-else>
            <li v-if="(selectedProduct?.power1 || product.power1)">
              <strong>Power :</strong> {{ selectedProduct?.power1 || product.power1 }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- Overview -->
    <div class="w-full max-w-7xl px-4 mt-8">
      <h2 class="text-xl font-semibold mb-2">Overview</h2>
      <p class="text-gray-800 text-sm">{{ product.descriptions }}</p>
    </div>
    <!-- Diagram Section -->
    <h2 class="text-xl font-semibold mb-2 justify-center text-center">
      {{ selectedProduct.title || product.title }}<br>
      {{ selectedProduct.category }} {{ selectedProduct.subCategory }} Network Diagram
    </h2>
    <template v-if="effectiveProduct">
      <OpticLine v-if="diagramType === 'opticalline'" :product="effectiveProduct" :diagram="effectiveProduct.diagram" />
      <SwitchLine v-else-if="diagramType === 'switchline'" :product="effectiveProduct"
        :diagram="effectiveProduct.diagram" />
      <Wireless v-else-if="diagramType === 'wireless'" :product="effectiveProduct"
        :diagram="effectiveProduct.diagram" />
      <!-- fallback kalau type tidak dikenali -->
      <div v-else class="w-full max-w-7xl px-4 mt-8 text-sm text-gray-500">
        Diagram belum tersedia untuk produk ini.
      </div>
    </template>
    <!-- State kosong/jika diagram tidak ditemukan -->
    <div v-else class="w-full max-w-7xl px-4 mt-8">
      <div class="text-sm text-gray-500">
        Diagram belum tersedia untuk produk ini.
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '@/composable/useProducts'
import OpticLine from './components/OpticLine.vue'
import SwitchLine from './components/SwitchLine.vue'
import Wireless from './components/WifiLine.vue'


const route = useRoute()

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const effectiveProduct = computed(() => selectedProduct.value || props.product || null)

// Normalisasi "opticalLine" -> "opticalline", dsb.
const diagramType = computed(() =>
  (effectiveProduct.value?.networkDIagram || '').toString().trim().toLowerCase()
)


const { products } = useProducts()

// Fitur dari props.product (sesuai data yang kamu kirim dari parent)
const features = computed(() =>
  Array.from({ length: 15 }, (_, i) => props.product?.[`fitur${i + 1}`]).filter((f) => f && f !== 'null'),
)

// --- Pilih produk berdasar slug di URL; fallback ke props.product jika list belum siap ---
const selectedProduct = computed(() => {
  const slug = route.params.slug
  if (!slug) return props.product || null
  const list = products?.value || []
  return list.find((p) => p.slug === slug) || props.product || null
})

</script>

<style scoped>
/* Opsional: garis pemisah untuk layar besar sudah pakai border/tailwind.
   Tambahan styling kecil jika diperlukan. */
</style>
