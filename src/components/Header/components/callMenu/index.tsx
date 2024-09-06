import { ChatIcon } from '@/Icons/ChatIcon'
import { ChevronDownIcon } from '@/Icons/ChevronDownIcon'
import { MessageIcon } from '@/Icons/MessageIcon'
import { PhoneIcon } from '@/Icons/PhoneIcon'
import { WhatsAppIcon } from '@/Icons/WhatsAppIcon'
import { Button, Divider, Flex, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react'

export function CallMenu() {
    return (
        <Flex alignItems="center" gap="0.5rem">
            <ChatIcon
                w={{ base: '25px', lg: '30px' }}
                h={{ base: '25px', lg: '30px' }}
                color="green"
            />{' '}
            <Menu closeOnSelect={false}>
                <MenuButton
                    textAlign="left"
                    w={{ base: '6rem', lg: '7.5rem' }}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg="transparent"
                    p="10px 0px"
                    _active="none"
                    _hover="none"
                    fontSize={{ base: '0.75rem', lg: '0.875rem' }}
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
    )
}
