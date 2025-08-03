<template>
    <div class="relative group w-full text-center mt-16 px-4" v-if="networkDiagram">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">
            {{ category }} Network Configuration Diagram
        </h2>
        <Networkdiagram />
        <!-- Teks di atas gambar -->
        <div
            class="absolute lg:top-[355px] top-[150px] lg:left-[350px] left-[80px] transform transition-transform duration-1000 ease-in-out scale-100 group-hover:scale-150">
            <span class="bg-white text-sm px-2 py-1 rounded shadow">{{ category }} {{ subCategory }}</span>
        </div>
        <img :src="networkDiagram" :alt="title"
            class="absolute lg:top-[428px] max-top-[212px] top-[205px] lg:left-[355px] left-[110px] lg:w-[55px] w-[15px] h-auto pointer-events-none transition-transform duration-1000 ease-in-out scale-125 group-hover:scale-[2.5]" />

    </div>
</template>

<script setup>
import Networkdiagram from './XgSponDiagram.vue'
const props = defineProps({
    networkDiagram: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
})
</script>
