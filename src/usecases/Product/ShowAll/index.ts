import { ShowAllUseCase } from './ShowAllUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { ShowAllController } from '@/usecases/Product/ShowAll/ShowAllController'

const mongoProductsRepository = new MongoProductsRepository()

const showAllUseCase = new ShowAllUseCase(
  mongoProductsRepository
)

const showAllController = new ShowAllController(
  showAllUseCase
)

const TESTShowAllUseCase = new ShowAllUseCase(
  mongoProductsRepository
)

export { showAllController, TESTShowAllUseCase }
