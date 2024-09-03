'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/global'
import { ProductsProvider } from '@/context'
import { ProductsApiProvider } from '@/hooks/useProducts'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <ProductsApiProvider>
                <ProductsProvider>{children}</ProductsProvider>
            </ProductsApiProvider>
        </ChakraProvider>
    )
}
