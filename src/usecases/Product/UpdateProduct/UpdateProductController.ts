/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { UpdateProductUseCase } from '@/usecases/Product/UpdateProduct/UpdateProductUseCase'

export class UpdateProductController {
  constructor (
    private updateProductUseCase: UpdateProductUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { title, description, category, price } = request.body

    try {
      const data = await this.updateProductUseCase.execute({
        title,
        description,
        category,
        price,
        userId: request.userId
      })

      return response.status(201).json(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
