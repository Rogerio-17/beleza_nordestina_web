'use client'
import { Button, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { ButtonFilter } from './components/Button'

export function Filters() {
    const [value, setValue] = useState<string>('')

    return (
        <Flex mt="0.5rem" gap="1rem" alignItems="center">
            <ButtonFilter bg="green" color="#fff">
                Todas
            </ButtonFilter>
            <ButtonFilter>Rosto</ButtonFilter>
            <ButtonFilter>Lábios </ButtonFilter>
            <ButtonFilter>Olhos</ButtonFilter>
            <ButtonFilter>Skin Care</ButtonFilter>
        </Flex>
    )
}
