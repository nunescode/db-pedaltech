import Fornecedor from "App/Models/Fornecedor"

export default class FornecedorsController {
    async index({ response }) {
        // Listar todos os fornecedores
        const fornecedores = await Fornecedor.all()

        return response.json(fornecedores)
    }

    async show({ params, response }) {
        // Exibir um fornecedor específico por ID
        const fornecedor = await Fornecedor.find(params.id)

        if (!fornecedor) {
            return response.status(404).json({ message: 'Fornecedor não encontrado' })
        }

        return response.json(fornecedor)
    }

    async store({ request, response }) {
        // Criar um novo fornecedor a partir dos dados enviados pelo cliente
        const data = request.only(['nome', 'telefone', 'endereco'])
        const fornecedor = await Fornecedor.create(data)

        return response.status(201).json(fornecedor)
    }

    async update({ params, request, response }) {
        // Atualizar um fornecedor existente por ID
        const fornecedor = await Fornecedor.find(params.id)

        if (!fornecedor) {
            return response.status(404).json({ message: 'Fornecedor não encontrado' })
        }

        const data = request.only(['nome', 'cnpj', 'email', 'telefone', 'endereco'])
        fornecedor.merge(data)
        await fornecedor.save()

        return response.json(fornecedor)
    }

    async destroy({ params, response }) {
        // Excluir um fornecedor por ID
        const fornecedor = await Fornecedor.find(params.id)

        if (!fornecedor) {
            return response.status(404).json({ message: 'Fornecedor não encontrado' })
        }

        await fornecedor.delete()

        return response.status(204).send()
    }
}