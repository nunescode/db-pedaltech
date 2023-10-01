/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('clientes', 'ClientesController.index')
  Route.get('clientes/:id', 'ClientesController.show')
  Route.post('clientes', 'ClientesController.store')
  Route.put('clientes/:id', 'ClientesController.update')
  Route.delete('clientes/:id', 'ClientesController.destroy')
})

Route.group(() => {
  Route.get('funcionarios', 'FuncionariosController.index')
  Route.get('funcionarios/:id', 'FuncionariosController.show')
  Route.post('funcionarios', 'FuncionariosController.store')
  Route.put('funcionarios/:id', 'FuncionariosController.update')
  Route.delete('funcionarios/:id', 'FuncionariosController.destroy')
})

Route.group(() => {
  Route.get('fornecedores', 'FornecedoresController.index')
  Route.get('fornecedores/:id', 'FornecedoresController.show')
  Route.post('fornecedores', 'FornecedoresController.store')
  Route.put('fornecedores/:id', 'FornecedoresController.update')
  Route.delete('fornecedores/:id', 'FornecedoresController.destroy')
})

Route.group(() => {
  Route.get('produtos', 'ProdutosController.index')
  Route.get('produtos/:id', 'ProdutosController.show')
  Route.post('produtos', 'ProdutosController.store')
  Route.put('produtos/:id', 'ProdutosController.update')
  Route.delete('produtos/:id', 'ProdutosController.destroy')
})

Route.group(() => {
  Route.get('servicos', 'ServicosController.index')
  Route.get('servicos/:id', 'ServicosController.show')
  Route.post('servicos', 'ServicosController.store')
  Route.put('servicos/:id', 'ServicosController.update')
  Route.delete('servicos/:id', 'ServicosController.destroy')
})

Route.group(() => {
  Route.get('vendas', 'VendasController.index')
  Route.get('vendas/:id', 'VendasController.show')
  Route.post('vendas', 'VendasController.store')
  Route.put('vendas/:id', 'VendasController.update')
  Route.delete('vendas/:id', 'VendasController.destroy')
})



