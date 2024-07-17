'use client'
import { Button, Flex, FlexProps } from '@chakra-ui/react'
import { useState } from 'react'

interface CountComponentProps extends FlexProps {
    quantity?: number
}

export function CountComponent({ quantity, ...props }: CountComponentProps) {
    const [count, setCount] = useState(quantity ?? 0)

    function handleSetCountSum() {
        setCount((state) => state + 1)
    }

    function handleSetCountSubtraction() {
        setCount((state) => state - 1)
    }

    return (
        <Flex gap="8px" alignItems="center" border="1px solid #c9c8c8" {...props}>
            <Button
                isDisabled={count <= 0}
                minW={0}
                minH={0}
                h="38px"
                w="35px"
                fontSize="1.2rem"
                lineHeight="0px"
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
                h="38px"
                w="35px"
                fontSize="1.2rem"
                lineHeight="0px"
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
