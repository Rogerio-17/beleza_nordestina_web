'use client'
import { Center } from '@/components/Center'
import { Divider, Flex, Grid, GridItem, Spinner, Text } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { useProducts } from '@/hooks/useProducts'
import { ListImages } from '../ListImages'
import { ListDetails } from '../ListDetails'
import { AddComments } from '../AddComment'
import { ListComments } from '../ListComments'
import { RelatedProducts } from '../RelatedProducts'
import { useComments } from '@/hooks/useComments'

interface DetailsProps {
    params: {
        id: string
    }
}

export function PageDetails({ params }: DetailsProps) {
    const { products } = useProducts()
    const { comments } = useComments()

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

    const productComments = comments.filter((comment) => comment.idProduct === params.id)
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
                    <AddComments idProduct={params.id} />
                    <Divider />
                    <Text fontWeight="700">Todos os comentarios:</Text>
                    {productComments.length === 0 ? (
                        <Flex justifyContent="center">
                            <Text fontSize="0.8rem" color="#818181">
                                Nenhum comentario sobre esse produto!
                            </Text>
                        </Flex>
                    ) : (
                        <Grid
                            templateColumns="repeat(2, 1fr)"
                            justifyContent="space-between"
                            gap="2rem"
                        >
                            {productComments.map((comment) => (
                                <ListComments key={comment.id} comment={comment} />
                            ))}
                        </Grid>
                    )}
                </Flex>
                <RelatedProducts products={products} />
            </Center>
        </>
    )
}
