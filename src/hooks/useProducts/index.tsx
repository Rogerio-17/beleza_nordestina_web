'use client'
import { ProductProps } from '@/app/home'
import { db } from '@/connection/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useCallback, useState } from 'react'

export function useProducts() {
    const [products, setProducts] = useState<ProductProps[]>([])

    const listProducts = async () => {
        const productRef = collection(db, 'products')
        await getDocs(productRef)
            .then((product) => {
                console.log(product)
                product.forEach((prod) => {
                    const test = {
                        brand: prod.data().brand,
                        title: prod.data().title,
                        category: prod.data().category,
                        description: prod.data().description,
                        id: prod.data().id,
                        cod_product: prod.data().cod_product,
                        amount: prod.data().amount,
                        images: prod.data().images,
                    }
                    setProducts([test])
                })
            })
            .catch(() => {
                alert('Erro ao buscar dados!')
            })
    }

    return {
        products,
        listProducts,
    }
}