import { UpdateProductUseCase } from './UpdateProductUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { UpdateProductController } from '@/usecases/Product/UpdateProduct/UpdateProductController'

const mongoProductsRepository = new MongoProductsRepository()

const updateProductUseCase = new UpdateProductUseCase(
  mongoProductsRepository
)

const updateProductController = new UpdateProductController(
  updateProductUseCase
)

const TESTUpdateProductUseCase = new UpdateProductUseCase(
  mongoProductsRepository
)

export { updateProductController, TESTUpdateProductUseCase }
