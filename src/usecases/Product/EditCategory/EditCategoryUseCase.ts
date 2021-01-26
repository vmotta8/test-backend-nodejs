/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IEditProductDTO } from './EditCategoryDTO'

export class EditCategoryUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IEditProductDTO) {
    const categoryExists = await this.productsRepository.findByCategory(data.userId, data.category)
    if (!categoryExists) {
      throw new Error('Category does not exist.')
    }

    await this.productsRepository.updateMany(data.userId, { category: data.category }, { category: data.newCategory })

    const allData = []
    const cursor = await this.productsRepository.findByCategory(data.userId, data.newCategory)
    await cursor.forEach(function (doc: any) {
      allData.push(doc)
    })

    return allData
  }
}
