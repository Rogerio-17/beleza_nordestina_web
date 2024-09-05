'use client'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ButtonFilter } from './components/Button'
import { FiltersBySelection } from '../..'

interface FiltersProps {
    handleFilter: (data: FiltersBySelection) => void
}

export function Filters({ handleFilter }: FiltersProps) {
    const [value, setValue] = useState('todas')

    function handleAlterFilter(option: string) {
        setValue(option)
    }

    return (
        <Flex mt="0.5rem" gap="1rem" alignItems="center">
            <ButtonFilter
                onClick={() => {
                    handleFilter(FiltersBySelection.all)
                    handleAlterFilter('todas')
                }}
                active={value === 'todas'}
            >
                Todas
            </ButtonFilter>
            <ButtonFilter
                onClick={() => {
                    handleFilter(FiltersBySelection.face)
                    handleAlterFilter('rosto')
                }}
                active={value === 'rosto'}
            >
                Rosto
            </ButtonFilter>
            <ButtonFilter
                onClick={() => {
                    handleFilter(FiltersBySelection.lips)
                    handleAlterFilter('labios')
                }}
                active={value === 'labios'}
            >
                Lábios{' '}
            </ButtonFilter>
            <ButtonFilter
                onClick={() => {
                    handleFilter(FiltersBySelection.eyes)
                    handleAlterFilter('olhos')
                }}
                active={value === 'olhos'}
            >
                Olhos
            </ButtonFilter>
            <ButtonFilter
                onClick={() => {
                    handleFilter(FiltersBySelection.skincare)
                    handleAlterFilter('skincare')
                }}
                active={value === 'skincare'}
            >
                Skin Care
            </ButtonFilter>
        </Flex>
    )
}
