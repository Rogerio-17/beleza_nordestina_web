import { PageDetails } from './components/pageDetails'

interface DetailsProps {
    params: {
        id: string
    }
}

export default function Details({ params }: DetailsProps) {
    return <PageDetails params={params} />
}
