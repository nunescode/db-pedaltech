import Funcionario from "App/Models/Funcionario"

export default class FuncionariosController {
    async index({ response }) {
        // Listar todos os funcionarios
        const funcionarios = await Funcionario.all()

        return response.json(funcionarios)
    }

    async show({ params, response }) {
        // Exibir um funcionario específico por ID
        const funcionario = await Funcionario.find(params.id)

        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado!' })
        }

        return response.json(funcionario)
    }

    async store({ request, response }) {
        // Criar um novo funcionario a partir dos dados enviados pelo cliente
        const data = request.only(['nome', 'cpf', 'telefone', 'salario', 'endereco', 'email'])
        const funcionario = await Funcionario.create(data)

        return response.status(201).json(funcionario)
    }

    async update({ params, request, response }) {
        // Atualizar um funcionario existente por ID
        const funcionario = await Funcionario.find(params.id)

        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado!' })
        }

        const data = request.only(['nome', 'cpf', 'telefone', 'salario', 'endereco', 'email'])
        funcionario.merge(data)
        await funcionario.save()

        return response.json(funcionario)
    }

    async destroy({ params, response }) {
        // Excluir um funcionario por ID
        const funcionario = await Funcionario.find(params.id)

        if (!funcionario) {
            return response.status(404).json({ message: 'Funcionário não encontrado!' })
        }

        await funcionario.delete()

        return response.status(204).send()
    }
}
