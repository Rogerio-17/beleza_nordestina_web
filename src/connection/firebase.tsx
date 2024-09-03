import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: 'belezanordestina-f32ab.firebaseapp.com',
    projectId: 'belezanordestina-f32ab',
    storageBucket: 'belezanordestina-f32ab.appspot.com',
    messagingSenderId: '102916305663',
    appId: process.env.APP_ID,
    measurementId: 'G-EHZCFSV23S',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { db }
