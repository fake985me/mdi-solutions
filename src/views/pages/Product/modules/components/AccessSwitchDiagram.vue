<template>
    <LineDiagramBase diagram="accessswitch" :productImage="productImage" :productTitle="productTitle" :offsetX="offsetX"
        :offsetY="offsetY" />
</template>

<script setup>
import LineDiagramBase from './LineDiagram.vue'

defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: -20 },
})
</script>
