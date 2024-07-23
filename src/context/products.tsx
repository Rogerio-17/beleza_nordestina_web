'use client'
import { ProductProps } from '@/app/home'
import { db } from '@/connection/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { createContext, useCallback, useContext } from 'react'

interface ProductContextType {
    products: ProductProps[]
}

const ProductsContext = createContext<ProductContextType>({} as ProductContextType)

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
    const products: ProductProps[] = []

    useCallback(async () => {
        const productRef = collection(db, 'products')
        await getDocs(productRef)
            .then((product) => {
                console.log(product)
                product.forEach((prod) => {
                    products.push({
                        brand: prod.data().brand,
                        title: prod.data().title,
                        category: prod.data().category,
                        description: prod.data().description,
                        id: prod.data().id,
                        cod_product: prod.data().cod_product,
                        amount: prod.data().amount,
                        images: prod.data().images,
                    })
                })
            })
            .catch(() => {
                alert('Erro ao buscar dados!')
            })
    }, [])

    /*-------------------------------------------------------------------------------------*/

    return (
        <ProductsContext.Provider
            value={{
                products,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
