import React from 'react'
import { Accordion, Card, Dropdown, useAccordionToggle } from 'react-bootstrap'
import { CCColors } from '../../mocks/colors.constant'
import { OrderStatus } from '../../enum/order-status.enum'
import { CSSTextDirection } from '../../enum/text-direction.enum'
import { OrderCardInfo } from '../../types/order-card-info'
import { Sector } from '../../types/sector'
import { ProductTable, TableTheme } from '../ProductTable'
import Arrow from '../Arrow'
import { StyledOrderCard, BootstrapInput } from './style'
import { colorByOrderStatus } from '../../services/color-by-order-status.service'
import { sectorList } from '../../mocks/sector-list.constant'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { AnyAaaaRecord } from 'node:dns'
import {
  createStyles,
  InputBase,
  MenuItem,
  Select,
  withStyles
} from '@material-ui/core'

interface IOrderCardProps {
  data: OrderCardInfo
  sector: Sector
  eventKey?: string
  changeStatusCb: (
    orderCode: string,
    oldStatus: OrderStatus,
    newStatus: OrderStatus
  ) => void
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
      color={CCColors.PRIMARYYELLOW}
      animationDisabled
      onClick={decoratedOnClick}
      down
      height={15}
      width={15}
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

  setStatus(newStatus: OrderStatus): void {
    this.setState({ currentStatus: newStatus })
  }

  render(): JSX.Element {
    const { code, orderedAt, productRows } = this.props.data
    const { eventKey, changeStatusCb } = this.props
    const { currentStatus: status } = this.state
    const tableTheme: TableTheme = {
      slim: true,
      headerBgColor: 'inherit',
      headerColor: colorByOrderStatus(status, true)
    }
    const sectorListFromStatus = (st: OrderStatus): Sector[] => {
      switch (st) {
        case OrderStatus.PREPARATION:
          return [{ status: OrderStatus.CHECKING }]
        case OrderStatus.CHECKING:
          return [
            { status: OrderStatus.PREPARATION },
            { status: OrderStatus.DELIVERY }
          ]
        case OrderStatus.DELIVERY:
          return [
            { status: OrderStatus.PREPARATION },
            { status: OrderStatus.CHECKING },
            { status: OrderStatus.DELIVERED }
          ]
        case OrderStatus.DELIVERED:
          return [{ status: OrderStatus.DELIVERY }]
      }
    }

    return (
      <StyledOrderCard status={status}>
        <div className='order-card-header'>
          <div className='order-card-code'>
            <Select
              labelId='demo-customized-select-label'
              id='demo-customized-select'
              value={status}
              onChange={e => {
                this.setStatus(e.target.value as OrderStatus)
                if (changeStatusCb)
                  changeStatusCb(code, status, e.target.value as OrderStatus)
              }}
              input={<BootstrapInput status={status} />}
            >
              {sectorListFromStatus(status).map((sector, idx) => (
                <MenuItem key={idx} value={sector.status}>
                  {sector.status}
                </MenuItem>
              ))}
            </Select>
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
          <Accordion>
            <div className='card-arrow-wrapper'>
              <CustomOrderToggle eventKey={eventKey} />
            </div>
            <Accordion.Collapse eventKey={eventKey}>
              <Card>
                <ProductTable
                  rows={productRows}
                  employeeView
                  theme={tableTheme}
                  additionalData
                  tracking
                />
              </Card>
            </Accordion.Collapse>
          </Accordion>
        )}
      </StyledOrderCard>
    )
  }
}
