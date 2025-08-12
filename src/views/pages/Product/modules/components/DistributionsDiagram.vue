<template>
    <LineDiagramBase diagram="distributions" :markers="markers" />
</template>

<script setup>
import { computed } from 'vue'
import LineDiagramBase from './LineDiagram.vue'

const props = defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },

    // offset masing-masing marker
    offsetXLine: { type: Number, default: 0 },
    offsetYLine: { type: Number, default: -20 },
    offsetXPolyline: { type: Number, default: 0 },
    offsetYPolyline: { type: Number, default: -20 },

    // ukuran dalam % (default)
    sizeLinePct: { type: Number, default: 10 },
    sizePolylinePct: { type: Number, default: 10 },

    // alternatif px (opsional)
    sizeLinePx: { type: Number, default: 0 },
    sizePolylinePx: { type: Number, default: 0 },
})

/* Line (566.7,309.7) & Polyline (503.1,225.5) */
const markers = computed(() => ([
    {
        image: props.productImage,
        title: props.productTitle,
        x: 566.7, y: 309.7, // horizontal yellow line
        offsetX: props.offsetXLine,
        offsetY: props.offsetYLine,
        widthPct: props.sizeLinePct,
        widthPx: props.sizeLinePx || undefined,
    },
    {
        image: props.productImage,
        title: props.productTitle,
        x: 503.1, y: 225.5, // yellow polyline
        offsetX: props.offsetXPolyline,
        offsetY: props.offsetYPolyline,
        widthPct: props.sizePolylinePct,
        widthPx: props.sizePolylinePx || undefined,
    }
]))
</script>
