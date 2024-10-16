import SubTodo from '#models/sub_todo'
import type { HttpContext } from '@adonisjs/core/http'
export default class SubtodosController {

      public async storeSubTodo({ request, response }: HttpContext) {
      try {
      const inputs = request.all()
      console.log(inputs)
      const data = await SubTodo.create(inputs)
      return response.status(200).json({ data, msg: 'Successfull' })}
      catch (error) {
      return response.status(500).json({ error: 'Error Find' }) }}

      public async getSubTodo({response}:HttpContext){
      try{
      const getdata = await SubTodo.all()
      return response.status(200).json(getdata)}
      catch(error){
      return response.status(500).json({error:'sub-get-todo-erro-find'})}}

      public async subTodoUpdate({ params, request, response }: HttpContext) {
      const { id } = params
      const updateData = request.all()
      try {
      const dataUpdate = await SubTodo.findOrFail(id)
      dataUpdate.merge(updateData)
      await dataUpdate.save()
      return response.status(200).json(dataUpdate)}
      catch (error) {
      return response.status(500).json({ error: 'Failed' })  }}

      public async subTodoDelete({ request, response }: HttpContext) {
            const { ids } = request.only(['ids']) // Expecting an array of IDs
            try {
              // Delete items where the ID is in the list
              await SubTodo.query().whereIn('id', ids).delete()
              return response.status(200).json({ message: 'Items deleted successfully' })
            } catch (error) {
              console.error('Failed to delete items:', error)
              return response.status(500).json({ error: 'Failed to delete items' })
            }
          }
        
}




















/**
 * Show individual record
 */
// async show({ params }: HttpContext) {}

/**
 * Edit individual record
 */
// async edit({ params }: HttpContext) {}

/**
 * Handle form submission for the edit action
 */
// async update({ params, request }: HttpContext) {}

/**
 * Delete record
 */
// async destroy({ params }: HttpContext) {}
/**
 * Display a list of resource
 */
//  async index({}: HttpContext) {}
//  async create({}: HttpContext) {}
