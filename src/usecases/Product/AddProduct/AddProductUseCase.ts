/* eslint-disable no-useless-constructor */
import { Product } from '@/entities/Product'
import { IProductsRepository } from '@/repositories/IProductsRepository'
import { IAddProductDTO } from './AddProductDTO'

export class AddProductUseCase {
  constructor (
    private productsRepository: IProductsRepository
  ) {}

  async execute (data: IAddProductDTO) {
    const product = new Product(data)

    const titleExists = await this.productsRepository.findByTitle(product.userId, product.title)
    if (titleExists) {
      throw new Error('Title already exists.')
    }

    await this.productsRepository.save(product)

    return product
  }
}
