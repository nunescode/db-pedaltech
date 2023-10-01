import Cliente from '../../Models/Cliente'

export default class ClientesController {
  async index({ response }) {
    // Listar todos os clientes
    const clientes = await Cliente.all()

    return response.json(clientes)
  }

  async show({ params, response }) {
    // Exibir um cliente específico por ID
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).json({ message: 'Clientes não encontrados!' })
    }
    return response.json(cliente)
  }

  async store({ request, response }) {
    // Criar um novo cliente a partir dos dados enviados pelo cliente
    const data = request.only(['nome', 'telefone', 'endereco', 'cpf', 'email'])
    const cliente = await Cliente.create(data)

    return response.status(201).json(cliente)
  }

  async update({ params, request, response }) {
    // Atualizar um cliente existente por ID
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado!' })
    }

    const data = request.only(['nome', 'telefone', 'endereco', 'cpf', 'email'])
    cliente.merge(data)
    await cliente.save()

    return response.json(cliente)
  }

  async destroy({ params, response }) {
    // Excluir um cliente por ID
    const cliente = await Cliente.find(params.id)

    if (!cliente) {
      return response.status(404).json({ message: 'Cliente não encontrado!' })
    }

    await cliente.delete()

    return response.status(204).send()
  }
}
