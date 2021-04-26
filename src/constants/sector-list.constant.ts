import { OrderStatus } from '../enum/order-status.enum'
import { Sector } from '../types/sector'

export const sectorList: Sector[] = [
  { status: OrderStatus.PREPARATION, color: '' },
  { status: OrderStatus.CHECKING, color: '' },
  { status: OrderStatus.DELIVERY, color: '' }
  // { name: '', color: '' }
]
