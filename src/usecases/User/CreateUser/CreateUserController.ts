/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateUserUseCase } from '@/usecases/User/CreateUser/CreateUserUseCase'

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const data = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      return response.status(201).json(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
