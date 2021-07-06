import { OrderStatus } from '../enum/order-status.enum'

export const showStatus = (st: OrderStatus): string => {
  switch (st) {
    case OrderStatus.PREPARATION:
      return 'Preparação'
    case OrderStatus.CHECKING:
      return 'Checagem'
    case OrderStatus.DELIVERY:
      return 'A entregar'
    case OrderStatus.DELIVERED:
      return 'Entregue'
    default:
      return 'error'
  }
}
