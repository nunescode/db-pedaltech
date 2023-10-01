import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      // Faça uma chamada GET para a rota correspondente no servidor Adonis.js
      const response = await axios.get('http://127.0.0.1:3333/clientes');

      // Retorna a resposta do servidor Adonis.js como resposta desta API
      res.status(response.status).json(response.data);
    } catch (error) {
      // Em caso de erro, retorne um status de erro e uma mensagem
      res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
  } else if (req.method === 'POST') {
    try {
      // Dados do novo cliente a serem inseridos
      const novoCliente = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cpf: req.body.cpf,
        email: req.body.email,
      };

      // Faça uma chamada POST para a rota correspondente no servidor Adonis.js
      const response = await axios.post('http://127.0.0.1:3333/clientes', novoCliente);

      // Retorna a resposta do servidor Adonis.js como resposta desta API
      res.status(response.status).json(response.data);
    } catch (error) {
      // Em caso de erro, retorne um status de erro e uma mensagem
      res.status(500).json({ message: 'Erro ao adicionar o cliente' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // O ID do cliente a ser excluído
      const clienteId = req.body.id;

      // Faça uma chamada DELETE para a rota correspondente no servidor Adonis.js
      const response = await axios.delete(`http://127.0.0.1:3333/clientes/${clienteId}`);

      // Retorna a resposta do servidor Adonis.js como resposta desta API
      res.status(response.status).json(response.data);
    } catch (error) {
      // Em caso de erro, retorne um status de erro e uma mensagem
      res.status(500).json({ message: 'Erro ao excluir o cliente' });
    }
  } else {
    // Se a solicitação não for do tipo GET, POST ou DELETE, retorne um erro 405 (Método não permitido)
    res.status(405).end();
  }
};
