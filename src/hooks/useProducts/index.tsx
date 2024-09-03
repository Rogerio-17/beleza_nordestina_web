'use client'
import { api } from '@/services/api'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export interface ProductProps {
    brand: string
    title: string
    category: string
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
}

interface ProductsContextType {
    products: ProductProps[]
    createProduct: ({ product }: CreateProductProps) => void
}

interface CreateProductProps {
    product: ProductProps
}

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType)

export const ProductsApiProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<ProductProps[]>([])

    const listProducts = useCallback(async (): Promise<void> => {
        try {
            const response = await api.get('/products')
            setProducts(response.data.products)
        } catch (err) {
            throw new Error(`Error ao buscar produtos.`)
        }
    }, [])

    useEffect(() => {
        listProducts()
    }, [])

    const createProduct = useCallback(async ({ product }: CreateProductProps): Promise<void> => {
        try {
            const response = await api.post('/products', {
                product,
            })
        } catch (err) {
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                products,
                createProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)
