import { NavigateBefore } from '@material-ui/icons'
import React, { Component, createRef } from 'react'
import { CCColors } from '../../mocks/colors.constant'
// import { useWindowDimensions } from '../../hooks'
import Arrow from '../Arrow/index'
import ProductBox, { IProductBoxProps } from '../ProductBox'
import { StyledProductList } from './style'

interface IProductListProps {
  arrow?: JSX.Element
  productList: IProductBoxProps[]
  title?: string
  orientation?: 'vertical' | 'horizontal'
  activeFavs?: boolean

  pushShopcartCodeCb?: (newCode: string) => void
  pushWishlistCodeCb?: (newCode: string) => void
  removeShopcartCodeCb?: (newCode: string) => void
  removeWishlistCodeCb?: (newCode: string) => void
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

    this.setMaxProductRendering = this.setMaxProductRendering.bind(this)
  }

  setMaxProductRendering(): void {
    const { innerWidth: width } = window
    console.log('it was called with: ' + width)
    const newMax = Math.floor(width / 200)
    this.setState({ maxProductRendering: newMax })
  }

  componentDidMount(): void {
    this.setMaxProductRendering()
    document.addEventListener('resize', this.setMaxProductRendering)
  }

  componentWillUnmount(): void {
    document.removeEventListener('resize', this.setMaxProductRendering)
  }

  // componentDidUpdate(): void {}

  // componentDidMount(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  // componentDidUpdate(): void {
  //   const { width } = useWindowDimensions()
  //   this.setMaxProductRendering(Math.floor(width / 200))
  // }

  render(): JSX.Element {
    const { productList: pList, title, orientation } = this.props
    const renderedProductList: IProductBoxProps[] = []
    const { renderStartIndex, maxProductRendering } = this.state
    const renderFinalIndex = maxProductRendering + renderStartIndex
    for (let i = renderStartIndex; i < renderFinalIndex - 1; i++) {
      // pList[i].title = pList[i].title + i.toString()
      // console.log(pList[i].title + i.toString())
      renderedProductList.push(pList[i])
    }
    const flexDir = orientation && orientation === 'vertical' ? 'column' : 'row'

    return (
      <StyledProductList flexDir={flexDir}>
        {title && <h2>{title}</h2>}
        <div className='arrow-product-list-wrapper'>
          <Arrow
            direction={orientation === 'vertical' ? 'up' : 'left'}
            animationDisabled
            width={50}
            height={50}
            hasBorder
            color={CCColors.DARKPURPLE}
          />
          <div className='product-list-wrapper'>
            {renderedProductList.map((pData, idx) => (
              <ProductBox
                {...pData}
                key={idx}
                showShopcart
                showWishlist
                activeFav={this.props.activeFavs}
                layout='large'
                pushShopcartCodeCb={this.props.pushShopcartCodeCb}
                removeShopcartCodeCb={this.props.removeShopcartCodeCb}
                pushWishlistCodeCb={this.props.pushWishlistCodeCb}
                removeWishlistCodeCb={this.props.removeWishlistCodeCb}
              />
            ))}
          </div>
          <Arrow
            direction={orientation === 'vertical' ? 'down' : 'right'}
            animationDisabled
            width={50}
            height={50}
            hasBorder
            color={CCColors.DARKPURPLE}
          />
        </div>
      </StyledProductList>
    )
  }
}
