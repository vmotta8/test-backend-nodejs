import { Router } from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware'
import { addProductController, editCategoryController, showAllController } from './usecases/Product'
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

router.post('/products/edit-category', AuthMiddleware, (req, res) => {
  return editCategoryController.handle(req, res)
})

router.get('/products/show-all', AuthMiddleware, (req, res) => {
  return showAllController.handle(req, res)
})

export { router }
