import { Divider, Flex, Text } from '@chakra-ui/react'
import { DataForDetail } from './data'
import { FormatPrice } from '@/utils/FormatPrice'
import { CountComponent } from '@/components/CountComponent'
import { ButtonComponent } from '@/components/ButtonComponent'
import { PaymentMethods } from '@/components/PaymentMethods'

export function ListDetails() {
    return (
        <Flex flexDirection="column" w="50%" position="relative">
            <Flex as="header" flexDirection="column">
                <Text fontSize="1rem" color="gray.500">
                    {DataForDetail.brand}
                </Text>
                <Text fontSize="2rem" lineHeight="2rem" mb="0.3rem">
                    {DataForDetail.brand} - {DataForDetail.title}
                </Text>

                <Text fontSize="1rem" color="gray.600" mb="1rem">
                    {DataForDetail.description}
                </Text>
                <Text fontSize="0.875rem">Cód: ({DataForDetail.cod_prduct})</Text>
            </Flex>
            <Divider />
            <Flex mt="0.5rem" flexDirection="column">
                <Text fontSize="2.5rem" fontWeight="bold" color="green" mb="0.5rem">
                    {FormatPrice(DataForDetail.amount)}
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
                <CountComponent />
                <ButtonComponent>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
