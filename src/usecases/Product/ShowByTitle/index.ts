import { ShowByTitleUseCase } from './ShowByTitleUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { ShowByTitleController } from '@/usecases/Product/ShowByTitle/ShowByTitleController'

const mongoProductsRepository = new MongoProductsRepository()

const showByTitleUseCase = new ShowByTitleUseCase(
  mongoProductsRepository
)

const showByTitleController = new ShowByTitleController(
  showByTitleUseCase
)

const TESTShowByTitleUseCase = new ShowByTitleUseCase(
  mongoProductsRepository
)

export { showByTitleController, TESTShowByTitleUseCase }
