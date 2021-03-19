import React, { Component, createRef } from 'react'
import Arrow from '../Arrow/index'
import ProductBox, { IProductBoxProps } from '../ProductBox'
import { StyledProductList } from './style'
interface IProductListProps {
  arrow?: typeof Arrow
  productList: IProductBoxProps[]
  title?: string
}

interface IProductListState {
  renderStartIndex: number
  maxProductRendering: number
}

export default class ProductList extends Component<
  IProductListProps,
  IProductListState
> {
  private ref = createRef()
  constructor(props: IProductListProps) {
    super(props)

    this.state = {
      renderStartIndex: 0,
      maxProductRendering: 0
    }
  }

  render(): JSX.Element {
    const { productList: pList, title } = this.props

    return (
      <StyledProductList>
        {title && <h2>{title}</h2>}
        <div className='arrow-product-list-wrapper'>
          <Arrow symbol={'<'} />
          <div className='product-list-wrapper'>
            {pList.map((pData, index) => (
              <ProductBox {...pData} key={index}></ProductBox>
            ))}
          </div>
          <Arrow symbol={'>'} />
        </div>
      </StyledProductList>
    )
  }
}
