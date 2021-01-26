import { AddProductUseCase } from './AddProductUseCase'
import { MongoProductsRepository } from '@/repositories/implementations/MongoProductsRepository'
import { AddProductController } from '@/usecases/Product/AddProduct/AddProductController'

const mongoProductsRepository = new MongoProductsRepository()

const addProductUseCase = new AddProductUseCase(
  mongoProductsRepository
)

const addProductController = new AddProductController(
  addProductUseCase
)

const TESTAddProductUseCase = new AddProductUseCase(
  mongoProductsRepository
)

export { addProductController, TESTAddProductUseCase }
