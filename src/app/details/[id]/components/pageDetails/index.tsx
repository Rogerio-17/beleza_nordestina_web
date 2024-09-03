'use client'
import { Center } from '@/components/Center'
import { Divider, Flex, Spinner } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { useProducts } from '@/hooks/useProducts'
import { ListImages } from '../ListImages'
import { ListDetails } from '../ListDetails'
import { AddComments } from '../AddComment'
import { ListComments } from '../ListComments'
import { RelatedProducts } from '../RelatedProducts'

interface DetailsProps {
    params: {
        id: string
    }
}

export function PageDetails({ params }: DetailsProps) {
    const { products } = useProducts()

    if (products.length === 0) {
        return (
            <>
                <Header />
                <Center h="80vh" alignItems="center" justifyContent="center">
                    <Spinner />
                </Center>
            </>
        )
    }

    const filterProductDetail = products.filter((product) => params.id === product.id)

    return (
        <>
            <Header />
            <Center flexDirection="column" gap="5rem">
                <Flex mt="2rem" h="30rem" gap="1.5rem">
                    <ListImages images={filterProductDetail[0].images} />
                    <ListDetails productDetail={filterProductDetail[0]} />
                </Flex>
                <Flex flexDirection="column" gap="1rem">
                    <AddComments />
                    <Divider />
                    <ListComments />
                </Flex>
                <RelatedProducts products={products} />
            </Center>
        </>
    )
}
