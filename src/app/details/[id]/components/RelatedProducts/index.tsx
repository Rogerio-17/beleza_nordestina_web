'use client'
import { CardProduct } from '@/components/CardProduct'
import { ProductProps } from '@/hooks/useProducts'
import { Flex, Spinner, Text } from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

interface RelatedProductsProps {
    products: ProductProps[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    // const [sliderRef] = useKeenSlider<HTMLDivElement>({
    //     breakpoints: {
    //         '(min-width: 763px)': {
    //             slides: { perView: 2.25, spacing: 20 },
    //         },
    //         '(min-width: 1000px)': {
    //             slides: { perView: 3, spacing: 20 },
    //         },
    //     },
    //     slides: { perView: 1.125, spacing: 20 },
    // })

    if (!products || products.length === 0) {
        return <Spinner />
    }

    return (
        <Flex flexDirection="column">
            <Text
                fontSize={{ base: '1.5rem', lg: '2rem' }}
                textAlign={{ base: 'left', lg: 'center' }}
                lineHeight="normal"
                mb="1rem"
                fontWeight="bold"
            >
                Aproveite e compre também
            </Text>

            <Flex gap="1rem" flexDirection={{ base: 'column', lg: 'row' }}>
                {products.map((product) => (
                    <CardProduct data={product} key={product.id} />
                ))}
            </Flex>
        </Flex>
    )
}
