<template>
    <LineDiagramBase diagram="distributionsswitch" :productImage="productImage" :productTitle="productTitle"
        :positionIndex="positionIndex" :offsetX="offsetX" :offsetY="offsetY" />
</template>

<script setup>
import LineDiagramBase from './LineDiagram.vue'

defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },
    positionIndex: { type: Number, default: 4 }, // default dekat (597.7, 322.4)
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: -20 },
})
</script>
