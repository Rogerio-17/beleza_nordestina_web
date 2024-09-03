import { CardProduct } from '@/components/CardProduct'
import { ProductProps } from '@/hooks/useProducts'
import { Flex, Spinner, Text } from '@chakra-ui/react'

interface RelatedProductsProps {
    products: ProductProps[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    if (!products) {
        return <Spinner />
    }

    return (
        <Flex flexDirection="column" flexWrap="wrap">
            <Text fontSize="2rem" textAlign="center" mb="1rem" fontWeight="bold">
                Aproveite e compre também
            </Text>
            <Flex justifyContent="space-around">
                {products.map((product) => (
                    <CardProduct data={product} key={product.id} />
                ))}
            </Flex>
        </Flex>
    )
}
