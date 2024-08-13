import { Center } from '@/components/Center'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { ListImages } from './components/ListImages'
import { ListDetails } from './components/ListDetails'
import { RelatedProducts } from './components/RelatedProducts'
import { AddComments } from './components/AddComment'
import { ListComments } from './components/ListComments'
import { ProductProps } from '@/app/home'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/connection/firebase'
import { useProductsContext } from '@/context'
import { Header } from '@/components/Header'

interface DetailsProps {
    params: {
        id: string
    }
}

export default async function Details({ params }: DetailsProps) {
    const data: ProductProps[] = []

    const productRef = collection(db, 'products')
    await getDocs(productRef)
        .then((product) => {
            product.forEach((prod) => {
                data.push({
                    brand: prod.data().brand,
                    title: prod.data().title,
                    category: prod.data().category,
                    description: prod.data().description,
                    id: prod.data().id,
                    cod_product: prod.data().cod_product,
                    amount: prod.data().amount,
                    images: prod.data().images,
                })
            })
        })
        .catch(() => {
            alert('Erro ao buscar dados!')
        })

    const filterProductDetail = data.filter((product) => params.id === product.id)

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
                <RelatedProducts products={data} />
            </Center>
        </>
    )
}
