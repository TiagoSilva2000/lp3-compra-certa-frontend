import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { CCColors } from '../../mocks/colors.constant'

export const StyledPaymentPage = styled(Container)`
  width: 100%;
  padding: 10% 0;
  align-items: flex-start;

  .payment-form-wrapper {
    border: 1px solid #aaaaaaaa;
  }
  .payment-form-section {
    width: 100%;
    padding: 15px 20px 20px 20px;
    h3.form-section-label {
      color: ${CCColors.INDEXGRAY};
      margin-bottom: 20px;
    }
  }

  .payment-body-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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
        text-align: right;
        margin-bottom: 7px;
        width: 100%;
        padding: 0;
        padding-right: 5px;
        padding-left: 15px;

        .product-holder-number {
          padding-right: 10px;
          min-height: 100%;
          height: 100%;
          border-right: 1px solid ${CCColors.INDEXGRAY};
          color: ${CCColors.INDEXGRAY};
        }

        span {
          margin: 14px 10px;
          width: fit-content;
        }
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
      font-size: 18px;
    }
  }
`
