import { Divider, Flex, Text } from '@chakra-ui/react'
import { DataForDetail } from './data'
import { FormatPrice } from '@/utils/FormatPrice'
import { PixIcon } from '@/Icons/Pix'
import { PaymentMethod } from './components/PaymentMethod'
import { MoneyIcon } from '@/Icons/Money'
import { CountComponent } from '@/components/CountComponent'
import { ButtonComponent } from '@/components/ButtonComponent'

const paymentMethods = [
    {
        icon: <PixIcon w="20px" h="20px" />,
        name: 'Pix',
    },
    {
        icon: <MoneyIcon w="20px" h="20px" />,
        name: 'Dinheiro',
    },
]

export function ListDetails() {
    return (
        <Flex flexDirection="column" w="50%">
            <Flex as="header" flexDirection="column">
                <Text fontSize="1rem" color="gray.500">
                    {DataForDetail.brand}
                </Text>
                <Text fontSize="2rem" lineHeight="2rem" mb="1rem">
                    {DataForDetail.title}
                </Text>
                <Text fontSize="0.875rem">Cód: ({DataForDetail.cod_prduct})</Text>
            </Flex>
            <Divider />
            <Flex mt="0.5rem" flexDirection="column">
                <Text fontSize="2.5rem" fontWeight="bold" color="green" mb="0.5rem">
                    {FormatPrice(DataForDetail.amount)}
                </Text>

                <Flex flexDirection="column" gap="0.5rem">
                    <Text fontWeight="500">Métodos de pagamento disponíveis:</Text>
                    <Flex gap="1rem">
                        {paymentMethods.map((paymentMethod) => (
                            <PaymentMethod
                                name={paymentMethod.name}
                                icon={paymentMethod.icon}
                                key={paymentMethod.name}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Flex>

            <Flex mt="1.5rem" gap="8px" alignItems="flex-end">
                <CountComponent />
                <ButtonComponent>Adicionar</ButtonComponent>
            </Flex>
        </Flex>
    )
}
