'use client'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ButtonFilter } from './components/Button'

export function Filters() {
    const [value, setValue] = useState('todas')

    function handleAlterFilter(option: string) {
        setValue(option)
    }

    return (
        <Flex mt="0.5rem" gap="1rem" alignItems="center">
            <ButtonFilter onClick={() => handleAlterFilter('todas')} active={value === 'todas'}>
                Todas
            </ButtonFilter>
            <ButtonFilter onClick={() => handleAlterFilter('rosto')} active={value === 'rosto'}>
                Rosto
            </ButtonFilter>
            <ButtonFilter onClick={() => handleAlterFilter('labios')} active={value === 'labios'}>
                Lábios{' '}
            </ButtonFilter>
            <ButtonFilter onClick={() => handleAlterFilter('olhos')} active={value === 'olhos'}>
                Olhos
            </ButtonFilter>
            <ButtonFilter
                onClick={() => handleAlterFilter('skincare')}
                active={value === 'skincare'}
            >
                Skin Care
            </ButtonFilter>
        </Flex>
    )
}
