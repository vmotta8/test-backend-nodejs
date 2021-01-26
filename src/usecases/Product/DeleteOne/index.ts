import { DeleteOneUseCase } from './DeleteOneUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { DeleteOneController } from '@/usecases/Product/DeleteOne/DeleteOneController'

const mongoProductsRepository = new MongoProductsRepository()

const deleteOneUseCase = new DeleteOneUseCase(
  mongoProductsRepository
)

const deleteOneController = new DeleteOneController(
  deleteOneUseCase
)

const TESTDeleteOneUseCase = new DeleteOneUseCase(
  mongoProductsRepository
)

export { deleteOneController, TESTDeleteOneUseCase }
