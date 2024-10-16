import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sub_todos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('todo_id').unsigned().references('id').inTable('todo_tables').onDelete('CASCADE');
      table.string('add_new').notNullable()
      table.string('status').notNullable()
      table.integer('order').defaultTo(0)

      table.time('headline')
      // table.tim
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
