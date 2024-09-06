import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Box, BoxProps, Button, Flex } from '@chakra-ui/react'

export function Slider(props: BoxProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1.5,
        },
    })

    return (
        <Box ref={sliderRef} className="keen-slider" position="absolute" {...props}>
            {props.children}
            <Flex
                justifyContent="center"
                mt={4}
                position="absolute"
                bottom="10px"
                width="100%"
                gap="0.5rem"
            >
                {Array.from({
                    length: slider?.current?.track.details.slides.length || 0,
                }).map((_, idx) => (
                    <Button
                        key={idx}
                        w="14px"
                        minW="10px"
                        h="14px"
                        lineHeight="0px"
                        p={0}
                        borderRadius="50%"
                        backgroundColor={currentSlide === idx ? 'gray.400' : 'gray.200'}
                        onClick={() => {
                            slider.current?.moveToIdx(idx)
                        }}
                    />
                ))}
            </Flex>
        </Box>
    )
}
