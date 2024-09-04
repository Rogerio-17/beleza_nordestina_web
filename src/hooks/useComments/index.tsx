'use client'
import { api } from '@/services/api'
import { useCallback, useContext, useEffect, useState, createContext } from 'react' // Corrigido: importar createContext de 'react'

export interface CommentsProps {
    id: string
    userName: string
    comment: string
    idProduct: string
    created_at: string
}

export interface CreateCommentsProps {
    userName: string
    comment: string
    idProduct: string
}

export interface CreateCommentProps {
    comment: CreateCommentsProps
}

interface CommentsContextType {
    comments: CommentsProps[]
    createComment: ({ comment }: CreateCommentProps) => void
}

const CommentsContext = createContext<CommentsContextType>({} as CommentsContextType)

export const CommentsProvider = ({ children }: { children: React.ReactNode }) => {
    const [update, setUpdate] = useState(true)
    const [comments, setComments] = useState<CommentsProps[]>([])

    const getComments = useCallback(async () => {
        try {
            const response = await api.get('/comments')
            setComments(response.data.comments)
        } catch (err) {
            throw new Error(`Error ao cadastrar produto`)
        }
    }, [])

    useEffect(() => {
        if (update) {
            getComments()
        }
        setUpdate(false)
    }, [update])

    const createComment = useCallback(async ({ comment }: CreateCommentProps) => {
        try {
            await api.post('/comments', {
                comment,
            })
            setUpdate(true)
        } catch (err) {
            throw new Error(`Erro para realizar o comentario.`)
        }
    }, [])

    return (
        <CommentsContext.Provider
            value={{
                comments,
                createComment,
            }}
        >
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => useContext(CommentsContext)
