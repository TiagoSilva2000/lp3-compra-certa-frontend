import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledPaymentPage = styled.div`
  width: 100%;
  padding: 10% 0;

  .payment-form-wrapper {
    width: fit-content;
    border: 1px solid #aaaaaaaa;
    padding: 20px;
  }
  .product-holder-number {
    background: none;
    padding: 5px 10px;
    border: none;
  }

  .payment-body-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: fit-content;
    h2 {
      width: 100%;
      text-align: right;
      padding-right: 5px;
      margin-bottom: 40px;
    }

    .product-list {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: right;
      .product-holder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 0;
        text-align: right;
        margin-bottom: 5px;
        width: 100%;
        padding-right: 5px;

        span {
          width: fit-content;
        }
        /* border: transparent;
        border-top: transparent;
        border-left: transparent;
        border-right: transparent; */
      }
    }
  }
`

export const StyledTotalWrapper = styled.div`
  text-align: right;
  p {
    b {
      font-size: 18px;
    }
    span {
    }
  }
`
