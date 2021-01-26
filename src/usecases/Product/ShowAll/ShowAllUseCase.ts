/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IShowAllDTO } from './ShowAllDTO'

export class ShowAllUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IShowAllDTO) {
    const allData = []
    const cursor = await this.productsRepository.findAll(data.userId)
    await cursor.forEach(function (doc: any) {
      allData.push(doc)
    })

    return allData
  }
}
