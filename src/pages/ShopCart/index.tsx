import React from 'react'
import {
  Button,
  Card,
  Container,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import { ProductTable } from '../../components/ProductTable'
import { CCColors } from '../../constants/colors.constant'
import { mockedProductList } from '../../constants/mocked-product-list.constant'
import { rows } from '../../constants/product-rows.constant'
import { ProductRowData } from '../../types/product-row-data'
import {
  ContinueButton,
  StyledInputWrapper,
  StyledShopCartPage,
  StyledTotalShopcartList
} from './style'

interface IShopCartProps {
  customerView?: boolean
}

interface IShopCartState {
  totalPrice: number
  totalQnt: number
  rows: ProductRowData[]
}

export default class ShopCart extends React.Component<
  IShopCartProps,
  IShopCartState
> {
  constructor(props: IShopCartProps) {
    super(props)
    let totalPrice = 0
    let totalQnt = 0

    rows.forEach(row => {
      totalPrice += row.total
      totalQnt += row.quantity
    })

    this.state = {
      totalPrice,
      totalQnt,
      rows
    }

    this.removeRowFromCode = this.removeRowFromCode.bind(this)
  }

  remPriceAndQnt(remQnt: number, remPrice: number): void {
    this.setState({ totalPrice: this.state.totalPrice - remPrice })
    this.setState({ totalQnt: this.state.totalQnt - remQnt })
  }

  removeRowFromCode(code: string): void {
    const newRows: ProductRowData[] = []
    this.state.rows.forEach(row => {
      if (row.trackingCode === code) {
        this.remPriceAndQnt(row.quantity, row.total)
        return
      }
      newRows.push(row)
    })

    this.setState({ rows: newRows })
  }

  render(): JSX.Element {
    const { totalPrice, totalQnt, rows } = this.state
    return (
      <>
        <Header />
        <StyledShopCartPage>
          <Container>
            <h2 className='shop-cart-title'>Carrinho</h2>
            {/* <ProductList
              productList={mockedProductList}
              title={'Aproveite e Compre Junto'}
            /> */}
            <ProductTable
              rows={rows}
              shopcartView
              removeFunction={this.removeRowFromCode}
            />
            <Container fluid style={{ padding: 0 }}>
              <StyledInputWrapper>
                <InputGroup className='mb-3'>
                  <FormControl
                    id='shopcart-cpf-input'
                    placeholder='00000-000'
                    aria-label='CPF'
                    aria-describedby='basic-addon2'
                  />
                  <InputGroup.Append>
                    <Button variant='outline-secondary'>OK</Button>
                  </InputGroup.Append>
                </InputGroup>
              </StyledInputWrapper>
            </Container>
            <StyledTotalShopcartList>
              <li>
                <h4 className='total-shopcart-left'>
                  Subtotal ({totalQnt} ite{totalQnt > 1 ? 'ns' : 'm'})
                </h4>
                <p>
                  R$ <b>{totalPrice}</b> ou
                  <br />
                  R$ <b>{(totalPrice * 10) / 100}</b> à vista
                </p>
              </li>
              <li className='total-shopcart-right'>
                <Link to='/' className='buy-more-link'>
                  <a href=''>Comprar mais produtos</a>
                </Link>
                <ContinueButton>Continuar</ContinueButton>
              </li>
            </StyledTotalShopcartList>
          </Container>
        </StyledShopCartPage>
        <Footer />
      </>
    )
  }
}
