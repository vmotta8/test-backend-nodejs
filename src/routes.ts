import { Router } from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware'
import { addProductController } from './usecases/Product/AddProduct'
import { authenticationController, createUserController } from './usecases/User'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users/authentication', (req, res) => {
  return authenticationController.handle(req, res)
})

router.post('/products/add-product', AuthMiddleware, (req, res) => {
  return addProductController.handle(req, res)
})

export { router }
