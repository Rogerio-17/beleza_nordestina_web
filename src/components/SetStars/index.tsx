import { StarIcon } from '@/Icons/StarIcon'
import { Flex, FlexProps, Text } from '@chakra-ui/react'

interface SetStarsProps extends FlexProps {
    handleSetStars: (star: number) => void
    stars: number | null
}

export function SetStars({ handleSetStars, stars, ...props }: SetStarsProps) {
    return (
        <Flex gap="0.2rem" color="#292929" alignItems="center" {...props}>
            <Text fontSize="0.875rem" fontWeight="400" lineHeight="normal">
                Nota:
            </Text>
            <StarIcon
                color={stars && stars >= 1 ? '#eeff00' : '#818181'}
                fill={stars && stars >= 1 ? '#eeff00' : 'transparent'}
                w="32px"
                h="32px"
                onClick={() => handleSetStars(1)}
                _hover={{ cursor: 'pointer' }}
            />
            <StarIcon
                color={stars && stars >= 2 ? '#eeff00' : '#818181'}
                fill={stars && stars >= 2 ? '#eeff00' : 'transparent'}
                w="32px"
                h="32px"
                onClick={() => handleSetStars(2)}
                _hover={{ cursor: 'pointer' }}
            />
            <StarIcon
                color={stars && stars >= 3 ? '#eeff00' : '#818181'}
                fill={stars && stars >= 3 ? '#eeff00' : 'transparent'}
                w="32px"
                h="32px"
                onClick={() => handleSetStars(3)}
                _hover={{ cursor: 'pointer' }}
            />
            <StarIcon
                color={stars && stars >= 4 ? '#eeff00' : '#818181'}
                fill={stars && stars >= 4 ? '#eeff00' : 'transparent'}
                w="32px"
                h="32px"
                onClick={() => handleSetStars(4)}
                _hover={{ cursor: 'pointer' }}
            />
            <StarIcon
                color={stars && stars >= 5 ? '#eeff00' : '#818181'}
                fill={stars && stars >= 5 ? '#eeff00' : 'transparent'}
                w="32px"
                h="32px"
                onClick={() => handleSetStars(5)}
                _hover={{ cursor: 'pointer' }}
            />
        </Flex>
    )
}
