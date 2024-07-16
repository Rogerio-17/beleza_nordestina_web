import { MoneyIcon } from '@/Icons/Money'
import { PixIcon } from '@/Icons/Pix'
import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

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

interface PaymentMethodProps {
    icon: ReactNode
    name: string
}

export function PaymentMethods() {
    return (
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
    )
}

function PaymentMethod({ icon, name }: PaymentMethodProps) {
    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
            {icon}
            <Text fontSize="0.8rem" fontWeight="500" color="gray.700">
                {name}
            </Text>
        </Flex>
    )
}
