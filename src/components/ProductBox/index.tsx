import React from 'react'
import rounder from '../../services/rounder.service'
import { HoverRating } from '../Rating'
import {
  StyledActiveCartIcon,
  StyledActiveFavIcon,
  StyledBox,
  StyledCartIcon,
  StyledFavoriteIcon
} from './style'

export interface IProductBoxProps {
  showRating?: boolean
  showShopcart?: boolean
  showWishlist?: boolean
  editable?: boolean
  activeFav?: boolean
  activeShop?: boolean
  layout?: 'large' | 'long'
  pushShopcartCodeCb?: (newCode: string) => void
  pushWishlistCodeCb?: (newCode: string) => void
  removeShopcartCodeCb?: (newCode: string) => void
  removeWishlistCodeCb?: (newCode: string) => void
  data: {
    title: string
    imgPath: string
    imgAlt: string
    originalPrice?: number
    currentPrice: number
    bestDividedBy: number
    productId: number
    rating?: number
  }
}

const ProductBox = (props: IProductBoxProps): JSX.Element => {
  const { showRating, showShopcart, showWishlist } = props
  const {
    pushShopcartCodeCb,
    pushWishlistCodeCb,
    removeShopcartCodeCb,
    removeWishlistCodeCb
  } = props
  const { title, imgPath, imgAlt, bestDividedBy, productId } = props.data
  let { currentPrice, originalPrice } = props.data
  currentPrice = rounder(currentPrice)
  if (originalPrice) originalPrice = rounder(originalPrice)
  const dividedPrice = rounder(currentPrice / bestDividedBy)
  const [wishlistActive, setWishStatus] = React.useState(
    props.activeFav ?? false
  )
  const [shopcartActive, setShopStatus] = React.useState(
    props.activeShop ?? false
  )

  return (
    <StyledBox
      dynamicWidth={props.layout === 'large'}
      border={props.layout === 'large'}
    >
      <img src={imgPath} alt={imgAlt} />
      {showShopcart && shopcartActive ? (
        <StyledActiveCartIcon
          onClick={() => {
            setShopStatus(false)
            return removeShopcartCodeCb
              ? removeShopcartCodeCb(`${productId}`)
              : 0
          }}
        />
      ) : (
        <StyledCartIcon
          onClick={() => {
            setShopStatus(true)
            return pushShopcartCodeCb ? pushShopcartCodeCb(`${productId}`) : 0
          }}
        />
      )}
      {showWishlist && wishlistActive ? (
        <StyledActiveFavIcon
          onClick={() => {
            setWishStatus(false)
            return removeWishlistCodeCb
              ? removeWishlistCodeCb(`${productId}`)
              : 0
          }}
        />
      ) : (
        <StyledFavoriteIcon
          onClick={() => {
            setWishStatus(true)
            return pushWishlistCodeCb ? pushWishlistCodeCb(`${productId}`) : 0
          }}
        />
      )}
      <div id='price-title-wrapper'>
        <h3 id='product-title'>{title}</h3>
        {showRating && props.data.rating && (
          <HoverRating
            initialValue={props.data.rating}
            editable={props.editable}
          ></HoverRating>
        )}
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
