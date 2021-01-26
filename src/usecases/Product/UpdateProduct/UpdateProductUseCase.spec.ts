import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTAddProductUseCase } from '@/usecases/Product/AddProduct'
import { TESTUpdateProductUseCase } from '.'
import { TESTShowByTitleUseCase } from '../ShowByTitle'

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

describe('update product use case', () => {
  it('should return an object on success', async () => {
    await TESTAddProductUseCase.execute({
      title: 'Bola',
      description: 'Bola de futebol',
      category: 'Esporte',
      price: 40,
      userId: '123456'
    })

    const result1 = await TESTShowByTitleUseCase.execute({
      title: 'Bola',
      userId: '123456'
    })

    await TESTUpdateProductUseCase.execute({
      title: 'Bola',
      description: 'Bola de basquete',
      category: 'Esporte',
      price: 40,
      userId: '123456'
    })

    const result2 = await TESTShowByTitleUseCase.execute({
      title: 'Bola',
      userId: '123456'
    })

    expect(result1.description).toBe('Bola de futebol')
    expect(result2.description).toBe('Bola de basquete')
  })
})
