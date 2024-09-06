'use client'
import { Flex, FlexProps, Image, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'
import NextLink from 'next/link'
import { useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'

interface CardProductProps extends FlexProps {
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
            flexDirection={{ base: 'row', lg: 'column' }}
            w={{ base: '100%', lg: '17rem' }}
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            borderRadius="10px"
            overflow="hidden"
            h={{ base: '12rem', lg: '27rem' }}
            p="6px"
            alignSelf="flex-start"
            bg="#fff"
            mb={{ base: '0px', lg: '1rem' }}
            position="relative"
        >
            <Flex
                as={NextLink}
                href={`/details/${data?.id}`}
                w={{ base: '160px', lg: '100%' }}
                cursor="pointer"
            >
                <Image
                    src={!!data?.images && data.images[0]}
                    h={{ base: '120px', lg: '250px' }}
                    w={{ base: '120px', lg: '100%' }}
                    borderRadius="10px"
                />
            </Flex>

            <Flex flexDirection="column" w={{ base: '70%', lg: 'unset' }}>
                <Flex
                    flexDirection="column"
                    mt="0.4rem"
                    gap="0.2rem"
                    as={NextLink}
                    href={`/details/${data?.id}`}
                    cursor="pointer"
                    h={{ base: '80px', lg: '75px' }}
                >
                    <Text
                        textAlign={{ base: 'left', lg: 'center' }}
                        fontSize="1rem"
                        lineHeight="16px"
                        fontWeight="700"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2, // número de linhas
                        }}
                    >
                        {data?.title}
                    </Text>

                    <Text
                        textAlign="left"
                        fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                        color="#818181"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2, // número de linhas
                        }}
                    >
                        {data.description}
                    </Text>
                </Flex>

                <Text
                    textAlign={{ base: 'left', lg: 'center' }}
                    fontSize="1.5rem"
                    fontWeight="bold"
                    color="green"
                    display="block"
                >
                    {FormatPrice(data?.amount ? data.amount : 0)}
                </Text>
            </Flex>

            <Flex gap="8px" w="95%" alignItems="flex-end" position="absolute" bottom="14px">
                <CountComponent handleQuantity={handleQuantity} sizeComponent="md" />
                <ButtonComponent onClick={() => handleSaveInLocalStorage({ ...data, quantity })}>
                    Adicionar
                </ButtonComponent>
            </Flex>
        </Flex>
    )
}
