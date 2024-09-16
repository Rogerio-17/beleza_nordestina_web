import { ButtonComponent } from '@/components/ButtonComponent'
import { Input } from '@/components/InputComponent'
import { SetStars } from '@/components/SetStars'
import { CreateCommentsProps, useComments } from '@/hooks/useComments'
import { Flex, FormControl, FormErrorMessage, Text, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export const commentSchema = z.object({
    userName: z.string().min(1, { message: 'Digite seu nome' }),
    comment: z.string().min(1, { message: 'Digite um comentario' }),
})

export type CommentFormData = z.infer<typeof commentSchema>

interface AddCommentProps {
    idProduct: string
}

export function AddComments({ idProduct }: AddCommentProps) {
    const [stars, setStars] = useState<number | null>(null)
    const { createComment } = useComments()

    function handleSetStars(star: number) {
        setStars(star)
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema),
    })

    console.log(stars)

    async function handleCreateComment(data: CommentFormData) {
        const commentData: CreateCommentsProps = {
            userName: data.userName,
            comment: data.comment,
            stars: stars!,
            idProduct: idProduct,
        }

        await createComment({ comment: commentData })

        setValue('comment', '')
        setValue('userName', '')
        setStars(null)
    }

    return (
        <Flex as="form" flexDirection="column" onSubmit={handleSubmit(handleCreateComment)}>
            <Text
                fontSize={{ base: '1.5rem', lg: '2rem' }}
                textAlign={{ base: 'left', lg: 'center' }}
                lineHeight="normal"
                mb="1rem"
                fontWeight="bold"
            >
                Avalie o produto
            </Text>
            <Flex flexDirection="column" gap="0.5rem">
                <Flex flexDirection="column">
                    <Input
                        label="Nome:"
                        placeholder="Beleza Nodestina"
                        focusBorderColor="green"
                        borderRadius="6px"
                        w={{ base: '100%', lg: '25rem' }}
                        {...register('userName')}
                        error={errors.userName?.message}
                    />
                </Flex>

                <FormControl isInvalid={!!errors.comment?.message}>
                    <Textarea
                        resize="none"
                        w="100%"
                        focusBorderColor="green"
                        border="1px solid #dbd7d7"
                        placeholder="Digite seu comentario..."
                        borderRadius="6px"
                        _placeholder={{ color: 'gray.400' }}
                        _invalid={{ borderColor: 'yellow.500' }}
                        {...register('comment')}
                    />

                    <FormErrorMessage color="yellow.500">
                        {errors.comment?.message}
                    </FormErrorMessage>
                </FormControl>

                <SetStars handleSetStars={handleSetStars} stars={stars} />

                <Flex w="100%" justifyContent="right">
                    <ButtonComponent
                        w="10rem"
                        type="submit"
                        isLoading={isSubmitting}
                        isDisabled={!stars}
                        _disabled={{
                            opacity: 0.5,
                            cursor: 'not-allowed',
                        }}
                        _active={{
                            _active: 'none',
                        }}
                    >
                        Comentar
                    </ButtonComponent>
                </Flex>
            </Flex>
        </Flex>
    )
}
