import { CardProduct } from '@/components/CardProduct'
import { Flex, Text } from '@chakra-ui/react'

export function RelatedProducts() {
    const itemCount = 4
    const fakeArray = Array.from({ length: itemCount }, (_, index) => index)
    return (
        <Flex flexDirection="column" flexWrap="wrap">
            <Text fontSize="2rem" textAlign="center" mb="1rem" fontWeight="bold">
                Aproveite e compre também
            </Text>
            <Flex justifyContent="space-around">
                {fakeArray.map((item) => (
                    <CardProduct key={item} />
                ))}
            </Flex>
        </Flex>
    )
}
