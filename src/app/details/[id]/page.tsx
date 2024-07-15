import { Center } from '@/components/Center'
import { Flex, Text } from '@chakra-ui/react'
import { ListImages } from './components/ListImages'
import { ListDetails } from './components/ListDetails'

interface DetailsProps {
    params: {
        id: string
    }
}

export default function Details({ params }: DetailsProps) {
    return (
        <Center mt="2rem" h="30rem" gap="1.5rem">
            <ListImages />
            <ListDetails />
        </Center>
    )
}
