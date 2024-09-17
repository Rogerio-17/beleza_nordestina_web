'use client'
import { api } from '@/services/api'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export interface ProductProps {
    brand: string
    title: string
    category: string
    available: number
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
    showItem: boolean
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
    showItem: boolean
    available: number
}

interface DeleteProductDataProps {
    id: string
}
interface UpdateProductDataProps {
    id: string
    product: CreateDataProductProps
}

interface ProductsContextType {
    products: ProductProps[]
    productsFiltered: ProductProps[] | null
    createProduct: ({ product }: CreateProductProps) => void
    deleteProduct: ({ id }: DeleteProductDataProps) => void
    searchProduct: (search: string) => void
    updateProduct: ({ id, product }: UpdateProductDataProps) => void
}

interface CreateProductProps {
    product: CreateDataProductProps
}

const ProductsContext = createContext<ProductsContextType>({} as ProductsContextType)

export const ProductsApiProvider = ({ children }: { children: React.ReactNode }) => {
    const [update, setUpdate] = useState(true)
    const [products, setProducts] = useState<ProductProps[]>([])
    const [productsFiltered, setProductsFiltered] = useState<ProductProps[] | null>(null)

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
            toast.success('Produto cadastrado com sucesso')
        } catch (err) {
            toast.error('Erro ao cadastrar produto')
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    const deleteProduct = useCallback(async ({ id }: DeleteProductDataProps): Promise<void> => {
        try {
            await api.delete(`/products/${id}`)
            setUpdate(true)
            toast.success('Produto deletado com sucesso')
        } catch (err) {
            toast.error('Erro ao deletar produto')
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    const updateProduct = useCallback(
        async ({ id, product }: UpdateProductDataProps): Promise<void> => {
            try {
                await api.patch(`/products/${id}`, {
                    product,
                })
                setUpdate(true)
                toast.success('Produto atualizado com sucesso')
            } catch (err) {
                toast.error('Erro ao atualizar produto')
                throw new Error(`Error ao atualizar produto`)
            }
        },
        []
    )

    const searchProduct = (search: string) => {
        if (!!search) {
            const filtered = products.filter(
                (item) =>
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase()) ||
                    item.brand.toLowerCase().includes(search.toLowerCase())
            )
            setProductsFiltered(filtered)
        } else {
            setProductsFiltered(null)
        }
    }

    return (
        <ProductsContext.Provider
            value={{
                products,
                productsFiltered,
                createProduct,
                deleteProduct,
                searchProduct,
                updateProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)
