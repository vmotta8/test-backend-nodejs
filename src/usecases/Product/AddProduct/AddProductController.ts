/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { AddProductUseCase } from '@/usecases/Product/AddProduct/AddProductUseCase'

export class AddProductController {
  constructor (
    private addProductUseCase: AddProductUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { title, description, category, price } = request.body

    try {
      const data = await this.addProductUseCase.execute({
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
