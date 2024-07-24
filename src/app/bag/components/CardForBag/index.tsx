'use client'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import rimel from '@/assets/rimel.jpg'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { BinIcon } from '@/Icons/BinIcon'

export function CardForBag() {
    function handleQuantity(quantity: number) {
        console.log(quantity)
    }

    return (
        <Flex
            bg="#fff"
            w="100%"
            borderRadius="8px"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            mt="1rem"
            pr="2rem"
            justify="space-between"
        >
            <Flex gap="1.5rem" alignItems="center">
                <Image src={rimel.src} w="150px" h="150px" p="0.5rem " />
                <Flex gap="0.5rem" flexDirection="column" w="25rem">
                    <Text fontSize="1.25rem" lineHeight="1.25rem">
                        Safira - Rìmel Máscara de Cílios Volume Intenso
                    </Text>
                    <Text fontSize="0.875rem">Cód: (T321)</Text>
                </Flex>
            </Flex>

            <Flex gap="3rem">
                <Flex flexDirection="column" alignItems="center" mt="2.5rem" gap="0.5rem">
                    <Text fontWeight="bold" fontSize="1rem">
                        Valor unitário
                    </Text>
                    <Text fontSize="1.5rem" color="green" fontWeight="bold" lineHeight="1.5rem">
                        {FormatPrice(10)}
                    </Text>
                </Flex>
                <Flex alignItems="center">
                    <CountComponent handleQuantity={handleQuantity} quantity={2} h="3rem" />
                </Flex>

                <Flex flexDirection="column" alignItems="center" mt="2.5rem" gap="0.5rem">
                    <Text fontWeight="bold" fontSize="1rem">
                        Valor total
                    </Text>
                    <Text fontSize="1.5rem" color="green" fontWeight="bold" lineHeight="1.5rem">
                        {FormatPrice(20)}
                    </Text>
                </Flex>

                <Flex alignItems="center">
                    <Button bg="gray.100" _hover={{ opacity: 0.85 }} _active="none">
                        <BinIcon w="22px" h="22px" />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
