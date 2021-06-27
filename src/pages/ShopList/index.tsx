import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageSwitcher from '../../components/PageSwitcher'
import ProductBox from '../../components/ProductBox'
import SideBox from '../../components/SideBox'
import { categoryList } from '../../mocks/category-list.constant'
import { mockedCategories } from '../../mocks/mocked-categories.constant'
import { mockedProductList } from '../../mocks/mocked-product-list.constant'
import {
  CategoryWrapper,
  ProductListWrapper,
  StyledShopListPage
} from './style'

export const ShopList = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledShopListPage>
        <SideBox
          title='Categorias'
          /* linkedElements={categoryList} */ categorySections={
            mockedCategories
          }
          checkboxLayout
        />
        <ProductListWrapper>
          <ul className='products-shop-unlist'>
            {mockedProductList.map((product, idx) => (
              <li key={idx}>
                <ProductBox {...product}></ProductBox>
              </li>
            ))}
          </ul>
          <div className='page-switcher-positioner'>
            <PageSwitcher pages={10} activePage={1}></PageSwitcher>
          </div>
        </ProductListWrapper>
      </StyledShopListPage>
      <Footer />
    </>
  )
}

export default ShopList
