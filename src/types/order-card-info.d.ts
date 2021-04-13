import { OrderStatus } from '../enum/order-status.enum'
import { Product } from './product'

export type OrderCardInfo = {
  code: string
  orderedAt: Date
  status: OrderStatus
  products: Product[]
}
