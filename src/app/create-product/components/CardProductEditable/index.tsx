import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { BinIcon } from '@/Icons/BinIcon'
import { ProductProps, useProducts } from '@/hooks/useProducts'

interface CardProductEditableProps {
    product: ProductProps
}

export function CardProductEditable({ product }: CardProductEditableProps) {
    const { deleteProduct } = useProducts()

    function handleDeleteProduct() {
        deleteProduct({ id: product.id })
    }

    return (
        <Flex
            bg="#fff"
            w="100%"
            borderRadius="8px"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            mt="1rem"
            pr="2rem"
            justify="space-between"
        >
            <Flex gap="1.5rem" alignItems="center">
                <Flex flexDirection="column" alignItems="center">
                    <Image
                        src={product.images[0]}
                        w="315px"
                        h="315px"
                        p="0.5rem "
                        borderRadius="8px"
                    />
                </Flex>
                <Flex gap="0.5rem" flexDirection="column" w="25rem">
                    <Text fontSize="1.25rem" lineHeight="1.25rem">
                        {product.brand} - {product.title}
                    </Text>
                    <Text fontSize="0.875rem">Cód: ({product.cod_product})</Text>
                    <Text>{product.description}</Text>
                    <Flex flexDirection="column" gap="0.5rem">
                        <Text fontWeight="bold" fontSize="1rem">
                            Valor do produto
                        </Text>
                        <Text fontSize="1.5rem" color="green" fontWeight="bold" lineHeight="1.5rem">
                            {FormatPrice(product.amount)}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems="center" gap="1rem">
                <Button
                    bg="transparent"
                    _hover={{ opacity: 0.85 }}
                    _active="none"
                    onClick={() => handleDeleteProduct()}
                >
                    <BinIcon w="26px" h="26px" />
                </Button>
                {/* <Button
                    bg="transparent"
                    _hover={{ opacity: 0.85 }}
                    _active="none"
                    onClick={() => {}}
                >
                    <EditIcon w="26px" h="26px" />
                </Button> */}
            </Flex>
        </Flex>
    )
}
