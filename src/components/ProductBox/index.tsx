import React from 'react'
import rounder from '../../services/rounder.service'
import { StyledBox } from './style'

export interface IProductBoxProps {
  title: string
  imgPath: string
  imgAlt: string
  originalPrice?: number
  currentPrice: number
  bestDividedBy: number
  productId: number
}

const ProductBox = (props: IProductBoxProps): JSX.Element => {
  const { title, imgPath, imgAlt, bestDividedBy, productId } = props
  let { currentPrice, originalPrice } = props
  currentPrice = rounder(currentPrice)
  if (originalPrice) originalPrice = rounder(originalPrice)
  const dividedPrice = rounder(currentPrice / bestDividedBy)

  return (
    <StyledBox>
      <img src={imgPath} alt={imgAlt} />
      <div id='price-title-wrapper'>
        <h3 id='product-title'>{title}</h3>
        <div id='price-wrapper'>
          {originalPrice ? (
            <p id='original-price'>de R$ {originalPrice} por</p>
          ) : (
            <p id='no-original-price'>por</p>
          )}
          <p id='current-price'>R$ {currentPrice}</p>
          <p id='divided-by'>
            ou {bestDividedBy}x de R$ {dividedPrice} sem juros
          </p>
        </div>
      </div>
    </StyledBox>
  )
}

export default ProductBox
