import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductBox, { IProductBoxProps } from '../../components/ProductBox'
import { StaticBanners } from '../../constants/static-banners.constant'
import IphoneImage from '../../assets/samples/products/iphone.webp'

const productBoxProps: IProductBoxProps = {
  bestDividedBy: 10,
  currentPrice: 3000.47,
  imgAlt: 'iphone image',
  imgPath: IphoneImage,
  productId: 1,
  title: 'Celular Iphone Turbinado Moto G Turbo!!',
  originalPrice: 3500.54
}

const Index = (): JSX.Element => (
  <>
    <Header />
    <Banner bannerUnities={StaticBanners} />
    <div>
      <ProductBox {...productBoxProps}></ProductBox>
    </div>
  </>
)
export default Index
