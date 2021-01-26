import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTShowByTitleUseCase } from '@/usecases/Product/ShowByTitle'
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

describe('show by title use case', () => {
  it('should return an object on success', async () => {
    await TESTAddProductUseCase.execute({
      title: 'Bola',
      description: 'Bola de futebol',
      category: 'Esporte',
      price: 40,
      userId: '123456'
    })

    const result = await TESTShowByTitleUseCase.execute({
      title: 'Bola',
      userId: '123456'
    })

    expect(result.category).toBe('Esporte')
  })
})
