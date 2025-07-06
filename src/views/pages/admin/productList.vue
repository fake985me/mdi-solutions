<template>
  <section class="max-w-7xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Daftar Produk</h2>

    <!-- Filter -->
    <div class="flex gap-4 mb-6">
      <select v-model="selectedCategory" @change="loadSubcategories" class="input w-1/3">
        <option value="">Semua Kategori</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
      </select>

      <select v-model="selectedSubcategory" class="input w-1/3">
        <option value="">Semua Subkategori</option>
        <option v-for="sub in subcategories" :key="sub.id" :value="sub.id">{{ sub.name }}</option>
      </select>

      <button @click="resetFilter" class="btn-secondary">Reset</button>
    </div>

    <!-- List -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="product in filteredProducts" :key="product.id" class="border p-4 rounded shadow">
        <img :src="product.thumbnail_url" class="h-32 w-full object-contain mb-2" />
        <h3 class="text-lg font-semibold mb-1">{{ product.name }}</h3>
        <p class="text-sm text-gray-600">{{ product.description }}</p>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-6 text-center">
      <button v-if="!isEnd" @click="loadMore" class="btn">Load More</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'

const db = getFirestore()
const limitPerPage = 6

const categories = ref([])
const subcategories = ref([])
const selectedCategory = ref('')
const selectedSubcategory = ref('')

const products = ref([])
const lastDoc = ref(null)
const isEnd = ref(false)

onMounted(async () => {
  await loadCategories()
  await loadSubcategories()
  await loadProducts()
})

const loadCategories = async () => {
  const snap = await getDocs(collection(db, 'categories'))
  categories.value = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

const loadSubcategories = async () => {
  if (!selectedCategory.value) {
    const snap = await getDocs(collection(db, 'subcategories'))
    subcategories.value = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return
  }

  const q = query(
    collection(db, 'subcategories'),
    where('category_id', '==', selectedCategory.value),
  )
  const snap = await getDocs(q)
  subcategories.value = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

const loadProducts = async () => {
  let q = query(collection(db, 'products'), orderBy('created_at', 'desc'), limit(limitPerPage))

  if (selectedCategory.value) {
    q = query(q, where('category_id', '==', selectedCategory.value))
  }
  if (selectedSubcategory.value) {
    q = query(q, where('subcategory_id', '==', selectedSubcategory.value))
  }
  if (lastDoc.value) {
    q = query(q, startAfter(lastDoc.value))
  }

  const snap = await getDocs(q)
  if (snap.empty) {
    isEnd.value = true
    return
  }

  lastDoc.value = snap.docs[snap.docs.length - 1]
  products.value.push(...snap.docs.map((d) => ({ id: d.id, ...d.data() })))
}

const loadMore = async () => {
  await loadProducts()
}

const resetFilter = () => {
  selectedCategory.value = ''
  selectedSubcategory.value = ''
  lastDoc.value = null
  products.value = []
  isEnd.value = false
  loadProducts()
}

const filteredProducts = computed(() => {
  return products.value
})
</script>

<style scoped>
.input {
  @apply border p-2 rounded w-full;
}
.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}
.btn-secondary {
  @apply px-4 py-2 bg-gray-300 rounded hover:bg-gray-400;
}
</style>
