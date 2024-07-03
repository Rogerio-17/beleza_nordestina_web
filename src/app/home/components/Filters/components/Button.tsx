import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonFilterProps extends ButtonProps {
    children: ReactNode
}

export function ButtonFilter({ children, ...props }: ButtonFilterProps) {
    return (
        <Button
            bg="gray.100"
            p="0px 18px"
            h="35px"
            value="rosto"
            borderRadius="14px"
            _hover={{
                bg: 'green',
                color: 'white',
                transition: '0.3s all',
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
