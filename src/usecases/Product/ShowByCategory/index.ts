import { ShowByCategoryUseCase } from './ShowByCategoryUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { ShowByCategoryController } from '@/usecases/Product/ShowByCategory/ShowByCategoryController'

const mongoProductsRepository = new MongoProductsRepository()

const showByCategoryUseCase = new ShowByCategoryUseCase(
  mongoProductsRepository
)

const showByCategoryController = new ShowByCategoryController(
  showByCategoryUseCase
)

const TESTShowByCategoryUseCase = new ShowByCategoryUseCase(
  mongoProductsRepository
)

export { showByCategoryController, TESTShowByCategoryUseCase }
