import { CreateUserUseCase } from './CreateUserUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { CreateUserController } from '@/usecases/User/CreateUser/CreateUserController'

const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const TESTCreateUserUseCase = new CreateUserUseCase(
  mongoUsersRepository
)

export { createUserController, TESTCreateUserUseCase }
