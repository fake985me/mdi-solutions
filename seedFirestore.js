import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccount from './serviceAccountKey.json' // download dari Firebase Console

initializeApp({
  credential: cert(serviceAccount),
})

const db = getFirestore()

const seed = async () => {
  const categoryRef = await db.collection('categories').add({
    name: 'Electronics',
    is_active: true,
  })

  const categoryId = categoryRef.id

  const subcategoryRef = await db.collection('subcategories').add({
    name: 'Smartphones',
    category_id: categoryId,
    is_active: true,
  })

  const subcategoryId = subcategoryRef.id

  const productRef = await db.collection('products').add({
    name: 'Galaxy S24 Ultra',
    slug: 'galaxy-s24-ultra',
    is_active: true,
    category_id: categoryId,
    subcategory_id: subcategoryId,
    description: 'Flagship phone with high-end features',
    thumbnail_url: 'https://example.com/image.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  })

  const productId = productRef.id

  await db
    .collection('products')
    .doc(productId)
    .collection('details')
    .add({
      title: '256GB / Black',
      features: ['5G', 'Waterproof', 'Triple Camera'],
      specifications: {
        Storage: '256GB',
        Color: 'Black',
        RAM: '12GB',
        Battery: '5000mAh',
      },
    })

  await db.collection('inventory_status').add({
    product_id: productId,
    stock_status: 'in_stock',
    stock_qty: 5,
  })

  await db.collection('users').doc('adminUserId123').set({
    email: 'admin@email.com',
    role: 'superadmin',
  })

  console.log('✅ Data seeded')
}

seed()
