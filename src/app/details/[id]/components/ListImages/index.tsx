'use client'
import { Flex, Image, Text } from '@chakra-ui/react'
import rimel from '@/assets/rimel.jpg'
import rimel2 from '@/assets/rimel2.png'
import rimel3 from '@/assets/rimel3.jpg'
import { useState } from 'react'

const images = [rimel.src, rimel2.src, rimel3.src]

export function ListImages() {
    const [imageSelected, setImageSelected] = useState(images[0])

    function handleAlterImage(url: string) {
        setImageSelected(url)
    }

    return (
        <Flex w="50%" h="100%" gap="1.5rem">
            <Flex flexDirection="column" gap="0.5rem" width="5rem" h="5rem">
                {images.map((foto, i) => (
                    <Image
                        key={i}
                        src={foto}
                        cursor="pointer"
                        onClick={() => handleAlterImage(foto)}
                        border={foto === imageSelected ? '1px solid #666464' : 'unset'}
                        borderRadius="5px"
                        w="100%"
                        h="100%"
                        p="2px"
                    />
                ))}
            </Flex>
            <Flex w="90%" h="100%" bg="red">
                <Image src={imageSelected} w="100%" h="100%" />
            </Flex>
        </Flex>
    )
}
