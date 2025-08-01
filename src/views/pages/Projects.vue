<template>
  <!-- ISP Customer Section -->
  <section id="ispcustomer" class="bg-white">
    <div class="max-w-5xl mx-auto px-2 py-20 space-y-12">
      <h1 class="text-center text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
        ISP Customer
      </h1>

      <div class="space-y-12">
        <article v-for="(item, index) in articles" :key="index" class="flex flex-col sm:flex-row gap-6 items-start pb-6"
          :class="index < articles.length - 1 ? 'border-b border-gray-200' : ''">
          <!-- Image -->
          <div class="w-full sm:w-48 flex-shrink-0">
            <img :src="item.img" :alt="item.title" class="w-full h-auto max-h-[180px] object-cover rounded-md shadow" />
          </div>

          <!-- Text -->
          <div class="flex-1">
            <a :href="item.link" class="text-blue-600 hover:underline">
              <h3 class="text-xl font-bold uppercase mb-2">{{ item.title }}</h3>
            </a>
            <p class="text-gray-700">
              {{ item.text }}
              <span v-if="item.hoverText" class="text-sky-500 hover:text-sky-700">{{
                item.hoverText
              }}</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- Managed Services Section -->
  <section id="managedservices" class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
      <h1 class="text-center text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
        Managed Services Project
      </h1>

      <div v-for="(project, index) in managedProjects" :key="index"
        class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-12" :class="[
          index % 2 !== 0 ? 'lg:flex-row-reverse' : '',
          index < managedProjects.length - 1 ? 'border-b border-gray-300' : '',
        ]">
        <!-- Text -->
        <div class="w-full lg:w-1/2 max-w-xl space-y-4 text-center lg:text-left">
          <p class="text-xs font-bold tracking-tight text-gray-900">Managed Services Project</p>
          <h2 class="text-2xl font-bold tracking-tight text-gray-800">{{ project.title }}</h2>
          <p class="text-base text-gray-700">{{ project.address }}</p>
        </div>

        <!-- Image -->
        <div class="w-[full] sm:w-auto max-w-md">
          <img :src="project.image" :alt="project.title"
            class="w-[240px] h-auto max-h-[140px] object-cover rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

import a from '@/assets/static/project/moratel.jpg'
import b from '@/assets/static/project/indonet.jpg'
import menaradanareksa from '@/assets/static/project/menaradanareksa.jpg'
import tamanmelatidepok from '@/assets/static/project/tamanmelatidepok.jpg'
import tamanmelatisurabaya from '@/assets/static/project/tamanmelatisurabaya.jpg'
import pollux from '@/assets/static/project/pollux.jpg'
import lampung from '@/assets/static/project/lampung.jpg'
import chadstone from '@/assets/static/project/chadstone-building-.jpg'

const route = useRoute()

function scrollToSection(id) {
  nextTick(() => {
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  })
}

onMounted(() => {
  if (route.query.id) scrollToSection(route.query.id)
})

watch(
  () => route.query.id,
  (newId) => {
    if (newId) scrollToSection(newId)
  },
)

const articles = [
  {
    img: a,
    title: 'Moratelindo',
    text: ' Moratelindo is an Indonesian telecommunications company that provides a range of telecommunications and network services. We signed and implemented FTTH Project for Moratelindo at 2015',
    link: '#',
  },
  {
    img: b,
    title: 'Indonet',
    text: 'Founded in 1994, Indonet is a pioneer in the provision of digital infrastructure services. offering various solutions and services designed to meet the evolving needs of modern businesses. We signed and implemented for FTTH Project',
    link: '#',
  },
]

const managedProjects = [
  {
    title: 'Menara Danareksa',
    address: 'Jl. Medan Merdeka Sel. No.14, Gambir, Jakarta Pusat, DKI Jakarta 10110',
    image: menaradanareksa,
  },
  {
    title: 'Taman Melati Margonda',
    address: 'Jl. Margonda Raya No.525A, Pondok Cina, Beji, Kota Depok, Jawa Barat 16424',
    image: tamanmelatidepok,
  },
  {
    title: 'Taman Melati Merr Surabaya',
    address: 'Jl. Mulyorejo Utara No.201, Mulyorejo, Kota SBY, Jawa Timur 60115',
    image: tamanmelatisurabaya,
  },
  {
    title: 'Pollux Meisterstadt Batam',
    address: 'Jl. Ahmad Yani, Simpang Franky, Batam Kota, Kepulauan Riau 29463',
    image: pollux,
  },
  {
    title: 'Lampung City Mall',
    address: 'Jl. Yos Sudarso No.80, Bumi Waras, Kota Bandar Lampung, Lampung 35225',
    image: lampung,
  },
  {
    title: 'Chadstone Cikarang',
    address:
      'Jalan Raya Cikarang - Cibarusah, Exit Toll KM31 Cikarang Barat, Kabupaten Bekasi, Jawa Barat 17530',
    image: chadstone,
  },
]
</script>
