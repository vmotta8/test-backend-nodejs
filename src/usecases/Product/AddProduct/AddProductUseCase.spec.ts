import envs from '@/configs/envs.config'
import { database } from '@/database'
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

describe('add product use case', () => {
  it('should return an error if the title already exists', async () => {
    try {
      await TESTAddProductUseCase.execute({
        title: 'Bola',
        description: 'Bola de futebol',
        category: 'Esporte',
        price: 40,
        userId: '123456'
      })

      await TESTAddProductUseCase.execute({
        title: 'Bola',
        description: 'Bola de futebol',
        category: 'Esporte',
        price: 40,
        userId: '123456'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('Title already exists.')
    }
  })

  it('should pass if the user id is different', async () => {
    const result1 = await TESTAddProductUseCase.execute({
      title: 'Bola',
      description: 'Bola de futebol',
      category: 'Esporte',
      price: 40,
      userId: '12'
    })

    const result2 = await TESTAddProductUseCase.execute({
      title: 'Bola',
      description: 'Bola de futebol',
      category: 'Esporte',
      price: 40,
      userId: '1234'
    })

    expect(result1.title).toBe(result2.title)
  })
})
