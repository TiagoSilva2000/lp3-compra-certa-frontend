import { CCColors } from '../mocks/colors.constant'
import { OrderStatus } from '../enum/order-status.enum'

export const colorByOrderStatus = (
  status: OrderStatus,
  darker?: boolean
): string => {
  switch (status) {
    case OrderStatus.CHECKING:
      return darker ? 'darkgreen' : 'green'
    case OrderStatus.DELIVERY:
      return darker ? 'darkblue' : 'blue'
    case OrderStatus.PREPARATION:
      return darker ? '#fe95a7' : 'pink'
    case OrderStatus.DELIVERED:
      return darker ? CCColors.DARKPURPLE : CCColors.PRIMARYPURPLE
  }
}
