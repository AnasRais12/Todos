import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo} from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.js'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  

  @column()
  declare postId: number

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Post)
  declare post: BelongsTo<typeof Post>

}