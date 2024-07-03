import { Flex, Image, Text } from '@chakra-ui/react'
import banner from '@/assets/banner/banner.jpg'

export default function HeroSection() {
    return (
        <Flex as="section" mt="1px">
            <Image src={banner.src} width="100vw" height="420px" />
        </Flex>
    )
}
