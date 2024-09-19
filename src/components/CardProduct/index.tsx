'use client'
import {
    Button,
    Flex,
    FlexProps,
    Hide,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Show,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react'
import { FormatPrice } from '@/utils/FormatPrice'
import { ButtonComponent } from '../ButtonComponent'
import { CountComponent } from '../CountComponent'
import NextLink from 'next/link'
import { useState } from 'react'
import { useProductsContext } from '@/context'
import { ProductProps } from '@/hooks/useProducts'
import { ShowStars } from '../ShowStars'
import { useComments } from '@/hooks/useComments'
import { ToTalStars } from '@/utils/TotalStarsFormatter'
import Link from 'next/link'
import { InformationIcon } from '@/Icons/InformationIcon'

interface CardProductProps extends FlexProps {
    data: ProductProps
}

export function CardProduct({ data }: CardProductProps) {
    const { handleSaveInLocalStorage } = useProductsContext()
    const { comments } = useComments()
    const [quantity, setQuantity] = useState(1)

    function handleQuantity(quantity: number) {
        setQuantity(quantity)
    }

    const { stars } = ToTalStars({ comments, idProduct: data.id })

    const genereteMessage = () => {
        let message = `Olá! Gostaria de *fazer pedido* do item abaixo:\n\n`

        message += `*Produto:* ${data.brand} - ${data.title}\n`
        message += `*Descrição:* ${data.description}\n`

        // Retornar a message sem codificação
        return message
    }
    const messageWhatsapp = genereteMessage()
    const numberWhatsapp = '5584988103345'
    //const numberWhatsapp = '5584981301382'
    const url = `https://wa.me/${numberWhatsapp}?text=${encodeURIComponent(messageWhatsapp)}`

    return (
        <Flex
            flexDirection={{ base: 'row', lg: 'column' }}
            w={{ base: '100%', lg: '17rem' }}
            boxShadow="0px 6px 24px -4px rgba(18, 44, 100, 0.116)"
            borderRadius="10px"
            overflow="hidden"
            h={{ base: '12.5rem', lg: '28.5rem' }}
            p="6px"
            alignSelf="flex-start"
            bg="#fff"
            mb={{ base: '0px', lg: '1rem' }}
            position="relative"
        >
            <Flex
                as={NextLink}
                href={`/details/${data?.id}`}
                w={{ base: '160px', lg: '100%' }}
                cursor="pointer"
                position="relative"
            >
                <Image
                    src={!!data?.images && data.images[0]}
                    h={{ base: '130px', lg: '250px' }}
                    w={{ base: '120px', lg: '100%' }}
                    borderRadius="10px"
                />

                {data.available === 1 && (
                    <Show above="lg">
                        <Tag
                            size="lg"
                            bg="#32CD32"
                            color="white"
                            borderRadius="full"
                            position="absolute"
                            right="5px"
                            top="5px"
                        >
                            <TagLabel>Última unidade!</TagLabel>
                        </Tag>
                    </Show>
                )}

                {data.available <= 0 && (
                    <Show above="lg">
                        <Tag
                            size="lg"
                            colorScheme="red"
                            borderRadius="full"
                            position="absolute"
                            right="5px"
                            top="5px"
                        >
                            <TagLabel lineHeight="normal">Produto esgotado!</TagLabel>
                        </Tag>
                    </Show>
                )}
            </Flex>

            <Flex flexDirection="column" w={{ base: '70%', lg: 'unset' }}>
                <Flex
                    flexDirection="column"
                    gap="0.2rem"
                    as={NextLink}
                    href={`/details/${data?.id}`}
                    cursor="pointer"
                    h={{ base: '100px', lg: '100px' }}
                    position="relative"
                >
                    <Text
                        textAlign={{ base: 'left', lg: 'center' }}
                        fontSize="1rem"
                        lineHeight="normal"
                        fontWeight="700"
                        mt={{ base: 'unset', lg: '5px' }}
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1, // número de linhas
                        }}
                    >
                        {data?.title}
                    </Text>

                    <Text
                        textAlign="left"
                        fontSize={{ base: '0.75rem', lg: '0.875rem' }}
                        color="#818181"
                        lineHeight="normal"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2, // número de linhas
                        }}
                    >
                        {data.description}
                    </Text>

                    <ShowStars stars={stars} />

                    {data.available === 1 && (
                        <Hide above="lg">
                            <Tag
                                size="sm"
                                w="6.5rem"
                                bg="#32CD32"
                                color="white"
                                borderRadius="10px"
                            >
                                <TagLabel>Última unidade!</TagLabel>
                            </Tag>
                        </Hide>
                    )}

                    {data.available <= 0 && (
                        <Hide above="lg">
                            <Tag size="sm" colorScheme="red" borderRadius="10px" w="7.5rem">
                                <TagLabel lineHeight="normal">Produto esgotado!</TagLabel>
                            </Tag>
                        </Hide>
                    )}
                </Flex>

                <Flex alignItems="center" justifyContent={{ base: 'unset', lg: 'center' }}>
                    {data.available <= 0 && (
                        <Menu>
                            <MenuButton
                                as={Button}
                                w="14px"
                                h="14px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                p="0px"
                                bg="transparent"
                                _active={{ bg: 'transparent' }}
                                _hover={{ bg: 'transparent' }}
                            >
                                {' '}
                                <InformationIcon
                                    color="green"
                                    w={{ base: '18px', md: '22px' }}
                                    h={{ base: '18px', md: '22px' }}
                                />
                            </MenuButton>
                            <MenuList>
                                <Text color="green" px="0.5rem">
                                    O valor deste produto pode variar
                                    <br /> de acordo com o fornecedor.
                                </Text>
                            </MenuList>
                        </Menu>
                    )}
                    <Text
                        textAlign={{ base: 'left', lg: 'center' }}
                        fontSize="1.5rem"
                        fontWeight="bold"
                        color="green"
                        display="block"
                        textDecoration={data.available <= 0 ? 'line-through' : 'unset'}
                    >
                        {FormatPrice(data?.amount ? data.amount : 0)}
                    </Text>
                </Flex>
            </Flex>

            <Flex gap="8px" w="95%" alignItems="flex-end" position="absolute" bottom="14px">
                {data.available <= 0 ? (
                    <ButtonComponent
                        as={Link}
                        href={url}
                        target="_blank"
                        bg="transparent"
                        border="1px solid green"
                        color="green"
                    >
                        Fazer pedido
                    </ButtonComponent>
                ) : (
                    <CountComponent
                        available={data.available}
                        handleQuantity={handleQuantity}
                        sizeComponent="md"
                    />
                )}
                <ButtonComponent
                    isDisabled={data.available <= 0}
                    onClick={() => handleSaveInLocalStorage({ ...data, quantity })}
                >
                    {data.available >= 1 ? 'Comprar' : 'Indisponível'}
                </ButtonComponent>
            </Flex>
        </Flex>
    )
}
