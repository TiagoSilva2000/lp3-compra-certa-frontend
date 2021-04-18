import { OrderStatus } from '../enum/order-status.enum'
import { Product } from './product'
import { ProductRowData } from './product-row-data'

export type OrderCardInfo = {
  code: string
  orderedAt: Date
  status: OrderStatus
  productRows: ProductRowData[]
}
