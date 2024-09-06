import { Button, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonFilterProps extends ButtonProps {
    children: ReactNode
    active: boolean
}

export function ButtonFilter({ children, active, ...props }: ButtonFilterProps) {
    return (
        <Button
            fontSize={{ base: '0.875rem', lg: '1rem' }}
            bg={active ? 'green' : 'gray.100'}
            color={active ? 'white' : ''}
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
