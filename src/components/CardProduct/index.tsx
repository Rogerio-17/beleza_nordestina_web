'use client'
import { Flex, Image, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'
import NextLink from 'next/link'
import { useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'

interface CardProductProps {
    data: ProductProps
}

export function CardProduct({ data }: CardProductProps) {
    const { handleSaveInLocalStorage } = useProductsContext()
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    return (
        <Flex
            flexDirection="column"
            w="17rem"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            borderRadius="10px"
            overflow="hidden"
            h="27rem"
            p="6px"
            alignSelf="flex-start"
            bg="#fff"
            mb="1rem"
            position="relative"
        >
            <Flex as={NextLink} href={`/details/${data?.id}`} w="100%" cursor="pointer">
                <Image
                    src={!!data?.images && data.images[0]}
                    h="250px"
                    w="100%"
                    borderRadius="10px"
                />
            </Flex>

            <Flex
                flexDirection="column"
                mt="1rem"
                gap="1rem"
                as={NextLink}
                href={`/details/${data?.id}`}
                cursor="pointer"
            >
                <Text
                    textAlign="center"
                    fontSize="1.1rem"
                    lineHeight="16px"
                    fontWeight="500"
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2, // número de linhas
                    }}
                >
                    {data?.title}
                </Text>

                <Text textAlign="center" fontSize="2rem" fontWeight="bold" color="green">
                    {FormatPrice(data?.amount ? data.amount : 0)}
                </Text>
            </Flex>

            <Flex gap="8px" w="95%" alignItems="flex-end" position="absolute" bottom="14px">
                <CountComponent handleQuantity={handleQuantity} />
                <ButtonComponent onClick={() => handleSaveInLocalStorage({ ...data, quantity })}>
                    Adicionar
                </ButtonComponent>
            </Flex>
        </Flex>
    )
}
