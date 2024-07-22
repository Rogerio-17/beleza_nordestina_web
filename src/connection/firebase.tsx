import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCE2EPEjyVdKUrOJzeVqvIm8z5zljsASpw',
    authDomain: 'belezanordestina-f32ab.firebaseapp.com',
    projectId: 'belezanordestina-f32ab',
    storageBucket: 'belezanordestina-f32ab.appspot.com',
    messagingSenderId: '102916305663',
    appId: '1:102916305663:web:42a25095d2b942fb5f12ca',
    measurementId: 'G-EHZCFSV23S',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export { db }
