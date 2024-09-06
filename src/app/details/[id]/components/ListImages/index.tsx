'use client'
import { Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

interface ListImagesProps {
    images: string[]
}

export function ListImages({ images }: ListImagesProps) {
    const [imageSelected, setImageSelected] = useState(images[0])

    function handleAlterImage(url: string) {
        setImageSelected(url)
    }

    return (
        <Flex w={{ base: '100%', lg: '50%' }} h="100%" gap={{ base: '0.875rem', lg: '1.5rem' }}>
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
            <Flex w="90%" h={{ base: '350px', lg: '100%' }}>
                <Image src={imageSelected} w="100%" h="100%" borderRadius="10px" />
            </Flex>
        </Flex>
    )
}
