import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonComponentProps extends ButtonProps {
    children: ReactNode
}

export function ButtonComponent({ children, ...props }: ButtonComponentProps) {
    return (
        <Button
            _hover={{ opacity: 0.9 }}
            color="white"
            bg="green"
            w="100%"
            textAlign="center"
            p="10px"
            {...props}
        >
            {children}
        </Button>
    )
}
