import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonComponentProps extends ButtonProps {
    children: ReactNode
    href?: string
    target?: string
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
            _disabled={{
                cursor: 'not-allowed',
                bg: 'green',
                opacity: 0.5,
                color: '#fff',
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
