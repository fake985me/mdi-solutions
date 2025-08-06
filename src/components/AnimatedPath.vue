<template>
    <svg ref="svgRef" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.89 595.28" class="w-full h-auto"
        @mouseenter="hoverEnabled && startAnimation()" @mouseleave="hoverEnabled && stopAnimation()">
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g v-for="(pathData, idx) in paths" :key="idx">
            <path :id="`path-${idx}`" class="path-line" :d="pathData.d" :stroke="pathData.color || '#1c75bc'"
                :style="{ animationDelay: `${idx * 0.5}s` }" />
            <circle :ref="el => dotRefs[idx] = el" class="moving-dot" />
            <g :ref="el => trailGroups[idx] = el" />
        </g>
    </svg>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
    paths: {
        type: Array,
        required: true,
    },
    speed: {
        type: Number,
        default: 1.5,
    },
    hoverEnabled: {
        type: Boolean,
        default: true,
    },
    glow: {
        type: Boolean,
        default: true,
    },
})

const svgRef = ref(null)
const dotRefs = []
const trailGroups = []
let animationId = null
let running = false
const progresses = []

function startAnimation() {
    if (running) return
    running = true
    animate()
}

function stopAnimation() {
    running = false
    cancelAnimationFrame(animationId)
}

function createTrailDot(x, y) {
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    dot.setAttribute('cx', x)
    dot.setAttribute('cy', y)
    dot.setAttribute('r', 4)
    dot.setAttribute('fill', 'rgba(255,255,255,0.3)')
    return dot
}

function animate() {
    const svg = svgRef.value

    paths.forEach((p, idx) => {
        const path = svg.querySelector(`#path-${idx}`)
        const totalLength = path.getTotalLength()
        progresses[idx] = (progresses[idx] || 0) + speed

        if (progresses[idx] > totalLength) progresses[idx] = 0

        const point = path.getPointAtLength(progresses[idx])
        const dot = dotRefs[idx]
        dot.setAttribute('cx', point.x)
        dot.setAttribute('cy', point.y)
        if (glow) dot.setAttribute('filter', 'url(#glow)')

        const trail = createTrailDot(point.x, point.y)
        const group = trailGroups[idx]
        group.appendChild(trail)
        if (group.childNodes.length > 25) group.removeChild(group.firstChild)
    })

    if (running) animationId = requestAnimationFrame(animate)
}

onMounted(() => {
    if (!hoverEnabled) startAnimation()
})
</script>

<style scoped>
.path-line {
    fill: none;
    stroke-width: 4px;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke-miterlimit: 10;
    animation: drawLine 3s forwards;
}

.moving-dot {
    fill: white;
    stroke: #f43f5e;
    stroke-width: 2px;
    r: 8;
}

@keyframes drawLine {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
