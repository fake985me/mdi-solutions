<template>
    <nav class="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <ol class="list-reset flex flex-wrap gap-1">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
                <router-link v-if="index !== breadcrumbs.length - 1" :to="crumb.path"
                    class="text-blue-600 hover:underline">
                    {{ crumb.label }}
                </router-link>
                <span v-else class="text-gray-700 font-medium">
                    {{ crumb.label }}
                </span>
                <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = ref([])

watchEffect(async () => {
    const matched = route.matched.filter(r => r.meta?.breadcrumb)
    const crumbs = []

    for (const r of matched) {
        let label = r.meta.breadcrumb

        // Jika breadcrumb adalah fungsi, panggil dengan route sebagai argumen
        if (typeof label === 'function') {
            label = await label(route)
        }

        // Pastikan hasilnya string
        if (typeof label !== 'string') {
            label = String(label?.name || r.name || 'Page')
        }

        crumbs.push({
            path: r.path,
            label,
        })
    }

    breadcrumbs.value = crumbs
})
</script>
