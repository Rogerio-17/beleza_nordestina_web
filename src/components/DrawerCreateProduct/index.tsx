'use client'
import {
    Button,
    Checkbox,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormLabel,
    Select,
    Textarea,
} from '@chakra-ui/react'
import { Input } from '../InputComponent'
import { ButtonComponent } from '../ButtonComponent'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useProducts } from '@/hooks/useProducts'

interface DrawerCreateProductProps {
    isOpen: boolean
    onClose: () => void
}

const categorys = [
    {
        name: 'Rosto',
        valeu: 'face',
    },
    {
        name: 'Lábios',
        valeu: 'lips',
    },
    {
        name: 'Olhos',
        valeu: 'eyes',
    },
    {
        name: 'Skin Care',
        valeu: 'skincare',
    },
]

export const productSchema = z.object({
    brand: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    cod_product: z.string(),
    amount: z.coerce.number(),
    image1: z.string(),
    image2: z.string(),
    image3: z.string(),
    available: z.coerce.number(),
    showItem: z.boolean(),
})

export type ProductFormData = z.infer<typeof productSchema>

export function DrawerCreateProduct({ isOpen, onClose }: DrawerCreateProductProps) {
    const { createProduct } = useProducts()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
    })

    async function handleCreateProduct(data: ProductFormData) {
        const product = {
            title: data.title,
            description: data.description,
            brand: data.brand,
            category: data.category,
            amount: data.amount,
            cod_product: data.cod_product,
            images: [data.image1, data.image2, data.image3],
            available: data.available,
            showItem: data.showItem,
        }

        await createProduct({ product })
    }

    return (
        <Drawer isOpen={isOpen} size="md" placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <Flex
                    flexDirection="column"
                    as="form"
                    onSubmit={handleSubmit(handleCreateProduct)}
                    h="100vh"
                >
                    <DrawerCloseButton />
                    <DrawerHeader>Criar produto</DrawerHeader>

                    <DrawerBody>
                        <Flex as="form" flexDirection="column">
                            <Input
                                mb="0.5rem"
                                label="Título do produto:"
                                placeholder="Rimel para melhor ajuste dos cílios"
                                {...register('title')}
                                error={errors.title?.message}
                            />
                            <Flex gap="0.5rem">
                                <Input
                                    label="Marca do produto:"
                                    placeholder="Avon"
                                    {...register('brand')}
                                    error={errors.brand?.message}
                                />
                                <Input
                                    label="Codigo do produto:"
                                    placeholder="P321"
                                    {...register('cod_product')}
                                    error={errors.cod_product?.message}
                                />
                            </Flex>
                            <Flex flexDirection="column" my="0.5rem">
                                <FormLabel fontSize="0.875rem" fontWeight="400" lineHeight="normal">
                                    Descrição do produto:
                                </FormLabel>
                                <Textarea
                                    resize="none"
                                    w="100%"
                                    h="48px"
                                    placeholder="Descreva o produto..."
                                    {...register('description')}
                                />
                            </Flex>
                            <Flex gap="0.5rem">
                                <Input
                                    type="number"
                                    label="Preço do produto:"
                                    placeholder="20"
                                    {...register('amount')}
                                    error={errors.amount?.message}
                                />
                                <Flex flexDirection="column" w="100%">
                                    <FormLabel
                                        fontSize="0.875rem"
                                        fontWeight="400"
                                        lineHeight="normal"
                                    >
                                        Categoria do produto:
                                    </FormLabel>
                                    <Select
                                        size="lg"
                                        fontWeight="500"
                                        fontSize="1rem"
                                        lineHeight="1.5rem"
                                        color="gray.700"
                                        borderWidth="1px"
                                        borderColor="gray.200"
                                        borderRadius="0.75rem"
                                        {...register('category')}
                                    >
                                        <option value="">Selecione uma categoria</option>
                                        {categorys.map((item) => (
                                            <>
                                                <option key={item.valeu} value={item.valeu}>
                                                    {item.name}
                                                </option>
                                            </>
                                        ))}
                                    </Select>
                                </Flex>
                            </Flex>

                            <Flex gap="0.5rem" flexDirection="column" mt="0.5rem">
                                <Input
                                    label="Link da imagem do produto (Principal):"
                                    placeholder="Link aqui"
                                    {...register('image1')}
                                    error={errors.image1?.message}
                                />
                                <Input
                                    label="Link da imagem do produto:"
                                    placeholder="Link aqui"
                                    {...register('image2')}
                                    error={errors.image2?.message}
                                />
                                <Input
                                    label="Link da imagem do produto:"
                                    placeholder="Link aqui"
                                    {...register('image3')}
                                    error={errors.image3?.message}
                                />
                            </Flex>

                            <Flex gap="0.5rem" mt="0.5rem">
                                <Flex alignSelf="end" gap="8px">
                                    <Checkbox {...register('showItem')} />
                                    Exibir produto?
                                </Flex>
                                <Input
                                    type="number"
                                    label="Produtos em estoque:"
                                    placeholder="5"
                                    {...register('available')}
                                    error={errors.available?.message}
                                />
                            </Flex>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <ButtonComponent w="6rem" bg="green" type="submit">
                            Salvar
                        </ButtonComponent>
                    </DrawerFooter>
                </Flex>
            </DrawerContent>
        </Drawer>
    )
}
