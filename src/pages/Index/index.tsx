import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { StaticBanners } from '../../constants/static-banners.constant'

const Index = (): JSX.Element => (
  <>
    <Header />
    <Banner bannerUnities={StaticBanners} />
  </>
)
export default Index
