import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccount from './serviceAccountKey.json' // download dari Firebase Console

initializeApp({ credential: cert(serviceAccount) })

const db = getFirestore()
export { db }
