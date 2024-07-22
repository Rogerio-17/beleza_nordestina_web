'use client'
import { db } from '@/connection/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'

export function useProducts() {
    const [products, setProducts] = useState([])

    const listProducts = async () => {
        const productRef = collection(db, 'products')
        await getDocs(productRef).then((product) => {
            product.forEach((prod) => {
                console.log(prod.data())
            })
        })
    }

    return {
        products,
        listProducts,
    }
}
