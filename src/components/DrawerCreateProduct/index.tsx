import {
    Button,
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

interface DrawerCreateProductProps {
    isOpen: boolean
    onClose: () => void
}

const categorys = ['Rosto', 'Lábios', 'Olhos', 'Skin Care']

export function DrawerCreateProduct({ isOpen, onClose }: DrawerCreateProductProps) {
    return (
        <Drawer isOpen={isOpen} size="md" placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Criar produto</DrawerHeader>

                <DrawerBody>
                    <Flex as="form" flexDirection="column">
                        <Flex gap="0.5rem">
                            <Input name="brand" label="Marca do produto:" placeholder="Avon" />
                            <Input name="brand" label="Codigo do produto:" placeholder="P321" />
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
                            />
                        </Flex>
                        <Flex gap="0.5rem">
                            <Input name="amount" label="Preço do produto:" placeholder="20" />
                            <Flex flexDirection="column" w="100%">
                                <FormLabel fontSize="0.875rem" fontWeight="400" lineHeight="normal">
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
                                >
                                    <option value="">Selecione uma categoria</option>
                                    {categorys.map((item) => (
                                        <>
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        </>
                                    ))}
                                </Select>
                            </Flex>
                        </Flex>

                        <Flex gap="0.5rem" flexDirection="column" mt="0.5rem">
                            <Input
                                name="imageUrl"
                                label="Link da imagem do produto (Principal):"
                                placeholder="Link aqui"
                            />
                            <Input
                                name="imageUrl"
                                label="Link da imagem do produto:"
                                placeholder="Link aqui"
                            />
                            <Input
                                name="imageUrl"
                                label="Link da imagem do produto:"
                                placeholder="Link aqui"
                            />
                        </Flex>
                    </Flex>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <ButtonComponent w="6rem" bg="green">
                        Salvar
                    </ButtonComponent>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
