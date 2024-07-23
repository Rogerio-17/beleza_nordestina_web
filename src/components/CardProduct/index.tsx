'use client'
import { Flex, Image, Text } from '@chakra-ui/react'
import image from '@/assets/rimel.jpg'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'
import NextLink from 'next/link'
import { ProductProps } from '@/app/home'
import { useState } from 'react'

interface CardProductProps {
    data: ProductProps
}

export function CardProduct({ data }: CardProductProps) {
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    function handleSaveInLocalStorage() {
        const product = {
            data,
            quantity,
        }

        // Recuperar o array existente do localStorage, ou inicializar um array vazio se não existir
        const arrayString = localStorage.getItem('productSelected')
        let arrayDeObjetos = arrayString ? JSON.parse(arrayString) : []

        // Adicionar o novo objeto ao array
        arrayDeObjetos.push(product)

        // Converter o array atualizado de volta para uma string JSON
        const arrayAtualizadoString = JSON.stringify(arrayDeObjetos)

        // Salvar o array atualizado no localStorage
        localStorage.setItem('productSelected', arrayAtualizadoString)
        alert('Produto adicionado a sacola.')
    }

    return (
        <Flex
            flexDirection="column"
            w="17rem"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            borderRadius="10px"
            overflow="hidden"
            h="27rem"
            p="8px"
            alignSelf="flex-start"
            bg="#fff"
            mb="1rem"
        >
            <Flex as={NextLink} href={`/details/${data?.id}`} w="100%" cursor="pointer">
                <Image src={!!data?.images && data.images[0]} h="250px" w="100%" />
            </Flex>

            <Flex
                flexDirection="column"
                mt="1rem"
                gap="1rem"
                as={NextLink}
                href={`/details/${data?.id}`}
                cursor="pointer"
            >
                <Text textAlign="center" fontSize="1.1rem" lineHeight="16px" fontWeight="500">
                    {data?.title}
                </Text>

                <Text textAlign="center" fontSize="2rem" fontWeight="bold" color="green">
                    {FormatPrice(data?.amount ? data.amount : 0)}
                </Text>
            </Flex>

            <Flex h="12%" gap="8px" alignItems="flex-end">
                <CountComponent handleQuantity={handleQuantity} />
                <ButtonComponent onClick={handleSaveInLocalStorage}>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
