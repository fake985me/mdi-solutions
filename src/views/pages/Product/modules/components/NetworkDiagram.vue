<template>
    <div class="relative group w-full text-center mt-16 px-4" v-if="networkDiagram">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">
            {{ category }} Network Configuration Diagram
        </h2>
        <diagram />
        <!-- Teks di atas gambar -->
        <div
            class="absolute top-[185px] sm:top-[375px] left-[102px] sm:left-[350px] transform transition-transform duration-1000 ease-in-out scale-100 group-hover:scale-150 sm:text-[14px] text-[6px]">
            {{ category }} {{ subCategory }}
        </div>
        <img :src="networkDiagram" :alt="title"
            class="absolute top-[208px] sm:top-[425px] left-[105px] sm:left-[360px] w-[25px] sm:w-[55px] h-auto pointer-events-none transition-transform duration-1000 ease-in-out scale-125 group-hover:scale-[2.5]" />

    </div>
</template>

<script setup>
import diagram from './LineDiagram.vue'
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
