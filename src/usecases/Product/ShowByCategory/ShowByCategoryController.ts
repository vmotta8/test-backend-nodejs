/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ShowByCategoryUseCase } from '@/usecases/Product/ShowByCategory/ShowByCategoryUseCase'

export class ShowByCategoryController {
  constructor (
    private showByCategoryUseCase: ShowByCategoryUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { category } = request.body
    try {
      const data = await this.showByCategoryUseCase.execute({
        category: category,
        userId: request.userId
      })

      return response.status(201).send(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
