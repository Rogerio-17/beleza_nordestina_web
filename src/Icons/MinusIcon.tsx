import { Icon, IconProps } from '@chakra-ui/react'

export function MiniusIcon(props: IconProps) {
    return (
        <Icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            {...props}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </Icon>
    )
}
