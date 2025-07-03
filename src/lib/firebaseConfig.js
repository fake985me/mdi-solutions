// src/firebaseConfig.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCpmQttP_xy3Btkr10DJ6riBbUQ3VFPjus',
  authDomain: 'moimstone-123.firebaseapp.com',
  projectId: 'moimstone-123',
  storageBucket: 'moimstone-123.firebasestorage.app',
  messagingSenderId: '380268904564',
  appId: '1:380268904564:web:23850f23d684e30e881121',
  measurementId: 'G-P1CBV7MZ4R',
}

const firebaseApp = initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { firebaseApp }

export const firebase = {
  from(collectionName) {
    const colRef = collection(db, collectionName)

    return {
      select(_fields = '*', options = {}) {
        if (options.count === 'exact' && options.head === true) {
          return getCountFromServer(colRef).then((snap) => ({
            count: snap.data().count,
          }))
        }

        return getDocs(colRef).then((snapshot) => ({
          data: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        }))
      },

      eq(field, value) {
        const q = query(colRef, where(field, '==', value))
        return {
          select(_fields = '*', options = {}) {
            if (options.count === 'exact' && options.head === true) {
              return getCountFromServer(q).then((snap) => ({
                count: snap.data().count,
              }))
            }

            return getDocs(q).then((snapshot) => ({
              data: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
            }))
          },
        }
      },

      order(field, { ascending = true }) {
        const q = query(colRef, orderBy(field, ascending ? 'asc' : 'desc'), limit(5))
        return {
          select(_fields = '*') {
            return getDocs(q).then((snapshot) => ({
              data: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
            }))
          },
        }
      },
    }
  },
}

export { app, db, auth }
