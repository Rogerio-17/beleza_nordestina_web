import { Center } from '@/components/Center'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { ListImages } from './components/ListImages'
import { ListDetails } from './components/ListDetails'
import { RelatedProducts } from './components/RelatedProducts'
import { AddComments } from './components/AddComment'
import { ListComments } from './components/ListComments'

interface DetailsProps {
    params: {
        id: string
    }
}

export default function Details({ params }: DetailsProps) {
    return (
        <Center flexDirection="column" gap="5rem">
            <Flex mt="2rem" h="30rem" gap="1.5rem">
                <ListImages />
                <ListDetails />
            </Flex>
            <Flex flexDirection="column" gap="1rem">
                <AddComments />
                <Divider />
                <ListComments />
            </Flex>
            <RelatedProducts />
        </Center>
    )
}
