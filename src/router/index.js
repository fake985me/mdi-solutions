import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import HomeView from '../views/HomeView.vue'
import Product from '@/views/pages/Product.vue'
import ProductDetail from '@/views/pages/Product/ProductDetail.vue'
import Solutions from '@/views/pages/Solutions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { layout: 'guest' },
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
  },
  {
    path: '/product/:slug',
    name: 'product-detail',
    component: ProductDetail,
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: Solutions,
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/pages/Projects.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/pages/Contact.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
    meta: { layout: 'guest' },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/pages/admin/Dashboard.vue'),
    meta: { requiresAuth: true, layout: 'auth' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll ke atas halaman saat navigasi
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const useAuth = useAuthStore()
  if (to.meta.requiresAuth && !useAuth.user) {
    return '/login'
  }
})

export default router
