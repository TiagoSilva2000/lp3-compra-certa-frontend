import { InputBase } from '@material-ui/core'
import styled from 'styled-components'
import { CCColors } from '../../mocks/colors.constant'
import { OrderStatus } from '../../enum/order-status.enum'
import { colorByOrderStatus } from '../../services/color-by-order-status.service'

interface IStyledOrderCardStatusProps {
  status: OrderStatus
}

export const BootstrapInput = styled(InputBase)<IStyledOrderCardStatusProps>`
  &&& {
    position: relative;
    display: inline;
    width: fit-content;
    height: fit-content;
    border-radius: 4px;
    margin: 0;
    background-color: ${props => colorByOrderStatus(props.status)};
    cursor: pointer;
    svg,
    input {
      display: none;
    }
    div {
      border-radius: 4px;
      padding: 7px;
      min-width: 17px;
      min-height: 17px;
      max-width: 17px;
      max-height: 17px;
      background-color: inherit;
      padding: 0;
      color: transparent;
    }
  }
`

export const StyledOrderCard = styled.div<IStyledOrderCardStatusProps>`
  height: fit-content;
  width: 100%;
  color: ${CCColors.DARKPURPLE};
  border: 1px solid #333;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .order-card-header {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1% 5px;
    padding-bottom: 0;

    ul.order-card-header-extra {
      width: 100%;
      min-width: 400px;
      height: fit-content;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style-type: none;
      li {
        min-width: 135px;
        text-align: center;
      }
    }
  }

  .order-card-code {
    justify-self: flex-start;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
    margin-left: 8px;

    .order-card-status-box {
      display: inline;
      width: fit-content;
      height: fit-content;
      padding: 7px;
      border-radius: 4px;
      margin: 0 11px;
      background-color: ${props => colorByOrderStatus(props.status)};
      cursor: pointer;
    }

    span {
      margin-left: 5px;
    }
  }
  .card-arrow-wrapper {
    width: 100%;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;
    :hover {
      padding-bottom: 10px;
      box-shadow: 1px 1px 1px #888888aa;
    }
  }

  .order-card-status {
    color: ${props => colorByOrderStatus(props.status)};
  }
`
