import { db } from '@/connection/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    let status = 201

    const productRef = doc(db, 'products', id)
    await deleteDoc(productRef)
        .then((product) => {
            console.log('Deletado com sucesso!')
            status = 201
        })
        .catch((error) => {
            console.log('erro ao deletar!')
            status = 500
        })

    return new Response('', {
        status: status,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}
