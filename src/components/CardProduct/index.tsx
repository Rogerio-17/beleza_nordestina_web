import { Button, Flex, Image, Text } from '@chakra-ui/react'
import image from '@/assets/rimel.jpg'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'

export function CardProduct() {
    return (
        <Flex
            flexDirection="column"
            w="17rem"
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            borderRadius="10px"
            overflow="hidden"
            h="28rem"
            p="8px"
            alignSelf="flex-start"
            bg="#fff"
            mb="1rem"
        >
            <Image src={image.src} h="250px" />
            <Flex flexDirection="column" mt="1rem" gap="1.5rem">
                <Text textAlign="center" fontSize="1.1rem" lineHeight="16px" fontWeight="500">
                    Descubra um olhar intenso e volumoso com nosso rímel
                </Text>

                <Text textAlign="center" fontSize="2rem" fontWeight="bold" color="green">
                    {FormatPrice(27.5)}
                </Text>
            </Flex>

            <Flex h="20%" gap="8px" alignItems="flex-end">
                <CountComponent />
                <ButtonComponent>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
