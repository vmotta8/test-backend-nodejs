import { trimHelper } from '@/helpers/trimHelper'
import { uuidHelper } from '@/helpers/uuidHelper'

export class Product {
  public readonly id: string;

  public title: string;
  public description: string;
  public category: string;
  public price: number;
  public userId: string;

  constructor (props: Omit<Product, 'id'>) {
    this.id = uuidHelper.create()
    this.title = trimHelper.oneSpace(props.title)
    this.description = trimHelper.oneSpace(props.description)
    this.category = trimHelper.oneSpace(props.category)
    this.price = props.price
    this.userId = props.userId
  }
}
