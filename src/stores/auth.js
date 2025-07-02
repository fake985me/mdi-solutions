// auth.js
import { defineStore } from 'pinia'
import { auth } from '@/lib/firebaseConfig'
import { signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  actions: {
    setUser(user) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout() {
      signOut(auth).then(() => {
        this.user = null
        localStorage.removeItem('user')
      })
    },
  },
})
