/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { DeleteOneUseCase } from '@/usecases/Product/DeleteOne/DeleteOneUseCase'

export class DeleteOneController {
  constructor (
    private deleteOneUseCase: DeleteOneUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { title } = request.body
    try {
      const data = await this.deleteOneUseCase.execute({
        title: title,
        userId: request.userId
      })

      return response.status(201).send(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
