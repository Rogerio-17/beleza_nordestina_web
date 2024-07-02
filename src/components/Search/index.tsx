import { Button, Input, InputGroup, InputGroupProps, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '../../Icons/Search'

interface SearchProps extends InputGroupProps {}

export function Search({ ...props }: SearchProps) {
    return (
        <InputGroup {...props}>
            <Input
                p="0.5rem"
                fontSize="1rem"
                type={'text'}
                placeholder="Digite o que você procura"
                focusBorderColor="green"
            />
            <InputRightElement>
                <Button bg="transparent" _hover="none" _active="none">
                    <SearchIcon w="20px" h="20px" fontWeight="600" />
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}
