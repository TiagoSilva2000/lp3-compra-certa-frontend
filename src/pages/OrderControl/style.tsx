import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'
import { colorByOrderStatus } from '../../services/color-by-order-status.service'
import { Sector } from '../../types/sector'

interface IStyledSectorHeaderProps {
  sector: Sector
}

export const StyledOrderControlPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .order-control-wrapper {
    height: 100%;
    width: 80%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .select-div {
    width: 250px;
    height: 45px;
    border: thin solid ${CCColors.INDEXGRAY};
    border-radius: 1px;
    position: relative;
    color: #60666d;
    background-color: inherit;
    margin-bottom: 25px;

    span {
      font-size: larger;
      color: inherit;
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
      right: 10px;
      top: 9px;
      padding: 0 0 2px;
      position: absolute;
      pointer-events: none;
    }
  }

  .order-control-accordion {
    width: 100%;
    height: 100%;
  }

  .order-cards-list {
    list-style-type: none;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 10px;

    li {
    }

    ul {
      list-style-type: none;

      li {
        margin-bottom: 5px;
      }
    }
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  background: none;
  padding: 5px 15px 5px 8px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
`

export const StyledSectorHeader = styled.div<IStyledSectorHeaderProps>`
  width: 100%;
  border: 1px solid blue;
  padding: 10px 5px 10px 10px;
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.3px;
  position: relative;

  .arrow {
    top: 15%;
    left: -2.9%;
  }

  .sector-header-left {
    width: 30%;
    align-self: flex-start;
    /* background-color: blue; */
    span.sector-header-name {
      user-select: none;
      margin-right: 10px;
      text-transform: uppercase;
      background-color: ${props =>
        colorByOrderStatus(props.sector.status, true)};
      border-radius: 5px;
      color: #fe95a7;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      color: #edf4fb;
      padding: 5px 10px;
    }

    span.sector-header-orders {
    }
  }

  .sector-header-right {
    width: 70%;
    align-self: flex-end;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    list-style-type: none;
    li {
      min-width: 135px;
      text-align: center;
      /* padding: 0 25px; */
      /* margin: 0 15px; */
      span {
      }
    }
  }
`
