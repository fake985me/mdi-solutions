<template>
    <LineDiagramBase diagram="users" :markers="markers" />
</template>

<script setup>
import { computed } from 'vue'
import LineDiagramBase from './LineDiagram.vue'

const props = defineProps({
    productImage: { type: String, default: '' },
    productTitle: { type: String, default: '' },

    // offset masing-masing marker
    offsetXTop: { type: Number, default: 0 },
    offsetYTop: { type: Number, default: -20 },
    offsetXBottom: { type: Number, default: 0 },
    offsetYBottom: { type: Number, default: -20 },

    // ukuran dalam % (default), bisa beda
    sizeTopPct: { type: Number, default: 10 },
    sizeBottomPct: { type: Number, default: 10 },

    // alternatif ukuran px (opsional). Jika diisi, meng-override %.
    sizeTopPx: { type: Number, default: 0 },
    sizeBottomPx: { type: Number, default: 0 },
})

/* Top polyline (473.3,179.1) & Bottom polyline (471.3,439.3) */
const markers = computed(() => ([
    {
        image: props.productImage,
        title: props.productTitle,
        x: 473.3, y: 179.1,
        offsetX: props.offsetXTop,
        offsetY: props.offsetYTop,
        widthPct: props.sizeTopPct,
        widthPx: props.sizeTopPx || undefined,
    },
    {
        image: props.productImage,
        title: props.productTitle,
        x: 471.3, y: 439.3,
        offsetX: props.offsetXBottom,
        offsetY: props.offsetYBottom,
        widthPct: props.sizeBottomPct,
        widthPx: props.sizeBottomPx || undefined,
    }
]))
</script>
