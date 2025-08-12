<template>
    <LineDiagramBase diagram="apcontroller" :productImage="productImage" :productTitle="productTitle" :offsetX="offsetX"
        :offsetY="offsetY" />
</template>

<script setup>
import LineDiagramBase from './LineDiagram.vue'

defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },
    offsetX: { type: Number, default: 26 },
    offsetY: { type: Number, default: 16 },
})
</script>
