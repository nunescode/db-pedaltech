import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('data').notNullable(),
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable(),
      table.integer('valor').notNullable(),
      table.string('forma_pagamento'),
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
