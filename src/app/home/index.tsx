import { Flex, Text } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'

export default function Home() {
    return (
        <Flex flexDirection="column">
            <HeroSection />
            <Center>
                <Filters />
            </Center>
        </Flex>
    )
}
