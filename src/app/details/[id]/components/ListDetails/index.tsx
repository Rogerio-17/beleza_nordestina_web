'use client'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { ButtonComponent } from '@/components/ButtonComponent'
import { PaymentMethods } from '@/components/PaymentMethods'
import { ProductProps } from '@/app/home'
import { useState } from 'react'

interface ListDetailsProps {
    productDetail: ProductProps
}

export function ListDetails({ productDetail }: ListDetailsProps) {
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    function handleSaveInLocalStorage() {
        const product = {
            data: productDetail,
            quantity,
        }

        // Recuperar o array existente do localStorage, ou inicializar um array vazio se não existir
        const arrayString = localStorage.getItem('productSelected')
        let arrayDeObjetos = arrayString ? JSON.parse(arrayString) : []

        // Verificar se o produto com o mesmo id já existe no array
        const index = arrayDeObjetos.findIndex(
            (obj: any) => obj.productDetail.id === productDetail.id
        )

        if (index !== -1) {
            // Se o produto já existe, atualizar a quantidade
            arrayDeObjetos[index].quantity += quantity
        } else {
            // Se o produto não existe, adicionar ao array
            arrayDeObjetos.push(product)
        }

        // Converter o array atualizado de volta para uma string JSON
        const arrayAtualizadoString = JSON.stringify(arrayDeObjetos)

        // Salvar o array atualizado no localStorage
        localStorage.setItem('productSelected', arrayAtualizadoString)

        alert('Produto adicionado à sacola.')
    }

    return (
        <Flex flexDirection="column" w="50%" position="relative">
            <Flex as="header" flexDirection="column">
                <Text fontSize="1rem" color="gray.500">
                    {productDetail.brand}
                </Text>
                <Text fontSize="2rem" lineHeight="2rem" mb="0.3rem">
                    {productDetail.brand} - {productDetail.title}
                </Text>

                <Text fontSize="1rem" color="gray.600" mb="1rem">
                    {productDetail.description}
                </Text>
                <Text fontSize="0.875rem">Cód: ({productDetail.cod_product})</Text>
            </Flex>
            <Divider />
            <Flex mt="0.5rem" flexDirection="column">
                <Text fontSize="2.5rem" fontWeight="bold" color="green" mb="0.5rem">
                    {FormatPrice(productDetail.amount)}
                </Text>
                <PaymentMethods />
            </Flex>

            <Flex
                mt="1.5rem"
                gap="8px"
                alignItems="flex-end"
                position="absolute"
                bottom="0px"
                w="100%"
            >
                <CountComponent handleQuantity={handleQuantity} />
                <ButtonComponent onClick={handleSaveInLocalStorage}>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
