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

export interface CreateDataProductProps {
    brand: string
    title: string
    category: string
    description: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
}

interface DeleteProductDataProps {
    id: string
}

interface ProductsContextType {
    products: ProductProps[]
    createProduct: ({ product }: CreateProductProps) => void
    deleteProduct: ({ id }: DeleteProductDataProps) => void
}

interface CreateProductProps {
    product: CreateDataProductProps
}

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType)

export const ProductsApiProvider = ({ children }: { children: React.ReactNode }) => {
    const [update, setUpdate] = useState(true)
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
        if (update) {
            listProducts()
        }
        setUpdate(false)
    }, [update])

    const createProduct = useCallback(async ({ product }: CreateProductProps): Promise<void> => {
        try {
            const response = await api.post('/products', {
                product,
            })
            setUpdate(true)
        } catch (err) {
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    const deleteProduct = useCallback(async ({ id }: DeleteProductDataProps): Promise<void> => {
        try {
            await api.delete(`/products/${id}`)
            setUpdate(true)
            alert('item deletado com sucesso')
        } catch (err) {
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                products,
                createProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)
