import React from 'react'
import { useAccordionToggle } from 'react-bootstrap'
import { CCColors } from '../../constants/colors.constant'
import { OrderStatus } from '../../enum/order-status.enum'
import { CSSTextDirection } from '../../enum/text-direction.enum'
import { OrderCardInfo } from '../../types/order-card-info'
import { Sector } from '../../types/sector'
import Arrow from '../Arrow'
import { StyledOrderCard } from './style'

interface IOrderCardProps {
  data: OrderCardInfo
  sector: Sector
  eventKey?: string
}

interface IOrderCardState {
  currentStatus: OrderStatus
}

interface ICustomCategoryToggleProps {
  eventKey: string
}

const CustomOrderToggle = ({ eventKey }: ICustomCategoryToggleProps) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <Arrow
      symbol='>'
      direction={CSSTextDirection.VLR}
      color={'red'}
      thin
      sizepx={16}
      animationDisabled
      onClick={decoratedOnClick}
    ></Arrow>
  )
}

export default class OrderCard extends React.Component<
  IOrderCardProps,
  IOrderCardState
> {
  constructor(props: IOrderCardProps) {
    super(props)

    this.state = {
      currentStatus: props.data.status
    }
  }

  render(): JSX.Element {
    const { code, orderedAt, status, products } = this.props.data
    const { eventKey } = this.props

    return (
      <StyledOrderCard status={status}>
        <div className='order-card-header'>
          <div className='order-card-code'>
            <div className='order-card-status-box'></div>
            <span>{code}</span>
          </div>
          <ul className='order-card-header-extra'>
            <li>
              <span className='order-card-assignee'>{'unknown'}</span>
            </li>
            <li>
              <span className='order-card-date'>
                {orderedAt.toDateString()}
              </span>
            </li>
            <li>
              <span className='order-card-date'>
                {orderedAt.toDateString()}
              </span>
            </li>
            <li>
              <span>{'normal'}</span>
            </li>
          </ul>
        </div>
        {eventKey && (
          <div className='card-arrow-wrapper'>
            <CustomOrderToggle eventKey={eventKey} />
          </div>
        )}
      </StyledOrderCard>
    )
  }
}
