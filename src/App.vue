<template>
  <div class="app">
    <Navbar />
    <main>
      <router-view />
    </main>
    <CustomerVIew />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import CustomerVIew from '@/components/partial/CustomerVIew.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    CustomerVIew,
    Footer,
  },
}
</script>
