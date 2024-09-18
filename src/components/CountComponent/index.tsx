'use client'
import { MiniusIcon } from '@/Icons/MinusIcon'
import { PlusIcon } from '@/Icons/PlusIcon'
import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface CountComponentProps extends FlexProps {
    quantity?: number
    handleQuantity: (quantity: number) => void
    sizeComponent: 'sm' | 'md'
    available?: number
}

export function CountComponent({
    quantity,
    handleQuantity,
    sizeComponent,
    available,
    ...props
}: CountComponentProps) {
    const [count, setCount] = useState(quantity || 1)

    function handleSetCountSum() {
        setCount((state) => state + 1)
    }

    function handleSetCountSubtraction() {
        setCount((state) => state - 1)
    }

    useEffect(() => {
        handleQuantity(count)
    }, [count])

    return (
        <Flex
            gap="8px"
            alignItems="center"
            h={sizeComponent === 'sm' ? 'unset' : '40px'}
            p="3px"
            {...props}
        >
            <Button
                isDisabled={count <= 1}
                minW={0}
                minH={0}
                h={sizeComponent === 'sm' ? '20px' : '30px'}
                w={sizeComponent === 'sm' ? '20px' : '30px'} // Largura igual à altura para tornar o botão redondo
                fontSize="1.2rem"
                lineHeight="0px"
                p={sizeComponent === 'sm' ? '6px' : 'unset'}
                bg="#b9b9b9"
                // Opacidade um pouco menor
                color="#fff"
                _hover="none"
                _active="none"
                onClick={handleSetCountSubtraction}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
            >
                <MiniusIcon w="18px" />
            </Button>
            {count}
            <Button
                isDisabled={available ? count >= available : false || available! <= 0}
                minW={0}
                minH={0}
                h={sizeComponent === 'sm' ? '20px' : '30px'}
                w={sizeComponent === 'sm' ? '20px' : '30px'} // Largura igual à altura para tornar o botão redondo
                fontSize="1.2rem"
                lineHeight="0px"
                p={sizeComponent === 'sm' ? '6px' : 'unset'}
                color="#fff"
                // Opacidade um pouco menor
                bg="green"
                _hover="none"
                _active="none"
                onClick={handleSetCountSum}
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="50%"
            >
                <PlusIcon w="18px" />
            </Button>
        </Flex>
    )
}
