'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/global'
import { ProductsProvider } from '@/context'
import { ProductsApiProvider } from '@/hooks/useProducts'
import { CommentsProvider } from '@/hooks/useComments'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <ProductsApiProvider>
                <CommentsProvider>
                    <ProductsProvider>{children}</ProductsProvider>
                </CommentsProvider>
            </ProductsApiProvider>
            <ToastContainer />
        </ChakraProvider>
    )
}
