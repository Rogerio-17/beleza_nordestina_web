'use client'
import { Flex, Link, Text } from '@chakra-ui/react'
import { Center } from '../Center'

export function Footer() {
    const linkWhtasApp =
        'https://wa.me/5584981301382?text=Ol%C3%A1%20Rog%C3%A9rio%2C%20encontrei%20seu%20portf%C3%B3lio%20e%20estou%20muito%20interessado%20em%20falar%20com%20voc%C3%AA.'
    return (
        <Flex mt="2rem" w="100vw" h="120px" bg="green" color="white" position="relative" zIndex="1">
            <Center margin="auto" flexDirection="column">
                <Flex
                    h="50px"
                    alignItems="flex-end"
                    justifyContent="center"
                    borderTop="2px solid rgb(255, 255, 255)"
                >
                    <Text fontSize="0.8rem">
                        © Direitos Autorais {new Date().getFullYear()}. Feito por{' '}
                        <Link
                            href="https://www.rogeriojose.com.br"
                            textDecoration="underline !important"
                            target="_blank"
                        >
                            Rogério José
                        </Link>
                    </Text>
                </Flex>
            </Center>
        </Flex>
    )
}
