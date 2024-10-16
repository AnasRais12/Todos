import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'todo_tables'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('add').notNullable()
      table.string('full').notNullable()
      table.string('password').notNullable()
      table.date('timeline')
      table.integer('order').defaultTo(0)
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}