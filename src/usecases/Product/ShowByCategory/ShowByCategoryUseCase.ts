/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IShowByCategoryDTO } from './ShowByCategoryDTO'

export class ShowByCategoryUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IShowByCategoryDTO) {
    const categoryExists = await this.productsRepository.findOneByCategory(data.userId, data.category)
    if (!categoryExists) {
      throw new Error('Category does not exist.')
    }

    const allData = []
    const cursor = await this.productsRepository.findByCategory(data.userId, data.category)
    await cursor.forEach(function (doc: any) {
      allData.push(doc)
    })

    return allData
  }
}
