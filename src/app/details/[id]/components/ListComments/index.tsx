import { ShowStars } from '@/components/ShowStars'
import { CommentsProps } from '@/hooks/useComments'
import { Avatar, Flex, GridItem, Text, Textarea } from '@chakra-ui/react'

interface ListCommentsProps {
    comment: CommentsProps
}

export function ListComments({ comment }: ListCommentsProps) {
    const firstName = comment.userName.split(' ')[0]
    const stars = comment.stars

    return (
        <GridItem display="flex" alignItems="center" gap="0.6rem">
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Avatar name={comment.userName} />
                <Text fontSize="0.875rem">{firstName}</Text>
            </Flex>
            <Flex flexDirection="column" w="100%" gap="0.5rem">
                <Textarea
                    border="1px solid #dbd7d7"
                    p="8px"
                    borderRadius="8px"
                    w="100%"
                    h="110px"
                    value={comment.comment}
                    resize="none"
                    readOnly
                />
                <ShowStars stars={stars} isUnique />
            </Flex>
        </GridItem>
    )
}
