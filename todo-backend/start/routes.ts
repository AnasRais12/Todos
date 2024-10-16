/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {hello: 'world',}})

router.post('/todoStore','#controllers/todo_tables_controller.todoStore')
router.get('/todoGet','#controllers/todo_tables_controller.todoGet')
router.put('/todoUpdate/:id','#controllers/todo_tables_controller.todoUpdate')
router.delete('/allDelete','#controllers/todo_tables_controller.allDelete')
router.delete('/batchDelete','#controllers/todo_tables_controller.batchDelete')
router.post('/todoDrag','#controllers/todo_tables_controller.updateOrder')



router.post('/subtodos','#controllers/subtodos_controller.storeSubTodo')
router.get('/getsubtodos','#controllers/subtodos_controller.getSubTodo')
router.put('/updatesubtodos/:id','#controllers/subtodos_controller.subTodoUpdate')
router.delete('/deletesub','#controllers/subtodos_controller.subTodoDelete')






