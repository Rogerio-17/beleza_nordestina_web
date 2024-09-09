import { ProductProps } from '@/hooks/useProducts'

export function generateMessageRequest(produtos: ProductProps[]) {
    let mensagem = 'Olá! Gostaria de fazer um pedido com os seguintes itens:\n\n'
    let total = 0

    produtos.forEach((produto, index) => {
        const subtotal = produto.amount * produto?.quantity!
        total += subtotal
        mensagem += `${index + 1}. *Produto:* ${produto.title}\n`
        mensagem += `   *Marca:* ${produto.brand}\n`
        mensagem += `   *Categoria:* ${produto.category}\n`
        mensagem += `   *Descrição:* ${produto.description}\n`
        mensagem += `   *Quantidade:* ${produto.quantity}\n`
        mensagem += `   *Preço Unitário:* R$ ${produto.amount.toFixed(2)}\n`
        mensagem += `   *Subtotal:* R$ ${subtotal.toFixed(2)}\n\n`
    })

    mensagem += `---\n*Total do Pedido:* R$ ${total.toFixed(2)}\n\n`
    mensagem += 'Por favor, confirme o pedido e as instruções para o pagamento. Obrigado!'

    return encodeURIComponent(mensagem) // Codifica a mensagem para ser usada na URL do WhatsApp
}
