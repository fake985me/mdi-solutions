<script setup>
import Carousel from '../components/Carousel.vue'
import ProductView from '@/components/partial/ProductView.vue'
import SolutionsView from '@/components/partial/SolutionsView.vue'
import ProjectView from '@/components/partial/ProjectView.vue'
import AboutUs from '@/components/partial/AboutUs.vue'
import LineAnimationSVG from '@/components/icons/Diagram.vue'
</script>

<template>
  <main>
    <Carousel />
    <LineAnimationSVG />
    <ProductView />
    <SolutionsView />
    <AboutUs />
    <ProjectView />
  </main>
</template>
