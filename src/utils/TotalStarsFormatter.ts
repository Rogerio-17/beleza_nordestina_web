import { CommentsProps } from '@/app/api/comments/route'

interface ToTalStarsProps {
    idProduct: string
    comments: CommentsProps[]
}

export function ToTalStars({ comments, idProduct }: ToTalStarsProps) {
    const productComments = comments.filter((comment) => comment.idProduct === idProduct)
    const totalStars = productComments.reduce((acc, comment) => acc + comment.stars, 0)
    const averageStars =
        productComments.length > 0 ? Number((totalStars / productComments.length).toFixed(1)) : 0.0

    const stars = Math.round(averageStars)

    return { stars }
}
