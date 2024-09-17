import { db } from '@/connection/firebase'
import { CreateDataProductProps } from '@/hooks/useProducts'
import { addDoc, collection, getDocs } from 'firebase/firestore'

export interface ProductProps {
    brand: string
    title: string
    category: string
    available: number
    description: string
    id: string
    cod_product: string
    amount: number
    images: string[]
    quantity?: number
    showItem: boolean
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
                    id: prod.id,
                    cod_product: prod.data().cod_product,
                    amount: prod.data().amount,
                    images: prod.data().images,
                    available: prod.data().available,
                    showItem: prod.data().showItem,
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
    const body: CreateDataProductProps = data.product

    //adicionar a validação dos dados recebidos

    const productRef = collection(db, 'products')
    await addDoc(productRef, {
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
