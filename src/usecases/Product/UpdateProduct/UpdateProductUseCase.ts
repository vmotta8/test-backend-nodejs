/* eslint-disable no-useless-constructor */
import { Product } from '@/entities/Product'
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IUpdateProductDTO } from './UpdateProductDTO'

export class UpdateProductUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IUpdateProductDTO) {
    const titleExists = await this.productsRepository.findOneByTitle(data.userId, data.title)
    if (!titleExists) {
      throw new Error('Title does not exist.')
    }

    await this.productsRepository.deleteOneByTitle(data.userId, data.title)

    const product = new Product(data)

    await this.productsRepository.save(product)

    return product
  }
}
