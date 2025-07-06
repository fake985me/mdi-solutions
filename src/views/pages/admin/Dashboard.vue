<template>
  <section class="max-w-6xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">📊 Dashboard Admin</h2>

    <!-- Stats -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="stat-card">Produk: {{ totalProducts }}</div>
      <div class="stat-card">Kategori: {{ totalCategories }}</div>
      <div class="stat-card">Subkategori: {{ totalSubcategories }}</div>
      <div class="stat-card">Low Stok: {{ lowStock.length }}</div>
    </div>

    <!-- Produk Baru -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold mb-2">🆕 Produk Terbaru</h3>
      <ul class="list-disc pl-6 text-gray-700">
        <li v-for="item in recentProducts" :key="item.id">
          {{ item.name }} <small class="text-gray-400">({{ formatDate(item.created_at) }})</small>
        </li>
      </ul>
    </div>

    <!-- Low Stock List -->
    <div>
      <h3 class="text-lg font-semibold mb-2">⚠️ Produk Stok Rendah</h3>
      <ul class="list-disc pl-6 text-red-700">
        <li v-for="item in lowStock" :key="item.id">
          {{ item.product_name }} - {{ item.stock_qty }} pcs ({{ item.stock_status }})
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  doc,
  getDoc,
} from 'firebase/firestore'

const db = getFirestore()

const totalProducts = ref(0)
const totalCategories = ref(0)
const totalSubcategories = ref(0)
const recentProducts = ref([])
const lowStock = ref([])

onMounted(async () => {
  const [productsSnap, catSnap, subSnap, invSnap] = await Promise.all([
    getDocs(collection(db, 'products')),
    getDocs(collection(db, 'categories')),
    getDocs(collection(db, 'subcategories')),
    getDocs(collection(db, 'inventory_status')),
  ])

  totalProducts.value = productsSnap.size
  totalCategories.value = catSnap.size
  totalSubcategories.value = subSnap.size

  // Ambil 5 produk terbaru
  const recentSnap = await getDocs(
    query(collection(db, 'products'), orderBy('created_at', 'desc'), limit(5)),
  )
  recentProducts.value = recentSnap.docs.map((d) => ({ id: d.id, ...d.data() }))

  // Ambil produk dengan stok low / out
  const invList = invSnap.docs
    .filter((d) => ['low_stock', 'out_of_stock'].includes(d.data().stock_status))
    .map((d) => ({ id: d.id, ...d.data() }))

  // Ambil nama produk dari ID
  const enriched = []
  for (const item of invList) {
    const pDoc = await getDoc(doc(db, 'products', item.product_id))
    enriched.push({
      ...item,
      product_name: pDoc.exists() ? pDoc.data().name : 'Unknown',
    })
  }

  lowStock.value = enriched
})

const formatDate = (ts) => {
  if (!ts?.toDate) return ''
  return ts.toDate().toLocaleDateString()
}
</script>

<style scoped>
.stat-card {
  @apply bg-blue-50 text-blue-800 font-semibold text-center p-4 rounded shadow;
}
</style>
