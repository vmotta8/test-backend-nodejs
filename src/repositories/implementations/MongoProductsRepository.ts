import { database } from '@/database'
import { Product } from '@/entities/Product'
import { IProductsRepository } from '@/repositories/IProductsRepository'

export class MongoProductsRepository implements IProductsRepository {
  async save (product: Product): Promise<void> {
    const productCollection = database.getCollection('products')

    await productCollection.insertOne(product)
  }

  async deleteOneByTitle (userId: string, title: string): Promise<void> {
    const productCollection = database.getCollection('products')

    await productCollection.deleteOne({ title: title, userId: userId })
  }

  async findOneByTitle (userId: string, title: string): Promise<Product> {
    const productCollection = database.getCollection('products')
    const result = await productCollection.findOne({ title: title, userId: userId })
    return result
  }

  async findByTitle (userId: string, title: string): Promise<any> {
    const productCollection = database.getCollection('products')
    const result = await productCollection.find({ title: title, userId: userId })
    return result
  }

  async findOneByCategory (userId: string, category: string): Promise<Product> {
    const productCollection = database.getCollection('products')
    const result = productCollection.findOne({ category: category, userId: userId })
    return result
  }

  async findByCategory (userId: string, category: string): Promise<any> {
    const productCollection = database.getCollection('products')
    const result = productCollection.find({ category: category, userId: userId })
    return result
  }

  async findAll (userId: string): Promise<any> {
    const productCollection = database.getCollection('products')
    const result = productCollection.find({ userId: userId })
    return result
  }

  async updateMany (userId: string, query: object, update: object): Promise<any> {
    const productCollection = database.getCollection('products')
    const result = await productCollection.updateMany({ ...query, ...{ userId: userId } }, { $set: update })
    return result
  }
}
