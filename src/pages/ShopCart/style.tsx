import { Button, withStyles } from '@material-ui/core'
import styled from 'styled-components'
import { CCColors } from '../../mocks/colors.constant'

export const StyledShopCartPage = styled.div`
  margin-top: 20px;

  h2.shop-cart-title {
    color: ${CCColors.DARKPURPLE};
    font-weight: bolder;
    margin-bottom: 20px;
  }
`

export const StyledInputWrapper = styled.div`
  justify-self: flex-start;
  width: fit-content;
  margin-top: 10px;
`

export const StyledTotalShopcartList = styled.ul`
  border-bottom: 4px solid ${CCColors.DARKPURPLE};
  background-color: #aaaaaa11;
  padding: 25px;
  justify-self: right;
  align-self: flex-end;
  width: 100%;
  margin-top: 10px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .total-shopcart-right {
    align-self: right;
    justify-self: right;
  }

  li {
    width: fit-content;
    display: flex;
    text-align: justify;
    margin-bottom: 20px;

    p {
      font-size: 15px;
    }
    .buy-more-link {
      height: fit-content;
      margin-right: 10px;
      align-self: center;
      a {
        text-decoration: underline;
        color: ${CCColors.PRIMARYPURPLE};
      }
    }

    .total-shopcart-left {
      margin-right: 15px;
      justify-self: left;
    }
  }
`

export const ContinueButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)
