import Venda from "App/Models/Venda"

export default class VendasController {
    async index({ response }) {
        // Listar todas as vendas
        const vendas = await Venda.all()

        return response.json(vendas)
    }

    async show({ params, response }) {
        // Exibir uma venda específica por ID
        const venda = await Venda.find(params.id)

        if (!venda) {
            return response.status(404).json({ message: 'Venda não encontrada!' })
        }

        return response.json(venda)
    }

    async store({ request, response }) {
        // Criar uma nova venda a partir dos dados enviados pelo cliente
        const data = request.only(['data', 'cliente_id', 'valor', 'forma_pagamento', 'funcionario_id' ])
        const venda = await Venda.create(data)

        return response.status(201).json(venda)
    }

    async destroy({ params, response }) {
        // Excluir uma venda por ID
        const venda = await Venda.find(params.id)

        if (!venda) {
            return response.status(404).json({ message: 'Venda não encontrada!' })
        }

        await venda.delete()

        return response.status(204).send()
    }
}
