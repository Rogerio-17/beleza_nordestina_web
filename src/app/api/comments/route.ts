import { db } from '@/connection/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

export interface CommentsProps {
    id: string
    userName: string
    comment: string
    idProduct: string
    created_at: string
}

export async function GET() {
    const comments: CommentsProps[] = []

    const commentsRef = collection(db, 'comments')
    await getDocs(commentsRef)
        .then((commentsData) => {
            commentsData.forEach((comment) => {
                comments.push({
                    id: comment.id,
                    userName: comment.data().userName,
                    comment: comment.data().comment,
                    idProduct: comment.data().idProduct,
                    created_at: comment.data().created_at,
                })
            })
        })
        .catch((error) => {
            throw new Error(error)
        })

    return Response.json({
        comments,
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    const body: CommentsProps = data.comment

    const productRef = collection(db, 'comments')
    await addDoc(productRef, {
        userName: body.userName,
        comment: body.comment,
        idProduct: body.idProduct,
        created_at: new Date(),
    })
        .then((product) => {
            console.log('adicionado com sucesso!')
        })
        .catch((error) => {
            console.log('erro ao adicionar!')
        })

    return new Response('', {
        status: 201,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}
