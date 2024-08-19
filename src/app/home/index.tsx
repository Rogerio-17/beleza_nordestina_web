import { Flex } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'
import { CardProduct } from '@/components/CardProduct'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/connection/firebase'
import { Header } from '@/components/Header'
import { useProductsContext } from '@/context'

export interface ProductProps {
    brand: string
    title: string
    category: string
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
}

export default async function Home() {
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
        .catch((error) => {
            console.log(error.code)
        })

    return (
        <>
            <Header />
            <Flex flexDirection="column">
                <HeroSection />
                <Center mt="1rem" gap="1.5rem" flexDirection="column">
                    <Filters />
                    <Flex gap="0.8rem" flexWrap="wrap" justifyContent="center">
                        {data.map((item) => (
                            <CardProduct key={item.id} data={item} />
                        ))}
                    </Flex>
                </Center>
            </Flex>
        </>
    )
}
