import type { HttpContext } from '@adonisjs/core/http'
import TodoTable from '#models/todo_table'
export default class TodoTablesController {
  public async todoStore({ request, response }: HttpContext) {
    try {
      const todoRequest = request.all()
      const storeCreate = await TodoTable.create(todoRequest)
      return response.status(201).json(storeCreate)
    } catch (error) {
      console.error('Error in todoStore:', error) // Log the error
      return response.status(500).json({ error: 'Failed to create todo item' })
    }
  }
  public async todoGet({ response }: HttpContext) {
    try {
      const getData = await TodoTable.query().orderBy('order', 'asc').preload('subTodos')
      return response.json(getData)
    } catch (error) {
      console.error('Failed to fetch todos:', error)
      return response.status(500).json({ error: error.message })
    }
  }
   
  public async todoUpdate({ params, request, response }: HttpContext) {
    const { id } = params
    const updateData = request.all()
    try {
      const dataUpdate = await TodoTable.findOrFail(id)
      dataUpdate.merge(updateData)

      await dataUpdate.save()
      return response.status(200).json(dataUpdate)
    } catch (error) {
      return response.status(500).json({ error: 'Failed' })
    }
  }

  public async allDelete({ response }: HttpContext) {
    try {
      await TodoTable.query().delete()
      return response.status(200).json({ messages: 'All Items Deleted' })
    } catch (error) {
      console.error('Failed to be update')
      return response.status(500).json({ error: 'Error Find' })
    }
  }

  public async batchDelete({ request, response }: HttpContext) {
    const { ids } = request.only(['ids']) // Expecting an array of IDs

    try {
      // Delete items where the ID is in the list
      await TodoTable.query().whereIn('id', ids).delete()
      return response.status(200).json({ message: 'Items deleted successfully' })
    } catch (error) {
      console.error('Failed to delete items:', error)
      return response.status(500).json({ error: 'Failed to delete items' })
    }
  }
  public async updateOrder({ request, response }: HttpContext) {
    const { items } = request.body() // Expecting an array of objects with `id` and `order` properties

    try {
      // Har item ko update karo
      for (const item of items) {
        const todo = await TodoTable.findOrFail(item.id) // Item ko find karo
        todo.merge({ order: item.order }) // Order update karo
        await todo.save() // Save karo changes
      }

      return response.status(200).json({ message: 'Items updated successfully' })
    } catch (error) {
      console.error('Failed to update items:', error)
      return response.status(500).json({ error: 'Failed to update items' })
    }
  }
}

// if (!Array.isArray(ids) || ids.length === 0) {
//   return response.status(400).json({ error: 'No IDs provided' });
// //
