import Produto from "App/Models/Produto"

export default class ProdutosController {
    async index({ response }) {
        // Listar todos os produtos
        const produtos = await Produto.all()

        return response.json(produtos)
    }

    async show({ params, response }) {
        // Exibir um produto específico por ID
        const produto = await Produto.find(params.id)

        if (!produto) {
            return response.status(404).json({ message: 'Produto não encontrado!' })
        }

        return response.json(produto)
    }

    async store({ request, response }) {
        // Criar um novo produto a partir dos dados enviados pelo cliente
        const data = request.only(['nome', 'descricao', 'preco', 'quantidade', 'fornecedor_id'])
        const produto = await Produto.create(data)

        return response.status(201).json(produto)
    }

    async update({ params, request, response }) {
        // Atualizar um produto existente por ID
        const produto = await Produto.find(params.id)

        if (!produto) {
            return response.status(404).json({ message: 'Produto não encontrado!' })
        }

        const data = request.only(['nome', 'descricao', 'preco', 'quantidade', 'fornecedor_id'])
        produto.merge(data)
        await produto.save()

        return response.json(produto)
    }

    async destroy({ params, response }) {
        // Excluir um produto por ID
        const produto = await Produto.find(params.id)

        if (!produto) {
            return response.status(404).json({ message: 'Produto não encontrado!' })
        }

        await produto.delete()

        return response.status(204).send()
    }
}
