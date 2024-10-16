import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()  // Title column which cannot be null
      table.text('content').notNullable()  // Content column which cannot be null
      table.timestamps()  // Created at and updated at timestamps

     
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}