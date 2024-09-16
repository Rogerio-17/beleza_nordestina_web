import { Flex, Hide, Image, Show, Text } from '@chakra-ui/react'
import banner from '@/assets/banner/banner.png'
import bannersm from '@/assets/banner/bannersm.png'

export default function HeroSection() {
    return (
        <Flex as="section">
            <Show above="lg">
                <Image src={banner.src} width="100vw" height={{ base: '250px', lg: '420px' }} />
            </Show>

            <Hide above="lg">
                <Image
                    src={bannersm.src}
                    width="100vw"
                    height={{ base: '250px', lg: '420px' }}
                    objectFit="cover"
                    objectPosition="center"
                />
            </Hide>
        </Flex>
    )
}
