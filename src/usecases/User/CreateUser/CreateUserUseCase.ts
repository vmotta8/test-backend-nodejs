/* eslint-disable no-useless-constructor */
import { ICreateUserRequestDTO } from '@/usecases/User/CreateUser/CreateUserDTO'
import { User } from '@/entities/User'
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { bcryptHelper } from '@/helpers/bcryptHelper'
import { jwtHelper } from '@/helpers/jwtHelper'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const user = new User(data)
    user.password = bcryptHelper.generateHash(user.password)

    const idAlreadyExists = await this.usersRepository.findById(user.id)
    if (idAlreadyExists) {
      throw new Error('Id already exists.')
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    await this.usersRepository.save(user)

    delete user.password
    const token = jwtHelper.generateToken(user.id)

    return { user, token }
  }
}
