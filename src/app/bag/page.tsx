'use client'
import { Center } from '@/components/Center'
import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { CardForBag } from './components/CardForBag'
import { ButtonComponent } from '@/components/ButtonComponent'
import { FormatPrice } from '@/utils/FormatPrice'
import { InformationIcon } from '@/Icons/InformationIcon'
import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { useProductsContext } from '@/context'
import { ProductProps, useProducts } from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import { generateMessageRequest } from '@/utils/generateMsg'
import Link from 'next/link'

interface ArrayProductsProps {
    data: ProductProps
    quantity: number
}

export default function Bag() {
    const { arrayProduct } = useProductsContext()
    const [totalItens, setTotalItens] = useState<number>(0)
    const [totalAmount, setTotalAmount] = useState<number>(0)
    const route = useRouter()

    useEffect(() => {
        setTotalItens(arrayProduct.reduce((total, produto) => total + produto.quantity!, 0))
        setTotalAmount(
            arrayProduct.reduce((total, produto) => total + produto.amount * produto.quantity!, 0)
        )
    }, [arrayProduct])

    const messageWhatsapp = generateMessageRequest(arrayProduct)
    const numberWhatsapp = '5584988103345'
    const url = `https://wa.me/${numberWhatsapp}?text=${messageWhatsapp}`

    return (
        <>
            <Header />
            <Center flexDirection="column" mt={{ base: '0.5rem', lg: '1rem' }}>
                <Text
                    fontSize={{ base: '1.5rem', lg: '2rem' }}
                    fontWeight="600"
                    display="flex"
                    flexDirection={{ base: 'column', lg: 'row' }}
                    gap={{ base: 'unset', lg: '5px' }}
                >
                    Sacola de compras{' '}
                    <Text
                        as="span"
                        fontSize="0.875rem"
                        color="gray.600"
                        alignSelf="flex-end"
                        pb="8px"
                    >
                        (Clique em <strong>&quot;Finalizar compra&quot;</strong> para efetuar seu
                        pedido pelo whatsapp).
                    </Text>
                </Text>{' '}
                {arrayProduct.length !== 0 ? (
                    arrayProduct.map((item) => (
                        <CardForBag product={item} quantity={item.quantity!} key={item.id} />
                    ))
                ) : (
                    <Text
                        h="40vh"
                        w="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        Nenhum item na sacola.
                    </Text>
                )}
                <Flex
                    mt="1rem"
                    mb="1rem"
                    flexDirection="column"
                    justifyContent="right"
                    gap="0.5rem"
                >
                    <Flex alignItems="center" gap="0.8rem">
                        <InformationIcon
                            w={{ base: '25px', lg: '20px' }}
                            h={{ base: '25px', lg: '20px' }}
                        />
                        <Text
                            as="span"
                            fontSize={{ base: '0.875rem', lg: '1rem' }}
                            color="gray.600"
                            gap="0.3rem"
                            lineHeight="normal"
                        >
                            Ao clicar em <strong>&quot;Finalizar compra&quot;</strong> você será
                            redirecionado para nosso whatsapp com todos os dados dos produtos que
                            estão no seu carrinho.
                        </Text>
                    </Flex>
                    <Divider />
                    <Flex flexDirection="column" alignSelf="end" w={{ base: '100%', lg: '22rem' }}>
                        <Text>
                            Itens:{' '}
                            <Text as="strong" fontSize="1rem" lineHeight="1rem">
                                {totalItens}
                            </Text>{' '}
                        </Text>
                        <Text>
                            Total:{' '}
                            <Text as="strong" fontSize="1.25rem" lineHeight="1rem">
                                {FormatPrice(totalAmount)}
                            </Text>
                        </Text>
                    </Flex>
                    <Flex
                        alignSelf={{ base: 'unset', lg: 'end' }}
                        w={{ base: '100%', lg: '22rem' }}
                        justifyContent={{ base: 'center', lg: 'unset' }}
                        gap="0.5rem"
                    >
                        <ButtonComponent as={Link} href={url} target="_blank" w="10rem">
                            Finalizar compra
                        </ButtonComponent>
                        <Button bg="gray.300" color="#494949" onClick={() => route.push('/')}>
                            Continuar comprando
                        </Button>
                    </Flex>
                </Flex>
            </Center>
        </>
    )
}
