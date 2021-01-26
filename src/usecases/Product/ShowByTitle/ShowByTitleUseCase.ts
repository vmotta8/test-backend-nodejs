/* eslint-disable no-useless-constructor */
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IShowByTitleDTO } from './ShowByTitleDTO'

export class ShowByTitleUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IShowByTitleDTO) {
    const result = await this.productsRepository.findOneByTitle(data.userId, data.title)
    if (!result) {
      throw new Error('Title does not exist.')
    }

    return result
  }
}
