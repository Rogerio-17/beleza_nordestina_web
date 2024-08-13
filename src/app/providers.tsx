'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/global'
import { ProductsProvider } from '@/context'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider theme={theme}>
            <ProductsProvider>{children}</ProductsProvider>
        </ChakraProvider>
    )
}
