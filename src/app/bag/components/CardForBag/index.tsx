'use client'
import { Button, Flex, Hide, Image, Show, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { BinIcon } from '@/Icons/BinIcon'
import { useEffect, useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'

export function CardForBag({ product, quantity: q }: { product: ProductProps; quantity: number }) {
    const { handleSaveInLocalStorage, handleDeleteProduct } = useProductsContext()
    const [quantity, setQuantity] = useState(q)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    useEffect(() => {
        if (quantity !== q) {
            const newQuantity = {
                ...product,
                quantity: quantity,
            }

            handleSaveInLocalStorage(newQuantity)
        }
    }, [quantity])

    return (
        <Flex
            bg="#fff"
            w="100%"
            borderRadius="8px"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            mt={{ base: '0.5rem', lg: '1rem' }}
            pr="2rem"
            justify="space-between"
            flexDirection={{ base: 'column', lg: 'row' }}
            p="10px "
        >
            <Flex
                gap={{ base: '1rem', lg: '1.5rem' }}
                alignItems={{ base: 'unset', lg: 'center' }}
                w={{ base: '100%', lg: 'unset' }}
            >
                <Image
                    src={product.images[0]}
                    h={{ base: '110px', lg: '150px' }}
                    w={{ base: '150px', lg: '150px' }}
                    borderRadius="10px"
                />
                <Flex gap="0.5rem" flexDirection="column" w="25rem">
                    <Text
                        fontSize={{ base: '1rem', lg: '1.25rem' }}
                        lineHeight="normal"
                        fontWeight="700"
                    >
                        {product.brand} - {product.title}
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
                        {product.description}
                    </Text>
                </Flex>
            </Flex>

            <Flex
                gap={{ base: '0px', lg: '3rem' }}
                alignItems="center"
                justifyContent={{ base: 'space-between', lg: 'unset' }}
            >
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    mt={{ base: '0.5rem', lg: '2.5rem' }}
                    gap={{ base: '2px', lg: '0.5rem' }}
                >
                    <Text fontWeight="bold" fontSize={{ base: '0.875rem', lg: '1rem' }}>
                        Valor unitário
                    </Text>
                    <Text
                        fontSize={{ base: '1rem', lg: '1.5rem' }}
                        color="green"
                        fontWeight="bold"
                        lineHeight="normal"
                    >
                        {FormatPrice(product.amount)}
                    </Text>
                </Flex>
                <Show above="lg">
                    <Flex alignItems="center">
                        <CountComponent
                            available={product.available}
                            sizeComponent="md"
                            handleQuantity={handleQuantity}
                            quantity={quantity}
                            h="3rem"
                        />
                    </Flex>
                </Show>

                <Flex
                    flexDirection="column"
                    alignItems="center"
                    mt={{ base: '0.5rem', lg: '2.5rem' }}
                    gap={{ base: '2px', lg: '0.5rem' }}
                >
                    <Text fontWeight="bold" fontSize={{ base: '0.875rem', lg: '1rem' }}>
                        Valor total
                    </Text>

                    <Text
                        fontSize={{ base: '1rem', lg: '1.5rem' }}
                        color="green"
                        fontWeight="bold"
                        lineHeight="normal"
                    >
                        {FormatPrice(product.amount * quantity)}
                    </Text>
                </Flex>

                <Hide above="lg">
                    <Flex alignItems="center" mt={{ base: '12px', lg: 'unset' }}>
                        <CountComponent
                            available={product.available}
                            sizeComponent="sm"
                            handleQuantity={handleQuantity}
                            quantity={quantity}
                            h="2.5rem"
                        />
                    </Flex>
                </Hide>

                <Flex alignItems="center" mt={{ base: '12px', lg: 'unset' }}>
                    <Button
                        bg="gray.100"
                        _hover={{ opacity: 0.85 }}
                        _active="none"
                        onClick={() => handleDeleteProduct(product.id)}
                    >
                        <BinIcon w="22px" h="22px" />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
