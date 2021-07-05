import { OrderStatus } from '../enum/order-status.enum'
import {
  GetOrderProductResponse,
  GetOrderResponse
} from '../interfaces/responses'
import { Product } from './product'
import { ProductRowData } from './product-row-data'

export type OrderCardInfo = {
  code: string
  orderedAt: Date
  status: OrderStatus
  order?: GetOrderResponse
}
