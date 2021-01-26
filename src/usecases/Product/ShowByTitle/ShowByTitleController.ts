/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ShowByTitleUseCase } from '@/usecases/Product/ShowByTitle/ShowByTitleUseCase'

export class ShowByTitleController {
  constructor (
    private showByTitleUseCase: ShowByTitleUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { title } = request.body
    try {
      const data = await this.showByTitleUseCase.execute({
        title: title,
        userId: request.userId
      })

      return response.status(201).send(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
