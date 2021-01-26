import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTShowByTitleUseCase } from '@/usecases/Product/ShowByTitle'
import { TESTAddProductUseCase } from '@/usecases/Product/AddProduct'
import { TESTDeleteOneUseCase } from '.'

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

describe('delete one use case', () => {
  it('should return an error if title does not exist', async () => {
    try {
      await TESTAddProductUseCase.execute({
        title: 'Bola',
        description: 'Bola de futebol',
        category: 'Esporte',
        price: 40,
        userId: '123456'
      })

      await TESTDeleteOneUseCase.execute({
        title: 'Bola',
        userId: '123456'
      })

      await TESTShowByTitleUseCase.execute({
        title: 'Bola',
        userId: '123456'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toBe('Title does not exist.')
    }
  })
})
