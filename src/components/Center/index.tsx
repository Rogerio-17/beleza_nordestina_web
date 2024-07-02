import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CenterProps extends FlexProps {
    children: ReactNode
}

export function Center({ children, ...props }: CenterProps) {
    return (
        <Flex w={{ base: '90vw', lg: '1180px' }} margin="auto" {...props}>
            {children}
        </Flex>
    )
}
