import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import SubTodo from './sub_todo.js'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'


const AuthFinder = withAuthFinder(()=> hash.use('scrypt'),{
  uids: ['add'],
  passwordColumnName: 'password'
})
export default class TodoTable extends compose(BaseModel,AuthFinder)  {
  @column({ isPrimary: true })
  declare id: number

  @column({})
  declare add: string

  @column({})
  declare full: string

  @column({serializeAs:null})

  declare password: String

  @column({})
  declare timeline:Date

  @column({})
  declare order:number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => SubTodo, {
    foreignKey: 'todo_id'  // This should match the column name in the SubTodo model
  })
  declare subTodos: HasMany<typeof SubTodo>
}
