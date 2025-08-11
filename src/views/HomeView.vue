<script setup>
import Carousel from '../components/Carousel.vue'
import ProductView from '@/components/partial/ProductView.vue'
import SolutionsView from '@/components/partial/SolutionsView.vue'
import ProjectView from '@/components/partial/ProjectView.vue'
import AboutUs from '@/components/partial/AboutUs.vue'
import NetworkDiagram from '@/views/pages/Product/modules/components/NetworkDiagram.vue'
</script>

<template>
  <main>
    <Carousel />
    <NetworkDiagram/>
    <ProductView />
    <SolutionsView />
    <AboutUs />
    <ProjectView />
  </main>
</template>
