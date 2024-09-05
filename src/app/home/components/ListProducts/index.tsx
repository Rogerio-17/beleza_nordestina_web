import { CardProduct } from '@/components/CardProduct'
import { ProductProps } from '@/hooks/useProducts'
import { Flex, Text } from '@chakra-ui/react'

interface ListProductsProps {
    products: ProductProps[]
}

export function ListProducts({ products }: ListProductsProps) {
    return (
        <Flex gap="0.8rem" flexWrap="wrap" justifyContent="center">
            {products.length === 0 ? (
                <Text fontSize="0.8rem" color="#818181">
                    Nenhum produto encontrado!
                </Text>
            ) : (
                products.map((item) => <CardProduct key={item.id} data={item} />)
            )}
        </Flex>
    )
}
