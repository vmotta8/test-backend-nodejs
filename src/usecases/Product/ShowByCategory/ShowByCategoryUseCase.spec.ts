import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTShowByCategoryUseCase } from '@/usecases/Product/ShowByCategory'
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

    const result = await TESTShowByCategoryUseCase.execute({
      category: 'Esporte',
      userId: '123456'
    })

    expect(result[0].title).toBe('Bola')
  })
})
