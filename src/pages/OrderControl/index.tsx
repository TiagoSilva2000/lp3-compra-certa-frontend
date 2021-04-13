import React from 'react'
import OrderCard from '../../components/OrderCard'
import { mockedOrderCards } from '../../constants/mocked-order-cards-constant'
import { OrderStatus } from '../../enum/order-status.enum'
import {
  StyledOrderControlPage,
  StyledSectorHeader,
  StyledSelect
} from './style'
import { sectorList } from '../../constants/sector-list.constant'
import { Sector } from '../../types/sector'
import { OrderCardInfo } from '../../types/order-card-info'
import Arrow from '../../components/Arrow'
import { CSSTextDirection } from '../../enum/text-direction.enum'
import { colorByOrderStatus } from '../../services/color-by-order-status.service'
import { Accordion, Button, Card, useAccordionToggle } from 'react-bootstrap'

type OrdersBySector = {
  sector: Sector
  orders: OrderCardInfo[]
}

interface IOrderControlState {
  currentOption: string
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
      symbol={'>'}
      color={colorByOrderStatus(sectorStatus)}
      sizepx={16}
      direction={CSSTextDirection.VLR}
      animationDisabled
      absolute
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
    this.state = {
      currentOption: 'all'
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
    const ordersBySectors: OrdersBySector[] = []
    sectorList.forEach(sector => {
      ordersBySectors.push({ sector, orders: [] })
    })

    mockedOrderCards.forEach(order => {
      ordersBySectors.forEach(ordersBySector => {
        if (order.status === ordersBySector.sector.status)
          ordersBySector.orders.push(order)
      })
    })
    return (
      <>
        <StyledOrderControlPage>
          <div className='order-control-wrapper'>
            <div className='select-div'>
              <span>{'>'}</span>
              <StyledSelect
                name='order-control-select'
                id='order-control-select'
                onChange={() => this.setCurrentOption()}
              >
                <option value='all' selected>
                  Todos
                </option>
                {sectorList.map((sector, idx) => (
                  <option value={sector.status} key={idx}>
                    {sector.status}
                  </option>
                ))}
              </StyledSelect>
            </div>
            <Accordion className='order-control-accordion'>
              <ul className='order-cards-list'>
                {ordersBySectors.map(({ orders, sector }, idx) => (
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
                          {orders.map((order, orderIdx) => (
                            <li key={`order${orderIdx}`}>
                              <OrderCard
                                data={order}
                                sector={sector}
                                eventKey={`order${orderIdx}`}
                              ></OrderCard>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Accordion.Collapse>
                  </li>
                ))}
              </ul>
              {/* <ul className='order-card-list'>
                {ordersBySectors.map(({ orders, sector }, idx) => (
                  <li
                    key={`${sector.status}${idx}`}
                    style={{
                      display: this.displayFromCurrentOption(sector.status)
                    }}
                  ></li>
                ))}
              </ul> */}
            </Accordion>
          </div>
        </StyledOrderControlPage>
      </>
    )
  }
}
