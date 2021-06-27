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
import { ProductTable, TableTheme } from '../../components/ProductTable'
import { ProductResponse } from '../../interfaces/responses'
import { CCColors } from '../../mocks/colors.constant'
import { mockedProductList } from '../../mocks/mocked-product-list.constant'
import { rows } from '../../mocks/product-rows.constant'
import { IndexRoute, PaymentRoute } from '../../mocks/routes.constant'
import api from '../../services/api'
import { ProductRowData } from '../../types/product-row-data'
import { getShopcart } from '../../utils/shopcartOperations'
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

    this.changeQntByCode = this.changeQntByCode.bind(this)
  }

  componentDidMount(): void {
    console.log("mounted")
    // api.get<ProductResponse[]>('/products').then(result => {
    //   this.setState({
    //     rows: result.data
    //   })
    // })
  }

  setPriceAndQnt(qnt: number, price: number): void {
    this.setState({ totalPrice: this.state.totalPrice + price })
    this.setState({ totalQnt: this.state.totalQnt + qnt })
  }

  changeQntByCode(code: string, qntModifier: number): void {
    const newRows: ProductRowData[] = []
    this.state.rows.forEach(row => {
      if (row.trackingCode === code) {
        this.setPriceAndQnt(qntModifier, qntModifier * row.total)
        if (row.quantity - qntModifier > 0) newRows.push(row)
        return
      }
      newRows.push(row)
    })

    this.setState({ rows: newRows })
  }

  render(): JSX.Element {
    const { totalPrice, totalQnt, rows } = this.state
    const tableTheme: TableTheme = {
      headerBgColor: CCColors.MINT,
      headerColor: CCColors.DARKPURPLE
    }

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
              changeQntCb={this.changeQntByCode}
              theme={tableTheme}
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
                  R$ <b>{totalPrice - (totalPrice * 10) / 100}</b> à vista
                </p>
              </li>
              <li className='total-shopcart-right'>
                <Link to={IndexRoute} className='buy-more-link'>
                  <a href=''>Comprar mais produtos</a>
                </Link>
                <Link to={PaymentRoute}>
                <ContinueButton>Continuar</ContinueButton>
                </Link>
              </li>
            </StyledTotalShopcartList>
          </Container>
        </StyledShopCartPage>
        <Footer />
      </>
    )
  }
}
