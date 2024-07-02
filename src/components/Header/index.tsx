import { Box, Flex, Text } from '@chakra-ui/react'
import { Center } from '../Center'
import { Search } from '../Search'
import { ChatIcon } from '../../Icons/ChatIcon'
import { UserCircleIcon } from '@/Icons/UserCicle'
import { ShoppingBagIcon } from '@/Icons/ShoppingBag'

export function Header() {
    return (
        <Flex as="header" borderBottom="1px solid #c8c6c6">
            <Center p="1.3rem" justifyContent="space-between">
                <Flex alignItems="center" gap="1rem">
                    <Text fontSize="1.5rem">Logo</Text>
                    <Search w="30rem" />
                </Flex>

                <Flex gap="0.5rem">
                    <Flex w="9rem" fontSize="14px" lineHeight="16px" alignItems="center" gap="5px">
                        <ChatIcon w="30px" h="30px" color="green" />{' '}
                        <Text>
                            Central de <strong>atendimento</strong>
                        </Text>
                    </Flex>
                    <Flex w="9rem" fontSize="14px" lineHeight="16px" alignItems="center" gap="5px">
                        <UserCircleIcon w="30px" h="30px" color="green" />{' '}
                        <Text>
                            Seja bem-vindo <strong>Visitante</strong>
                        </Text>
                    </Flex>
                    <Flex>
                        <ShoppingBagIcon w="35px" h="35px" color="green" />{' '}
                        <Box
                            lineHeight="18px"
                            textAlign="center"
                            p="0px 5px"
                            h="20px"
                            bg="green"
                            borderRadius="50%"
                            color="white"
                        >
                            0
                        </Box>
                    </Flex>
                </Flex>
            </Center>
        </Flex>
    )
}
