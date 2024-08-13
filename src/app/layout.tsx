import type { Metadata } from 'next'
import { Providers } from './providers'
import { fonts } from '@/styles/themes/fonts'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
    title: 'Beleza Nordestina',
    description:
        'A loja de maquiagem oferece produtos de alta qualidade a preços justos, destacando a diversidade e autenticidade da beleza nordestina.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={fonts.inter.variable}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
