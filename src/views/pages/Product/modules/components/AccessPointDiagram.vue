<template>
    <LineDiagramBase diagram="accesspoint" :productImage="productImage" :productTitle="productTitle"
        :positionIndex="positionIndex" :offsetX="offsetX" :offsetY="offsetY" />
</template>

<script setup>
import LineDiagramBase from './LineDiagram.vue'

defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },
    positionIndex: { type: Number, default: 3 }, // default (643.7, 356)
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: -20 },
})
</script>
