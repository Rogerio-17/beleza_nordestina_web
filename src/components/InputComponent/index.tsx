import {
    FormControl,
    FormErrorMessage,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
    FormLabel,
    Text,
} from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface FlexProps extends ChakraInputProps {
    name: string
    label?: string
    optional?: boolean
    mask?: string
    error?: any
    readOnly?: boolean
}

const InputBase = forwardRef<HTMLInputElement, FlexProps>((props, ref) => {
    const {
        name,
        label,
        mask = '',
        error = null,
        optional = false,
        width,
        readOnly = false,
        isDisabled,
        isReadOnly,
        ...rest
    } = props

    return (
        <FormControl
            position="relative"
            width={width}
            isInvalid={!!error}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly || readOnly}
        >
            {!!label && (
                <FormLabel htmlFor={name} fontSize="0.875rem" fontWeight="400" lineHeight="normal">
                    {label}
                </FormLabel>
            )}
            {optional && <Text fontSize="0.875rem" fontWeight="400" lineHeight="normal" />}

            <ChakraInput
                ref={ref}
                name={name}
                size="lg"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="1.5rem"
                color="gray.700"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="0.75rem"
                transition="all 0.2s"
                _focus={{ outline: 'none' }}
                _disabled={{ color: 'gray.400' }}
                _invalid={{ borderColor: 'yellow.500' }}
                _placeholder={{ color: isDisabled ? 'gray.300' : 'gray.400' }}
                _readOnly={{
                    borderColor: 'transparent',
                    userSelect: 'none',
                    pl: '0rem',
                }}
                {...(isDisabled
                    ? { _hover: {} }
                    : {
                          _hover: {
                              borderColor: isReadOnly || readOnly ? 'transparent' : 'gray.300',
                          },
                      })}
                {...rest}
            />
            <FormErrorMessage color="yellow.500">{error}</FormErrorMessage>
        </FormControl>
    )
})

// Definindo a propriedade displayName
InputBase.displayName = 'InputBase'

export const Input = InputBase as React.FC<FlexProps>
