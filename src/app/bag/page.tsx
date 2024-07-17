import { Center } from '@/components/Center'
import { Button, Divider, Flex, Text } from '@chakra-ui/react'
import { CardForBag } from './components/CardForBag'
import { ButtonComponent } from '@/components/ButtonComponent'
import { FormatPrice } from '@/utils/FormatPrice'
import { InformationIcon } from '@/Icons/InformationIcon'

export default function Bag() {
    return (
        <Center flexDirection="column" mt="1rem">
            <Text fontSize="2rem" fontWeight="600">
                Sacola de compras{' '}
                <Text as="span" fontSize="0.875rem" color="gray.600">
                    (Clique em <strong>&quot;Finalizar compra&quot;</strong> para efetuar seu pedido
                    pelo whatsapp).
                </Text>
            </Text>{' '}
            <CardForBag />
            <CardForBag />
            <Flex mt="1rem" flexDirection="column" justifyContent="right" gap="0.5rem">
                <Text
                    display="flex"
                    alignItems="center"
                    as="span"
                    fontSize="1rem"
                    color="gray.600"
                    textAlign="center"
                    justifyContent="center"
                    gap="0.3rem"
                >
                    <InformationIcon w="20px" h="20px" />
                    Ao clicar em <strong>&quot;Finalizar compra&quot;</strong> você será
                    redirecionado para nosso whatsapp com todos os dados dos produtos que estão no
                    seu carrinho.
                </Text>
                <Divider />
                <Flex flexDirection="column" alignSelf="end" w="22rem">
                    <Text>
                        Itens:{' '}
                        <Text as="strong" fontSize="1rem" lineHeight="1rem">
                            4
                        </Text>{' '}
                    </Text>
                    <Text>
                        Total:{' '}
                        <Text as="strong" fontSize="1.25rem" lineHeight="1rem">
                            {FormatPrice(40)}
                        </Text>
                    </Text>
                </Flex>
                <Flex alignSelf="end" w="22rem" gap="0.5rem">
                    <ButtonComponent w="10rem">Finalizar compra</ButtonComponent>
                    <Button bg="gray.300" color="#494949">
                        Continuar comprando
                    </Button>
                </Flex>
            </Flex>
        </Center>
    )
}
