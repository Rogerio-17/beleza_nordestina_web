import { Flex } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import { Filters } from './components/Filters'
import { Center } from '@/components/Center'
import { CardProduct } from '@/components/CardProduct'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/connection/firebase'

export interface ProductProps {
    brand: string
    title: string
    category: string
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
}

export default async function Home() {
    const itemCount = 8
    const fakeArray = Array.from({ length: itemCount }, (_, index) => index)
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

    return (
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
    )
}
