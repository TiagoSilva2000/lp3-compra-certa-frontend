import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PageSwitcher from '../../components/PageSwitcher'
import ProductBox from '../../components/ProductBox'
import SideBox from '../../components/SideBox'
import { ProductResponse } from '../../interfaces/responses'
import { categoryList } from '../../mocks/category-list.constant'
import { mockedCategories } from '../../mocks/mocked-categories.constant'
import { mockedProductList } from '../../mocks/mocked-product-list.constant'
import api from '../../services/api'
import {
  CategoryWrapper,
  ProductListWrapper,
  StyledShopListPage
} from './style'

const extractFilters = (): string => {
  return window.location.pathname.split('/')[2];
}

const extractSearch = (): string|null => {
  const urlParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlParams.entries());

  return params.name ?? null;
}

export const ShopList = (): JSX.Element => {
  const [products, setProducts] = React.useState<ProductResponse[]>([]);

  React.useEffect(() => {
    (async () => {
      let params = "";
      const category = extractFilters();
      const name = extractSearch();
      if (category) {
        params += `category=${category}&`
      }
      if (name) {
        params += `name=${name}`
      }
      const result = await api.get<ProductResponse[]>(`/products?${params}`);
      setProducts(result.data);
    })()
  }, [])

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
            {products.map((product, idx) => (
              <li key={idx}>
                <ProductBox data={product}></ProductBox>
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
