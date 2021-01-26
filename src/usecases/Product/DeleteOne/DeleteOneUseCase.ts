/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IDeleteOneDTO } from './DeleteOneDTO'

export class DeleteOneUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IDeleteOneDTO) {
    const result = await this.productsRepository.findOneByTitle(data.userId, data.title)
    if (!result) {
      throw new Error('Product does not exist.')
    }

    await this.productsRepository.deleteOneByTitle(data.userId, data.title)

    return result
  }
}
