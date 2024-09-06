'use client'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { ButtonComponent } from '@/components/ButtonComponent'
import { PaymentMethods } from '@/components/PaymentMethods'
import { useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'

interface ListDetailsProps {
    productDetail: ProductProps
}

export function ListDetails({ productDetail }: ListDetailsProps) {
    const { handleSaveInLocalStorage } = useProductsContext()
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    const addProduct = {
        ...productDetail,
        quantity,
    }

    return (
        <Flex
            flexDirection="column"
            w={{ base: '100%', lg: '50%' }}
            h={{ base: '26rem', lg: 'unset' }}
            position="relative"
        >
            <Flex as="header" flexDirection="column">
                <Text fontSize="1rem" color="gray.500">
                    {productDetail.brand}
                </Text>
                <Text
                    fontSize={{ base: '1.5rem', lg: '2rem' }}
                    fontWeight="600"
                    lineHeight="normal"
                    mb={{ base: '0px', lg: '0.3rem' }}
                >
                    {productDetail.brand} - {productDetail.title}
                </Text>

                <Text fontSize={{ base: '0.875rem', lg: '1rem' }} color="gray.600" mb="1rem">
                    {productDetail.description}
                </Text>
                <Text fontSize="0.875rem">Cód: ({productDetail.cod_product})</Text>
            </Flex>
            <Divider />
            <Flex mt="0.5rem" flexDirection="column">
                <Text
                    fontSize={{ base: '2rem', lg: '2.5rem' }}
                    fontWeight="bold"
                    color="green"
                    mb="0.5rem"
                >
                    {FormatPrice(productDetail.amount)}
                </Text>
                <PaymentMethods />
            </Flex>

            <Flex
                mt="1.5rem"
                gap="8px"
                alignItems="flex-end"
                position="absolute"
                bottom="0px"
                w="100%"
            >
                <CountComponent handleQuantity={handleQuantity} sizeComponent="md" />
                <ButtonComponent onClick={() => handleSaveInLocalStorage(addProduct)}>
                    Adicionar
                </ButtonComponent>
            </Flex>
        </Flex>
    )
}
