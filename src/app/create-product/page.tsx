import { ButtonComponent } from '@/components/ButtonComponent'
import { Center } from '@/components/Center'
import { Header } from '@/components/Header'
import { Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import { CardProductEditable } from './components/CardProductEditable'

export default function CreateProduct() {
    return (
        <>
            <Header />
            <Center flexDirection="column" mt="1rem">
                <Flex
                    as="form"
                    alignItems="center"
                    mt="1rem"
                    justifyContent="space-between"
                    pb="1rem"
                >
                    <Flex alignItems="flex-end">
                        <FormLabel>Pesquise um produto:</FormLabel>
                        <Input
                            p="0.5rem"
                            fontSize="1rem"
                            type={'text'}
                            placeholder="nome ou codigo"
                            focusBorderColor="green"
                            w="25rem"
                            mr="1rem"
                        />
                        <ButtonComponent w="5rem" type="submit">
                            Buscar
                        </ButtonComponent>
                    </Flex>
                    <ButtonComponent w="10rem" type="submit">
                        Novo produto +
                    </ButtonComponent>
                </Flex>

                <CardProductEditable />
                <CardProductEditable />
                <CardProductEditable />
            </Center>
        </>
    )
}
