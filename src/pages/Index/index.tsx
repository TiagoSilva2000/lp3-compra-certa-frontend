import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { StaticBanners } from '../../constants/static-banners.constant'
import ProductList from '../../components/ProductList'
import { StyledProductsListsWrapper } from './style'
import Footer from '../../components/Footer'
import { mockedProductList } from '../../constants/mocked-product-list.constant'

const Index = (): JSX.Element => (
  <>
    <Header defaultView />
    <Banner bannerUnities={StaticBanners} />
    <StyledProductsListsWrapper>
      <ProductList
        productList={mockedProductList}
        title='Promoção'
      ></ProductList>
      <ProductList
        productList={mockedProductList}
        title='Promoção'
      ></ProductList>
      <ProductList
        productList={mockedProductList}
        title='Promoção'
      ></ProductList>
      <ProductList
        productList={mockedProductList}
        title='Promoção'
      ></ProductList>
      <ProductList
        productList={mockedProductList}
        title='Promoção'
      ></ProductList>
    </StyledProductsListsWrapper>

    <Footer></Footer>
  </>
)
export default Index
