import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { StaticBanners } from '../../mocks/static-banners.constant'
import ProductList from '../../components/ProductList'
import { StyledProductsListsWrapper } from './style'
import Footer from '../../components/Footer'
import { mockedProductList } from '../../mocks/mocked-product-list.constant'
import { Container, ListGroup } from 'react-bootstrap'
import { DepartmentList } from '../../mocks/department-list.constant'
import { ICustomerPagesState } from '../../interfaces/customer-pages-state.interface'
import { UserInfo } from '../../types/user-info'
import { ProductResponse } from '../../interfaces/responses'
import api from '../../services/api'
import axios from 'axios'

interface IIndexState extends ICustomerPagesState {
  user?: UserInfo
  products: ProductResponse[]
}
export default class Index extends React.Component<unknown, IIndexState> {
  
  constructor(props: unknown) {
    super(props)
    this.state = {
      shopcartCodes: [],
      wishlistCodes: [],
      products: []
    }
    this.pushShopcartCode = this.pushShopcartCode.bind(this)
    this.pushWishlistCode = this.pushWishlistCode.bind(this)
    this.removeShopCartCode = this.removeShopCartCode.bind(this)
    this.removeWishlistCode = this.removeWishlistCode.bind(this)
  }

  componentDidMount(): void {
    // try {
    //   axios.get('http://localhost:5001/user').then(result => {
    //     console.log(result);
    //   }).catch(err => console.log(err))
    // } catch(err) {
    //   console.log(err)
    // }
    api.get<ProductResponse[]>('/products').then(result => {
      this.setState({products: result.data});
    })
  }

  removeShopCartCode(oldCode: string): void {
    const { shopcartCodes } = this.state
    this.setState({
      shopcartCodes: shopcartCodes.filter(code => code !== oldCode)
    })
  }

  removeWishlistCode(oldCode: string): void {
    const { wishlistCodes } = this.state
    this.setState({
      wishlistCodes: wishlistCodes.filter(code => code !== oldCode)
    })
  }

  pushShopcartCode(newCode: string): void {
    this.setState({ shopcartCodes: [...this.state.shopcartCodes, newCode] })
  }

  pushWishlistCode(newCode: string): void {
    this.setState({ wishlistCodes: [...this.state.wishlistCodes, newCode] })
  }

  render(): JSX.Element {
    return (
      <>
        <Header
          defaultView
          shopcartQnt={this.state.shopcartCodes.length}
          wishlistQnt={this.state.wishlistCodes.length}
        />
        <Banner bannerUnities={StaticBanners} dynamic navigation />
        <StyledProductsListsWrapper>
          <ProductList
            productList={this.state.products.map(p => {
              return {
                showRating: true,
                showShopcart: true,
                showWishlist: true,
                editable: false,
                data: p              
              }
            })}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={this.state.products.map(p => {
              return {
                showRating: true,
                showShopcart: true,
                showWishlist: true,
                editable: false,
                data: p              
              }
            })}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={this.state.products.map(p => {
              return {
                showRating: true,
                showShopcart: true,
                showWishlist: true,
                editable: false,
                data: p              
              }
            })}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={this.state.products.map(p => {
              return {
                showRating: true,
                showShopcart: true,
                showWishlist: true,
                editable: false,
                data: p              
              }
            })}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList 
            productList={this.state.products.map(p => {
              return {
                showRating: true,
                showShopcart: true,
                showWishlist: true,
                editable: false,
                data: p              
              }
            })}
            title='Promoção' />
        </StyledProductsListsWrapper>
        <Footer />
      </>
    )
  }
}
