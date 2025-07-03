<template>
  <div class="space-y-6">
    <!-- Admin Dashboard Header -->
    <div class="bg-white shadow-sm rounded-lg p-6">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p class="text-gray-600">System overview and administration controls</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">Last updated</p>
          <p class="text-lg font-semibold text-gray-900">{{ currentTime }}</p>
        </div>
      </div>
    </div>

    <!-- System Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Total Users</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalUsers }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Active Users</p>
            <p class="text-2xl font-bold text-gray-900">{{ activeUsers }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">User Roles</p>
            <p class="text-2xl font-bold text-gray-900">{{ totalRoles }}</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-error-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-error-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.955-.816 2.098-1.851l.793-5.7a2.002 2.002 0 00-1.98-2.309h-1.383a2 2 0 01-1.414-.586l-1.828-1.828A2 2 0 0013.172 2h-2.344a2 2 0 00-1.414.586L7.586 4.414A2 2 0 016.172 5H4.789a2.002 2.002 0 00-1.98 2.309l.793 5.7C3.744 14.184 4.645 15 5.699 15z" />
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">System Alerts</p>
            <p class="text-2xl font-bold text-gray-900">{{ systemAlerts }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Users -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">Recent Users</h3>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div v-for="user in recentUsers" :key="user.id" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span class="text-primary-600 font-semibold text-sm">
                  {{ user.first_name?.charAt(0) || 'U' }}{{ user.last_name?.charAt(0) || '' }}
                </span>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900">
                  {{ user.first_name }} {{ user.last_name }}
                </p>
                <p class="text-sm text-gray-500">{{ user.role?.name || 'No role' }}</p>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="{
                'bg-success-100 text-success-800': user.is_active,
                'bg-error-100 text-error-800': !user.is_active
              }">
                {{ user.is_active ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- System Status -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">System Status</h3>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">Database</span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                Online
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">Authentication</span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                Active
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">Storage</span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
                75% Used
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">API Status</span>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow-sm">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">Quick Actions</h3>
      </div>
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <router-link to="/admin/users"
            class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Manage Users</p>
              <p class="text-sm text-gray-500">Add, edit, or remove users</p>
            </div>
          </router-link>

          <router-link to="/admin/roles"
            class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Manage Roles</p>
              <p class="text-sm text-gray-500">Configure user permissions</p>
            </div>
          </router-link>

          <button @click="exportData"
            class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Export Data</p>
              <p class="text-sm text-gray-500">Download system reports</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { firebase, db } from '@/lib/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const currentTime = ref(new Date().toLocaleString())
const totalUsers = ref(0)
const activeUsers = ref(0)
const totalRoles = ref(0)
const systemAlerts = ref(0)
const recentUsers = ref([])

async function fetchAdminData() {
  try {
    // Total users
    const { count: usersCount } = await firebase
      .from('users')
      .select('*', { count: 'exact', head: true })
    totalUsers.value = usersCount || 0

    // Active users
    const { count: activeUsersCount } = await firebase
      .from('users')
      .eq('is_active', true)
      .select('*', { count: 'exact', head: true })
    activeUsers.value = activeUsersCount || 0

    // Total roles
    const { count: rolesCount } = await firebase
      .from('user_roles')
      .select('*', { count: 'exact', head: true })
    totalRoles.value = rolesCount || 0

    // Recent users (ambil 5 terbaru)
    const { data: users } = await firebase
      .from('users')
      .order('created_at', { ascending: false })
      .select('*')

    const topUsers = (users || []).slice(0, 5)

    // Tambahkan role.name berdasarkan role_id
    const usersWithRoles = await Promise.all(
      topUsers.map(async user => {
        if (user.role_id) {
          try {
            const roleSnap = await getDoc(doc(db, 'user_roles', user.role_id))
            user.role = roleSnap.exists() ? roleSnap.data() : null
          } catch (err) {
            user.role = null
          }
        } else {
          user.role = null
        }
        return user
      })
    )

    recentUsers.value = usersWithRoles

  } catch (error) {
    console.error('Error fetching admin data:', error)
  }
}

function exportData() {
  console.log('Export data functionality to be implemented')
}

onMounted(() => {
  fetchAdminData()
  setInterval(() => {
    currentTime.value = new Date().toLocaleString()
  }, 60000)
})
</script>