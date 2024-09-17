import { db } from '@/connection/firebase'
import { CreateDataProductProps } from '@/hooks/useProducts'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'

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

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const id = params.id
    const data = await request.json()
    const body: CreateDataProductProps = data.product

    let status = 201

    const productRef = doc(db, 'products', id)
    await updateDoc(productRef, {
        brand: body.brand,
        title: body.title,
        category: body.category,
        description: body.description,
        cod_product: body.cod_product,
        amount: body.amount,
        images: body.images,
        available: body.available,
        showItem: body.showItem,
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
