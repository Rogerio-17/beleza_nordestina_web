'use client'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { BinIcon } from '@/Icons/BinIcon'
import { useEffect, useState } from 'react'
import { ProductProps } from '@/app/home'
import { useProductsContext } from '@/context'
import { EditIcon } from '@/Icons/EditIcon'

export function CardProductEditable() {
    return (
        <Flex
            bg="#fff"
            w="100%"
            borderRadius="8px"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            mt="1rem"
            pr="2rem"
            justify="space-between"
            py="1rem"
        >
            <Flex gap="1.5rem" alignItems="center">
                <Flex flexDirection="column" alignItems="center">
                    <Image
                        src={'https://i.imgur.com/ONH76FA.jpg'}
                        w="150px"
                        h="150px"
                        p="0.5rem "
                    />
                    <Text>
                        qtd de imgs: <strong>3</strong>
                    </Text>
                </Flex>
                <Flex gap="0.5rem" flexDirection="column" w="25rem">
                    <Text fontSize="1.25rem" lineHeight="1.25rem">
                        {'Safira'} - {'Rìmel Máscara de Cílios Volume Intenso'}
                    </Text>
                    <Text fontSize="0.875rem">Cód: ({'T321'})</Text>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus
                        ipsa placeat alias voluptatibus tempora doloribus necessitatibus vel sunt
                        provident impedit labore, ut dolores nemo totam maiores odio architecto
                        recusandae.
                    </Text>
                    <Flex flexDirection="column" gap="0.5rem">
                        <Text fontWeight="bold" fontSize="1rem">
                            Valor do produto
                        </Text>
                        <Text fontSize="1.5rem" color="green" fontWeight="bold" lineHeight="1.5rem">
                            {FormatPrice(8.5)}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex alignItems="center" gap="1rem">
                <Button
                    bg="transparent"
                    _hover={{ opacity: 0.85 }}
                    _active="none"
                    onClick={() => {}}
                >
                    <BinIcon w="26px" h="26px" />
                </Button>
                <Button
                    bg="transparent"
                    _hover={{ opacity: 0.85 }}
                    _active="none"
                    onClick={() => {}}
                >
                    <EditIcon w="26px" h="26px" />
                </Button>
            </Flex>
        </Flex>
    )
}
