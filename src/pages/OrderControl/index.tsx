import React from 'react'
import OrderCard from '../../components/OrderCard'
import { mockedOrderCards } from '../../mocks/mocked-order-cards-constant'
import { OrderStatus } from '../../enum/order-status.enum'
import {
  StyledOrderControlPage,
  StyledSectorHeader,
  StyledSelect
} from './style'
import { sectorList } from '../../mocks/sector-list.constant'
import { Sector } from '../../types/sector'
import { OrderCardInfo } from '../../types/order-card-info'
import Arrow from '../../components/Arrow'
import { CSSTextDirection } from '../../enum/text-direction.enum'
import { colorByOrderStatus } from '../../services/color-by-order-status.service'
import { Accordion, Button, Card, useAccordionToggle } from 'react-bootstrap'
import Header from '../../components/Header'
import api from '../../services/api'
import { GetOrderResponse } from '../../interfaces/responses'
import { tokenChecking } from '../../utils/token-checking'
import { UserType } from '../../enum/user-type.enum'

type OrdersBySector = {
  sector: Sector
  orders: OrderCardInfo[]
}

interface IOrderControlState {
  currentOption: string
  sectorsOrders: OrdersBySector[]
}

interface ICustomCategoryToggleProps {
  eventKey: string
  sectorStatus: OrderStatus
}

const CustomCategoryToggle = ({
  eventKey,
  sectorStatus
}: ICustomCategoryToggleProps) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <Arrow
      down
      width={40}
      height={40}
      color={colorByOrderStatus(sectorStatus)}
      animationDisabled
      absolute={{ right: 25 }}
      hasBorder
      reverse
      onClick={decoratedOnClick}
    />
  )
}

export default class OrderControl extends React.Component<
  unknown,
  IOrderControlState
> {
  constructor(props: unknown) {
    super(props)
    const ordersBySectors: OrdersBySector[] = []

    sectorList.forEach(sector => {
      ordersBySectors.push({ sector, orders: [] })
    })

    mockedOrderCards.forEach(order => {
      ordersBySectors.forEach(ordersBySector => {
        if (order.status === ordersBySector.sector.status) {
          const randomCode = Math.floor(Math.random() * 1000000000).toString()
          ordersBySector.orders.push({ ...order, code: randomCode })
        }
      })
    })

    this.state = {
      currentOption: 'all',
      sectorsOrders: ordersBySectors
    }
    this.changeOrderStatus = this.changeOrderStatus.bind(this)
  }

  componentDidMount(): void {
    api.get<GetOrderResponse[]>('/order-controls').then(result => {
      console.log();
    })
    tokenChecking(UserType.EMPLOYEE);
  }

  changeOrderStatus(
    orderCode: string,
    oldStatus: OrderStatus,
    newStatus: OrderStatus
  ): void {
    try {
      api.post(`/orders/${orderCode}/${newStatus}`);
      const { sectorsOrders } = this.state
      let newStatusIdx = -1
      let oldStatusIdx = -1
  
      sectorsOrders.forEach(({ sector }, idx) => {
        if (sector.status === newStatus) newStatusIdx = idx
        if (sector.status === oldStatus) oldStatusIdx = idx
      })
      sectorsOrders[oldStatusIdx].orders = sectorsOrders[
        oldStatusIdx
      ].orders.filter(order => {
        if (order.code === orderCode) {
          sectorsOrders[newStatusIdx].orders.unshift({
            ...order,
            status: newStatus
          })
        }
        return order.code !== orderCode
      })
      this.setState({ sectorsOrders })
    } catch(err) {
      console.log(err)
    }
  }

  private displayFromCurrentOption(status: OrderStatus): string {
    const { currentOption } = this.state

    return currentOption === 'all' ||
      currentOption.toLowerCase() === status.toLowerCase()
      ? 'initial'
      : 'none'
  }

  private setCurrentOption(): void {
    const option = document.getElementById(
      'order-control-select'
    ) as HTMLInputElement
    if (!option) return

    this.setState({ currentOption: option.value })
  }

  render(): JSX.Element {
    const { sectorsOrders } = this.state
    return (
      <>
        <Header employeeView />
        <StyledOrderControlPage>
          <div className='order-control-wrapper'>
            <div className='select-div'>
              <span>{'>'}</span>
              <StyledSelect
                name='order-control-select'
                id='order-control-select'
                onChange={() => this.setCurrentOption()}
                defaultValue='all'
              >
                <option value='all'>Todos</option>
                {sectorList.map((sector, idx) => (
                  <option value={sector.status} key={idx}>
                    {sector.status}
                  </option>
                ))}
              </StyledSelect>
            </div>
            <Accordion className='order-control-accordion'>
              <ul className='order-cards-list'>
                {sectorsOrders.map(({ orders, sector }, idx) => (
                  <li
                    key={`${sector.status}${idx}`}
                    style={{
                      display: this.displayFromCurrentOption(sector.status)
                    }}
                  >
                    <StyledSectorHeader sector={sector}>
                      <CustomCategoryToggle
                        eventKey={`${idx}`}
                        sectorStatus={sector.status}
                      />
                      <div className='sector-header-left'>
                        <span className='sector-header-name'>
                          {sector.status}
                        </span>
                        <span className='sector-header-orders'>
                          {orders.length} pedidos
                        </span>
                      </div>
                      <ul className='sector-header-right'>
                        <li>
                          <span>{'responsável'}</span>
                        </li>
                        <li>
                          <span>{'pedido em'}</span>
                        </li>
                        <li>
                          <span>{'previsão'}</span>
                        </li>
                        <li>
                          <span>{'prioridade'}</span>
                        </li>
                      </ul>
                    </StyledSectorHeader>
                    <Accordion.Collapse eventKey={`${idx}`}>
                      <Card>
                        <ul>
                          {orders.map(order => (
                            <li key={`${order.code}`}>
                              <OrderCard
                                data={order}
                                sector={sector}
                                eventKey={`${order.code}`}
                                changeStatusCb={this.changeOrderStatus}
                              ></OrderCard>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Accordion.Collapse>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        </StyledOrderControlPage>
      </>
    )
  }
}
