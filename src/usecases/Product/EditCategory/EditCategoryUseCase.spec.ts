import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTEditCategoryUseCase } from '@/usecases/Product/EditCategory'
import { TESTAddProductUseCase } from '@/usecases/Product/AddProduct'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
})

beforeEach(async () => {
  database.clearCollection('products')
  database.clearCollection('users')
})

afterAll(async () => {
  await database.disconnect()
})

describe('edit product use case', () => {
  it('should return an error if the category does not exist', async () => {
    try {
      await TESTAddProductUseCase.execute({
        title: 'Bola',
        description: 'Bola de futebol',
        category: 'Esporte',
        price: 40,
        userId: '123456'
      })

      await TESTEditCategoryUseCase.execute({
        category: 'Game',
        newCategory: 'Jogos',
        userId: '123456'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('Category does not exist.')
    }
  })
})
