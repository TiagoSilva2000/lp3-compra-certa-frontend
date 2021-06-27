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

interface IIndexState extends ICustomerPagesState {
  user?: UserInfo
}
export default class Index extends React.Component<unknown, IIndexState> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      shopcartCodes: [],
      wishlistCodes: []
    }
    this.pushShopcartCode = this.pushShopcartCode.bind(this)
    this.pushWishlistCode = this.pushWishlistCode.bind(this)
    this.removeShopCartCode = this.removeShopCartCode.bind(this)
    this.removeWishlistCode = this.removeWishlistCode.bind(this)
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
        {/* <ListGroup>
      <ListGroup.Item>
        <Banner bannerUnities={[StaticBanners[0]]} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Banner bannerUnities={[StaticBanners[0]]} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Banner bannerUnities={[StaticBanners[0]]} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Banner bannerUnities={[StaticBanners[0]]} />
      </ListGroup.Item>
      <ListGroup.Item>
        <Banner bannerUnities={[StaticBanners[0]]} />
      </ListGroup.Item>
    </ListGroup> */}
        <StyledProductsListsWrapper>
          <ProductList
            productList={mockedProductList}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={mockedProductList}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={mockedProductList}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          <ProductList
            productList={mockedProductList}
            title='Promoção'
            pushShopcartCodeCb={this.pushShopcartCode}
            removeShopcartCodeCb={this.removeShopCartCode}
            pushWishlistCodeCb={this.pushWishlistCode}
            removeWishlistCodeCb={this.removeWishlistCode}
          />
          {/* <Container>
        <ListGroup>
          {DepartmentList.map((dpt, idx) => (
            <ListGroup.Item key={`alt-dpt${idx}`}></ListGroup.Item>
          ))}
        </ListGroup>
      </Container> */}
          <ProductList productList={mockedProductList} title='Promoção' />
        </StyledProductsListsWrapper>
        <Footer />
      </>
    )
  }
}
