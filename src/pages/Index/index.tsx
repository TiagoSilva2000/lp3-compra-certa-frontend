import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { StaticBanners } from '../../constants/static-banners.constant'
import ProductList from '../../components/ProductList'
import { StyledProductsListsWrapper } from './style'
import Footer from '../../components/Footer'
import { mockedProductList } from '../../constants/mocked-product-list.constant'
import { Container, ListGroup } from 'react-bootstrap'
import { DepartmentList } from '../../constants/department-list.constant'

const Index = (): JSX.Element => (
  <>
    <Header defaultView />
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
      <ProductList productList={mockedProductList} title='Promoção' />
      <ProductList productList={mockedProductList} title='Promoção' />
      <ProductList productList={mockedProductList} title='Promoção' />
      <ProductList productList={mockedProductList} title='Promoção' />
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
export default Index
