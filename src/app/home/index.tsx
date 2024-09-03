import { Flex } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'
import { Header } from '@/components/Header'
import { ListProducts } from './components/ListProducts'

export default async function Home() {
    return (
        <>
            <Header />
            <Flex flexDirection="column">
                <HeroSection />
                <Center mt="1rem" gap="1.5rem" flexDirection="column">
                    <Filters />
                    <ListProducts />
                </Center>
            </Flex>
        </>
    )
}
