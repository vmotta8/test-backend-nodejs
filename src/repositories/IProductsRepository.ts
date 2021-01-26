import { Product } from '@/entities/Product'

export interface IProductsRepository {
  save (product: Product): Promise<void>;
  deleteOneByTitle (userId: string, title: string): Promise<void>;
  findOneByTitle (userId: string, title: string): Promise<Product>;
  findByTitle (userId: string, title: string): Promise<any>;
  findOneByCategory (userId: string, category: string): Promise<Product>
  findByCategory (userId: string, category: string): Promise<any>;
  findAll (userId: string): Promise<any>;
  updateMany(userId: string, query: object, update: object): Promise<any>;
}
