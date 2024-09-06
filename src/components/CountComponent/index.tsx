'use client'
import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface CountComponentProps extends FlexProps {
    quantity?: number
    handleQuantity: (quantity: number) => void
    sizeComponent: 'sm' | 'md'
}

export function CountComponent({
    quantity,
    handleQuantity,
    sizeComponent,
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
        <Flex gap="8px" alignItems="center" border="1px solid #c9c8c8" {...props}>
            <Button
                isDisabled={count <= 1}
                minW={0}
                minH={0}
                h={sizeComponent === 'sm' ? '20px' : '38px'}
                w={sizeComponent === 'sm' ? '20px' : '35px'}
                fontSize="1.2rem"
                lineHeight="0px"
                p={sizeComponent === 'sm' ? '6px' : 'unset'}
                bg="#fff"
                _hover="none"
                _active="none"
                onClick={handleSetCountSubtraction}
            >
                -
            </Button>
            {count}
            <Button
                minW={0}
                minH={0}
                h={sizeComponent === 'sm' ? '20px' : '38px'}
                w={sizeComponent === 'sm' ? '20px' : '35px'}
                fontSize="1.2rem"
                lineHeight="0px"
                p={sizeComponent === 'sm' ? '6px' : 'unset'}
                bg="#fff"
                _hover="none"
                _active="none"
                onClick={handleSetCountSum}
            >
                +
            </Button>
        </Flex>
    )
}
