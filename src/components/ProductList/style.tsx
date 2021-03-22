import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  /* margin: 10px; */

  h2 {
    width: 100%;
    font-size: 24px;
    margin-bottom: 5px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(220, 220, 220);
  }

  /* justify-content: space-evenly; */

  div {
    margin-right: 10px;
  }

  div.arrow-product-list-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div.product-list-wrapper {
    position: relative;
    margin-right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
