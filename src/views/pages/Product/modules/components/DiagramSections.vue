<template>
    <!-- DiagramSections -->
    <div class="w-full max-w-7xl px-4 mt-8">
        <h1 class="text-2xl font-bold text-violet-800 mb-4">{{ product.title }}</h1>
        <h2 class="text-gray-800 text-sm">{{ product.category }}<br>{{ product.subCategory }}</br><br>Network
            Diagram</br></h2>
    </div>
    <component :is="diagramComponent" v-if="diagramComponent && product" :product="product" />
</template>

<script>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import products from '@/composable/useProducts'

const router = useRouter()
const route = useRoute()

const detailComponent = computed(() => {
    const mod = product.value?.module
    if (!mod) return null
    const loaders = {
        access: () => import('../Product/modules/components/AccessDiagram.vue'),
        accessswitch: () => import('../Product/modules/components/AccessSwitchDiagram.vue'),
        apcontroller: () => import('../Product/modules/components/ApControllerDiagram.vue'),
        distributions: () => import('../Product/modules/components/DistributionsDiagram.vue'),
        distributionsswitch: () => import('../Product/modules/components/DistributionsSwitchDiagram.vue'),
        users: () => import('../Product/modules/components/UsersDiagram.vue'),
        accesspoint: () => import('./modules/components/AccessPointDiagram.vue')
    }

    const loaader = loaders[mod]
    return loaader ? defineAsyncComponent(loaader) : null
})
</script>