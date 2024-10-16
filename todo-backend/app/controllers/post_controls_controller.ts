import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'
import Comment from '#models/comment'
export default class PostControlsController {
  public async createPost({ response }: HttpContext) {
    try {
      // Create a new post
      const post = await Post.create({
        title: 'My First Post',
        content: 'This is the content of the post',
      })

      // Create comments for the post
      await Comment.createMany([
        { postId: post.id, content: 'First comment' },
        { postId: post.id, content: 'Second comment' },
      ])

      return response.send('Post and comments created successfully')
    } catch (error) {
      return response.status(500).send('Error creating post and comments')
    }
  }

  public async fetchPost({ params, response }: HttpContext) {
    try {
      // Fetch the post with its comments
      const fetchedPost = await Post.query()
        .preload('comments') // Preload the comments relationship
        .where('id', params.id)
        .firstOrFail()

      return response.json(fetchedPost)
    } catch (error) {
      return response.status(404).send('Post not found')
    }
  }


  //  Fetch All Post 
  public async fetchallPost({ response }: HttpContext) {
    try {
      // Fetch the post with its comments
      const fetchedPost = await Post.query().preload('comments')

      return response.json(fetchedPost)
    } catch (error) {
      return response.status(404).send('Post not found')
    }
  }
}
