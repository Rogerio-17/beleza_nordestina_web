import { Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface PaymentMethodProps {
    icon: ReactNode
    name: string
}

export function PaymentMethod({ icon, name }: PaymentMethodProps) {
    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
            {icon}
            <Text fontSize="0.8rem" fontWeight="500" color="gray.700">
                {name}
            </Text>
        </Flex>
    )
}
