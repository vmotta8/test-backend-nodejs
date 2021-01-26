/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { EditCategoryUseCase } from '@/usecases/Product/EditCategory/EditCategoryUseCase'

export class EditCategoryController {
  constructor (
    private editCategoryUseCase: EditCategoryUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { category, newCategory } = request.body

    try {
      const data = await this.editCategoryUseCase.execute({
        category,
        newCategory,
        userId: request.userId
      })

      return response.status(201).send(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
