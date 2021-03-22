import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductBox, { IProductBoxProps } from '../../components/ProductBox'
import { StaticBanners } from '../../constants/static-banners.constant'
import IphoneImage from '../../assets/samples/products/iphone.webp'
import ProductList from '../../components/ProductList'
import { StyledProductsListsWrapper } from './style'
import Footer from '../../components/Footer'

const productBoxProps: IProductBoxProps = {
  bestDividedBy: 10,
  currentPrice: 3000.47,
  imgAlt: 'iphone image',
  imgPath: IphoneImage,
  productId: 1,
  title: 'Celular Iphone Turbinado Moto G Turbo!!',
  originalPrice: 3500.54
}

const productList = [
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps
]

const Index = (): JSX.Element => (
  <>
    <Header />
    <Banner bannerUnities={StaticBanners} />
    <StyledProductsListsWrapper>
      <ProductList productList={productList} title='Promoção'></ProductList>
      <ProductList productList={productList} title='Promoção'></ProductList>
      <ProductList productList={productList} title='Promoção'></ProductList>
      <ProductList productList={productList} title='Promoção'></ProductList>
      <ProductList productList={productList} title='Promoção'></ProductList>
    </StyledProductsListsWrapper>

    <Footer></Footer>
  </>
)
export default Index
