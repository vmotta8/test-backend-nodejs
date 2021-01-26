import { EditCategoryUseCase } from './EditCategoryUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { EditCategoryController } from '@/usecases/Product/EditCategory/EditCategoryController'

const mongoProductsRepository = new MongoProductsRepository()

const editCategoryUseCase = new EditCategoryUseCase(
  mongoProductsRepository
)

const editCategoryController = new EditCategoryController(
  editCategoryUseCase
)

const TESTEditCategoryUseCase = new EditCategoryUseCase(
  mongoProductsRepository
)

export { editCategoryController, TESTEditCategoryUseCase }
