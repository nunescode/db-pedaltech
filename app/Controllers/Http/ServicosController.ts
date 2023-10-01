import Servico from "App/Models/Servico"

export default class ServicosController {
    async index({ response }) {
        // Listar todos os serviços
        const servicos = await Servico.all()

        return response.json(servicos)
    }

    async show({ params, response }) {
        // Exibir um serviço específico por ID
        const servico = await Servico.find(params.id)

        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }

        return response.json(servico)
    }

    async store({ request, response }) {
        // Criar um novo serviço a partir dos dados enviados pelo cliente
        const data = request.only(['nome', 'tipo_servico', 'data', 'status'])
        const servico = await Servico.create(data)

        return response.status(201).json(servico)
    }

    async update({ params, request, response }) {
        // Atualizar um serviço existente por ID
        const servico = await Servico.find(params.id)

        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }

        const data = request.only(['nome', 'descricao', 'preco'])
        servico.merge(data)
        await servico.save()

        return response.json(servico)
    }

    async destroy({ params, response }) {
        // Excluir um serviço por ID
        const servico = await Servico.find(params.id)

        if (!servico) {
            return response.status(404).json({ message: 'Serviço não encontrado' })
        }

        await servico.delete()

        return response.status(204).send()
    }
}
