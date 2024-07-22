import { Flex, Image, Text } from '@chakra-ui/react'
import image from '@/assets/rimel.jpg'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'
import NextLink from 'next/link'
import { ProductProps } from '@/app/home'

interface CardProductProps {
    data: ProductProps
}

export function CardProduct({ data }: CardProductProps) {
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
            <Flex as={NextLink} href={`/details/123`} w="100%" cursor="pointer">
                <Image src={image.src} h="250px" w="100%" />
            </Flex>

            <Flex
                flexDirection="column"
                mt="1rem"
                gap="1rem"
                as={NextLink}
                href={`/details/123`}
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
                <CountComponent />
                <ButtonComponent>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
