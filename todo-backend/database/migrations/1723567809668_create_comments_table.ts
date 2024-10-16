import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')  // Primary key column with auto-increment
      table.integer('post_id').unsigned()  // Foreign key referencing 'posts' table
      table.text('content').notNullable()  // Content column which cannot be nul
      table.timestamps()  // Created at and updated at timestamps
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}