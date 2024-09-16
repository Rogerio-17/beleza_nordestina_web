import { StarIcon } from '@/Icons/StarIcon'
import { Flex, FlexProps, Text } from '@chakra-ui/react'

interface ShowStarsProps extends FlexProps {
    stars: number
    isUnique?: boolean
}

export function ShowStars({ stars, isUnique, ...props }: ShowStarsProps) {
    return (
        <Flex gap="0.2rem" color="#292929" alignItems="center" {...props}>
            {!isUnique ? (
                <Text fontWeight="500" fontSize="0.85rem" lineHeight="normal">
                    Avaliações:
                </Text>
            ) : (
                <Text fontWeight="500" fontSize="0.85rem" lineHeight="normal">
                    Avaliação:
                </Text>
            )}

            <Flex>
                <StarIcon
                    color={stars >= 1 ? '#eeff00' : '#818181'}
                    fill={stars >= 1 ? '#eeff00' : 'transparent'}
                />
                <StarIcon
                    color={stars >= 2 ? '#eeff00' : '#818181'}
                    fill={stars >= 2 ? '#eeff00' : 'transparent'}
                />
                <StarIcon
                    color={stars >= 3 ? '#eeff00' : '#818181'}
                    fill={stars >= 3 ? '#eeff00' : 'transparent'}
                />
                <StarIcon
                    color={stars >= 4 ? '#eeff00' : '#818181'}
                    fill={stars >= 4 ? '#eeff00' : 'transparent'}
                />
                <StarIcon
                    color={stars >= 5 ? '#eeff00' : '#818181'}
                    fill={stars >= 5 ? '#eeff00' : 'transparent'}
                />
            </Flex>
            <Text fontSize={{ base: '0.75rem', lg: '0.875rem' }} lineHeight="normal">
                {stars}.0
            </Text>
        </Flex>
    )
}
