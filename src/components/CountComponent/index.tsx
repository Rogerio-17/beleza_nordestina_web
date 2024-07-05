'use client'
import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'

export function CountComponent() {
    const [count, setCount] = useState(0)

    function handleSetCountSum() {
        setCount((state) => state + 1)
    }

    function handleSetCountSubtraction() {
        setCount((state) => state - 1)
    }

    return (
        <Flex gap="8px" alignItems="center" border="1px solid #c9c8c8">
            <Button
                isDisabled={count <= 0}
                minW={0}
                minH={0}
                h="38px"
                w="35px"
                fontSize="1.2rem"
                lineHeight="0px"
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
                onClick={handleSetCountSum}
            >
                +
            </Button>
        </Flex>
    )
}
