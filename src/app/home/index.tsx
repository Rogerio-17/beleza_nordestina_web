import { Flex } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'
import { CardProduct } from '@/components/CardProduct'

export default function Home() {
    const itemCount = 8
    const fakeArray = Array.from({ length: itemCount }, (_, index) => index)
    return (
        <Flex flexDirection="column">
            <HeroSection />
            <Center mt="1rem" gap="1.5rem" flexDirection="column">
                <Filters />
                <Flex gap="0.8rem" flexWrap="wrap" justifyContent="center">
                    {fakeArray.map((item) => (
                        <CardProduct key={item} />
                    ))}
                </Flex>
            </Center>
        </Flex>
    )
}
