<template>
  <section class="min-h-screen flex flex-col items-center justify-start mt-10 px-4 py-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <img :src="product.image" class="w-full rounded-lg mb-4" />
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
      </div>

      <div class="w-full flex flex-row mt-6 md:!mt-0">
        <div class="w-10/12 pl-4">
          <h2 class="text-xl font-semibold mb-2">Features</h2>
          <ul class="list-disc pl-5">
            <li v-for="i in 10" :key="i" v-if="product[`fitur${i}`]">
              {{ product[`fitur${i}`] }}
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full mt-6 md:!mt-0">
        <div class="w-10/12 pl-4">
          <h1 class="text-xl md:text-3xl font-semibold text-gray-800">Specification</h1>
          <ul class="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-600 text-sm py-3">
            <li><strong class="mr-1">Flash Memory :</strong>{{ flashmemory }}</li>
            <li><strong class="mr-1">SDRAM Memory :</strong>{{ sdrammemory }}</li>
            <li>
              <ul>
                <strong class="mr-1">Interface :</strong
                >{{
                  Interface1
                }}
                <li>{{ Interface2 }}</li>
                <li>{{ Interface3 }}</li>
                <li>{{ Interface4 }}</li>
              </ul>
            </li>
            <li><strong class="mr-1">Operating Temperature :</strong>{{ operatingtemperature }}</li>
            <li><strong class="mr-1">Storage Temperature :</strong>{{ storagetemperature }}</li>
            <li><strong class="mr-1">Operating Humidity :</strong>{{ operatinghumidity }}</li>
            <li><strong class="mr-1">Power :</strong>{{ power }}</li>
            <li><strong class="mr-1">Power Consumption :</strong>{{ powercomsumptions }}</li>
            <li><strong class="mr-1">Dimensions (W x H x D) :</strong>{{ dimensions }}</li>
            <li>{{ fitur20 }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="relative basis-1/2 text-center md:!text-left px-2 py-0 md:py-6 self-center">
      <h1 class="text-xl md:text-xl font-semibold text-gray-800">Network configuration diagram</h1>

      <div class="p-3 w-full h-auto">
        <img
          :src="product.networkdiagram"
          :alt="product.title"
          class="w-cover h-auto object-cover rounded-lg"
        />
      </div>
    </div>

    <!-- Related Products -->
    <section class="mt-16">
      <h2 class="text-2xl font-bold mb-6 text-gray-900">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="item in relatedProducts"
          :key="item.id"
          class="bg-white shadow-md rounded-xl hover:scale-105 duration-300 hover:shadow-xl"
        >
          <RouterLink :to="`/product/${item.slug}`">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-44 object-contain rounded-t-lg p-4"
            />
          </RouterLink>
          <div class="px-4 py-3">
            <h3 class="text-md font-semibold text-gray-900 truncate">
              <RouterLink :to="`/product/${item.slug}`" class="hover:underline">
                {{ item.title }}
              </RouterLink>
            </h3>
            <p class="text-sm text-gray-500" v-if="item.port">{{ item.port }}</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
defineProps({
  product: {
    module: Object,
    required: true,
  },
})
</script>
