import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import TodoTable from './todo_table.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class SubTodo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare add_new: string

  @column({})
  declare status: string

  @column ({})
  declare headline:string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
 

  @column({})
  declare order:number
  
  @column()
  declare todo_id: number  // Make sure this matches the column name in the migration

  @belongsTo(() => TodoTable, {
    foreignKey: 'todo_id'  // This should match the column name
  })
  declare todoTable: BelongsTo<typeof TodoTable>
}
