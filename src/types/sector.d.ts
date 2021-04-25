import { OrderStatus } from '../enum/order-status.enum'

export type Sector = {
  status: OrderStatus
  color?: string
}
