/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ShowAllUseCase } from '@/usecases/Product/ShowAll/ShowAllUseCase'

export class ShowAllController {
  constructor (
    private showAllUseCase: ShowAllUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.showAllUseCase.execute({
        userId: request.userId
      })

      return response.status(201).send(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
