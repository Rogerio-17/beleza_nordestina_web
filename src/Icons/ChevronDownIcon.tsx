import { Icon, IconProps } from '@chakra-ui/react'

export function ChevronDownIcon(props: IconProps) {
    return (
        <Icon
            width="16px"
            height="16px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </Icon>
    )
}
