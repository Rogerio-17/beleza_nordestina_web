'use client'
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
import { ProductProps } from '@/app/home'
import { useProductsContext } from '@/context'

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
            <Center justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" gap="1rem">
                    <Link as={NextLink} href="/">
                        <Image src={logo.src} w="120px" h="120px" />
                    </Link>

                    <Search w="30rem" />
                </Flex>

                <Flex gap="1rem">
                    <Flex alignItems="center" gap="0.5rem">
                        <ChatIcon w="30px" h="30px" color="green" />{' '}
                        <Menu closeOnSelect={false}>
                            <MenuButton
                                textAlign="left"
                                w="7.5rem"
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                                bg="transparent"
                                p="10px 0px"
                                _active="none"
                                _hover="none"
                            >
                                Central de <Text fontWeight="bold">atendimento</Text>
                            </MenuButton>
                            <MenuList>
                                <Text pl="12px" pb="6px" fontSize="1.1rem" fontWeight="bold">
                                    Contatos
                                </Text>
                                <Divider />
                                <Flex mt="6px" flexDirection="column" p="0px 12px" gap="8px">
                                    <Flex alignItems="center" gap="0.5rem">
                                        <PhoneIcon />
                                        <Text>(84) 98810-3345</Text>
                                    </Flex>

                                    <Flex alignItems="center" gap="0.5rem">
                                        <WhatsAppIcon />
                                        <Text>(84) 98810-3345</Text>
                                    </Flex>

                                    <Flex alignItems="center" gap="0.5rem">
                                        <MessageIcon w="18px" h="18px" />
                                        <Text>belezanordestinarn@gmail.com</Text>
                                    </Flex>
                                </Flex>
                            </MenuList>
                        </Menu>
                    </Flex>
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
