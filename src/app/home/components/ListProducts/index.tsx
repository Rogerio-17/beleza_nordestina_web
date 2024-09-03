'use client'
import { CardProduct } from '@/components/CardProduct'
import { useProducts } from '@/hooks/useProducts'
import { Flex } from '@chakra-ui/react'

export function ListProducts() {
    const { products } = useProducts()

    return (
        <Flex gap="0.8rem" flexWrap="wrap" justifyContent="center">
            {products.map((item) => (
                <CardProduct key={item.id} data={item} />
            ))}
        </Flex>
    )
}
