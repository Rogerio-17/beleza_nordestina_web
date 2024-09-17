'use client'
import { Flex } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'
import { Header } from '@/components/Header'
import { ListProducts } from './components/ListProducts'
import { useEffect, useState } from 'react'
import { ProductProps, useProducts } from '@/hooks/useProducts'

export enum FiltersBySelection {
    all = 'all',
    face = 'face',
    lips = 'lips',
    eyes = 'eyes',
    skincare = 'skincare',
}

export function HomePage() {
    const [filters, setFilters] = useState<FiltersBySelection>(FiltersBySelection.all)
    const [filteredData, setFilteredData] = useState<ProductProps[]>([])
    const { products, productsFiltered } = useProducts()

    function handleFilter(data: FiltersBySelection) {
        setFilters(data)
    }

    useEffect(() => {
        setFilteredData(products)
        if (filters !== FiltersBySelection.all) {
            const filter = products.filter((item) => item.category === filters)
            setFilteredData(filter)
        }
    }, [filters, products])

    return (
        <>
            <Header />
            <Flex flexDirection="column">
                <HeroSection />
                <Center mt="1rem" gap="1.5rem" flexDirection="column" minH="40vh">
                    <Filters handleFilter={handleFilter} />
                    <ListProducts products={!productsFiltered ? filteredData : productsFiltered} />
                </Center>
            </Flex>
        </>
    )
}
