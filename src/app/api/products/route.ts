import { db } from '@/connection/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

export interface ProductProps {
    brand: string
    title: string
    category: string
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
}

export async function GET() {
    const products: ProductProps[] = []

    const productRef = collection(db, 'products')
    await getDocs(productRef)
        .then((product) => {
            product.forEach((prod) => {
                products.push({
                    brand: prod.data().brand,
                    title: prod.data().title,
                    category: prod.data().category,
                    description: prod.data().description,
                    id: prod.data().id,
                    cod_product: prod.data().cod_product,
                    amount: prod.data().amount,
                    images: prod.data().images,
                })
            })
        })
        .catch((error) => {
            throw new Error(error)
        })

    return Response.json({
        products,
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    const body: ProductProps = data.product

    //adicionar a validação dos dados recebidos

    const productRef = collection(db, 'products')
    await addDoc(productRef, {
        brand: body.brand,
        title: body.title,
        category: body.category,
        description: body.description,
        id: body.id,
        cod_product: body.cod_product,
        amount: body.amount,
        images: body.images,
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
