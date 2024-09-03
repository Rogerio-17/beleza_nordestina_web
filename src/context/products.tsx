'use client'
import { ProductProps } from '@/hooks/useProducts'
import { createContext, useContext, useEffect, useState } from 'react'

interface ProductContextType {
    arrayProduct: ProductProps[]
    handleSaveInLocalStorage: (data: ProductProps) => void
    handleDeleteProduct: (id: string) => void
}

const ProductsContext = createContext<ProductContextType>({} as ProductContextType)

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
    const [arrayProduct, setArrayProduct] = useState<ProductProps[]>([])

    useEffect(() => {
        const arrayString = localStorage.getItem('productSelected')
        const arrayProduct = arrayString ? JSON.parse(arrayString) : []
        setArrayProduct(arrayProduct)
    }, [])
    /*-------------------------------------------------------------------------------------*/

    function handleSaveInLocalStorage(data: ProductProps) {
        // Recuperar o array existente do localStorage, ou inicializar um array vazio se não existir
        const arrayString = localStorage.getItem('productSelected')
        let arrayDeObjetos = arrayString ? JSON.parse(arrayString) : []

        // Verificar se o produto com o mesmo id já existe no array
        const index = arrayDeObjetos.findIndex((obj: any) => obj.id === data.id)

        if (index !== -1) {
            // Se o produto já existe, atualizar a quantidade
            arrayDeObjetos[index].quantity = data.quantity
        } else {
            // Se o produto não existe, adicionar ao array
            arrayDeObjetos.push(data)
        }

        // Converter o array atualizado de volta para uma string JSON
        const arrayAtualizadoString = JSON.stringify(arrayDeObjetos)

        // Salvar o array atualizado no localStorage
        setArrayProduct(arrayDeObjetos)
        localStorage.setItem('productSelected', arrayAtualizadoString)

        //alert('Produto adicionado à sacola.')
    }

    function handleDeleteProduct(id: string) {
        const newArray = arrayProduct.filter((product) => product.id !== id)
        const arrayAtualizadoString = JSON.stringify(newArray)
        setArrayProduct(newArray)
        localStorage.setItem('productSelected', arrayAtualizadoString)
    }

    return (
        <ProductsContext.Provider
            value={{
                arrayProduct,
                handleSaveInLocalStorage,
                handleDeleteProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
