// Importe os módulos necessários
import { useRouter } from 'next/router'
import axios from 'axios';

// Função para lidar com solicitações GET e DELETE
export default async function handler(req, res) {
  const { id } = req.query; // Obtenha o ID do cliente a partir dos parâmetros da rota

  if (req.method === 'GET') {
    try {
      // Realize uma chamada GET para obter os detalhes do cliente
      const response = await axios.get(`http://127.0.0.1:3333/clientes/${id}`);

      // Verifique se o cliente foi encontrado
      if (!response.data) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }

      // Retorne os detalhes do cliente como JSON
      return res.status(200).json(response.data);
    } catch (error) {
      // Em caso de erro, retorne uma resposta de erro
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else if (req.method === 'DELETE') {
    try {
      // Realize uma chamada DELETE para excluir o cliente
      const response = await axios.delete(`http://127.0.0.1:3333/clientes/${id}`);

      // Verifique se o cliente foi excluído com sucesso
      if (response.status === 204) {
        return res.status(204).end();
      } else if (response.status === 404) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      } else {
        return res.status(500).json({ message: 'Erro ao excluir o cliente' });
      }
    } catch (error) {
      // Em caso de erro, retorne uma resposta de erro
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    // Se o método HTTP não for GET ou DELETE, retorne uma resposta de método não permitido
    return res.status(405).json({ message: 'Método não permitido' });
  }
}
