import { Icon, IconProps } from '@chakra-ui/react'

export function PlusIcon(props: IconProps) {
    return (
        <Icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            {...props}
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </Icon>
    )
}
