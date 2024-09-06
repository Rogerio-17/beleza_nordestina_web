'use client'
import { Center } from '@/components/Center'
import { Divider, Flex, Grid, GridItem, Link, Spinner, Text } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { useProducts } from '@/hooks/useProducts'
import { ListImages } from '../ListImages'
import { ListDetails } from '../ListDetails'
import { AddComments } from '../AddComment'
import { ListComments } from '../ListComments'
import { RelatedProducts } from '../RelatedProducts'
import { useComments } from '@/hooks/useComments'
import { useState } from 'react'

interface DetailsProps {
    params: {
        id: string
    }
}

export function PageDetails({ params }: DetailsProps) {
    const [showAllComents, setShowAllComents] = useState(false)
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
    const fourFirstProductComments = productComments.slice(0, 4)
    const fourFirstProducts = products.slice(0, 4)

    return (
        <>
            <Header />
            <Center flexDirection="column" gap={{ base: '2rem', lg: '5rem' }}>
                <Flex
                    mt="2rem"
                    h={{ base: 'unset', lg: '30rem' }}
                    gap="1.5rem"
                    flexDirection={{ base: 'column', lg: 'row' }}
                >
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
                            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                            justifyContent="space-between"
                            gap={{ base: '1rem', lg: '2rem' }}
                        >
                            {showAllComents
                                ? productComments.map((comment) => (
                                      <ListComments key={comment.id} comment={comment} />
                                  ))
                                : fourFirstProductComments.map((comment) => (
                                      <ListComments key={comment.id} comment={comment} />
                                  ))}
                        </Grid>
                    )}

                    <Link
                        margin="auto"
                        color="green"
                        w={showAllComents ? '9rem' : '11.3rem'}
                        borderBottom="1px solid green"
                        onClick={() => setShowAllComents(!showAllComents)}
                    >
                        {showAllComents ? 'Ocultar comentarios' : 'Ver todos os comentarios'}
                    </Link>
                </Flex>
                <RelatedProducts products={fourFirstProducts} />
            </Center>
        </>
    )
}
