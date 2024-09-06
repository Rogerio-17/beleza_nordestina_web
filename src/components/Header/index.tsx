'use client'
import {
    Box,
    Button,
    Divider,
    Flex,
    Hide,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Show,
    Text,
} from '@chakra-ui/react'
import { Center } from '../Center'
import { Search } from '../Search'
import { ChatIcon } from '../../Icons/ChatIcon'
import { UserCircleIcon } from '@/Icons/UserCicle'
import { ShoppingBagIcon } from '@/Icons/ShoppingBag'
import logo from '@/assets/logo/logo.png'
import { ChevronDownIcon } from '@/Icons/ChevronDownIcon'
import { PhoneIcon } from '@/Icons/PhoneIcon'
import { WhatsAppIcon } from '@/Icons/WhatsAppIcon'
import { MessageIcon } from '@/Icons/MessageIcon'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'
import { CallMenu } from './components/callMenu'

interface ArrayProductsProps {
    data: ProductProps
    quantity: number
}

export function Header() {
    const [totalItens, setTotalItens] = useState<number>(0)
    const { arrayProduct } = useProductsContext()

    useEffect(() => {
        setTotalItens(arrayProduct.reduce((total, produto) => total + produto.quantity!, 0))
    }, [arrayProduct])

    return (
        <Flex as="header" borderBottom="1px solid #c8c6c6">
            <Center
                justifyContent={{ base: 'unset', lg: 'space-between' }}
                alignItems="center"
                flexDirection={{ base: 'column', lg: 'row' }}
            >
                <Flex
                    alignItems="center"
                    gap="1rem"
                    w="100%"
                    justifyContent={{ base: 'space-between', lg: 'unset' }}
                >
                    <Link as={NextLink} href="/">
                        <Image
                            src={logo.src}
                            w={{ base: '100px', lg: '120px' }}
                            h={{ base: '100px', lg: '120px' }}
                        />
                    </Link>

                    <Show above="lg">
                        <Search w={{ base: '15rem', lg: '30rem' }} />
                    </Show>

                    <Hide above="lg">
                        <Flex gap="8px">
                            <CallMenu />
                            <Flex
                                fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                                lineHeight="16px"
                                alignItems="center"
                                gap="3px"
                            >
                                <UserCircleIcon w="30px" h="30px" color="green" />{' '}
                                <Text>
                                    Seja bem-vindo(a) <strong>Visitante</strong>
                                </Text>
                            </Flex>
                        </Flex>
                    </Hide>
                </Flex>

                <Flex gap="1rem">
                    <Show above="lg">
                        <CallMenu />
                        <Flex
                            w="9.3rem"
                            fontSize="14px"
                            lineHeight="16px"
                            alignItems="center"
                            gap="5px"
                        >
                            <UserCircleIcon w="30px" h="30px" color="green" />{' '}
                            <Text>
                                Seja bem-vindo(a) <strong>Visitante</strong>
                            </Text>
                        </Flex>
                    </Show>

                    <Hide above="lg">
                        <Search w={{ base: '75vw', lg: '30rem' }} mb="1rem" />
                    </Hide>
                    <Link display="flex" as={NextLink} href="/bag">
                        <ShoppingBagIcon w="35px" h="35px" color="green" />{' '}
                        <Box
                            lineHeight="18px"
                            w="22px"
                            h="22px"
                            bg="green"
                            borderRadius="90px"
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            {totalItens}
                        </Box>
                    </Link>
                </Flex>
            </Center>
        </Flex>
    )
}
