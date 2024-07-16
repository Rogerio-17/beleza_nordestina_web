import { ButtonComponent } from '@/components/ButtonComponent'
import { Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react'

export function AddComments() {
    return (
        <Flex as="form" flexDirection="column">
            <Text fontSize="2rem" textAlign="center" mb="1rem" fontWeight="bold">
                Comentários sobre o produto
            </Text>
            <Flex flexDirection="column" gap="0.5rem">
                <Flex flexDirection="column">
                    <FormLabel lineHeight="10px" fontSize="0.875rem">
                        Nome:{' '}
                    </FormLabel>
                    <Input placeholder="Beleza Nodestina" focusBorderColor="green" w="25rem" />
                </Flex>

                <Textarea
                    resize="none"
                    w="100%"
                    focusBorderColor="green"
                    border="1px solid #dbd7d7"
                    placeholder="Digite seu comentario..."
                />
                <Flex w="100%" justifyContent="right">
                    <ButtonComponent w="10rem">Comentar</ButtonComponent>
                </Flex>
            </Flex>
        </Flex>
    )
}
