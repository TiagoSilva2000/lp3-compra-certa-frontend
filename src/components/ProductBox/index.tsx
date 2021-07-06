import React from 'react'
import { MediaResponse, ProductResponse } from '../../interfaces/responses'
import rounder from '../../services/rounder.service'
import { isInShopcart, pushToShopcart, removeFromShopcart } from '../../utils/shopcartOperations'
import { HoverRating } from '../Rating'
import {
  StyledActiveCartIcon,
  StyledActiveFavIcon,
  StyledBox,
  StyledCartIcon,
  StyledFavoriteIcon
} from './style'
import DefaultImage from '../../assets/samples/products/default-img.png'
import { useHistory } from 'react-router'
import { ProductRoute } from '../../mocks/routes.constant'
import api from '../../services/api'
import { storageTokenKey } from '../../utils/constants'
import { isInWishlist, pushToWishlist, removeFromWishlist } from '../../utils/wishlistOperations'
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
  data: ProductResponse
  // data: {
  //   title: string
  //   imgPath: string
  //   imgAlt: string
  //   originalPrice?: number
  //   currentPrice: number
  //   bestDividedBy: number
  //   productId: number
  //   rating?: number
  // }

}

const ProductBox = (props: IProductBoxProps): JSX.Element => {
  const { showRating, showShopcart, showWishlist } = props
  const {
    pushShopcartCodeCb,
    pushWishlistCodeCb,
    removeShopcartCodeCb,
    removeWishlistCodeCb
  } = props
  const { name, main_media, id: product_id, active_price } = props.data
  const history = useHistory()
  const media: MediaResponse = {
    ext: main_media?.ext ?? "png",
    main: main_media?.main ?? true,
    path: main_media?.path ?? DefaultImage
  }
  let originalPrice = 0
  const currentPrice = rounder(active_price.value)
  if (active_price.payment_discount) originalPrice = rounder(active_price.value + active_price.payment_discount);
  const dividedPrice = rounder(currentPrice / active_price.divided_max)
  const [wishlistActive, setWishStatus] = React.useState(
    isInWishlist(product_id)
  )
  const [shopcartActive, setShopStatus] = React.useState(
    isInShopcart(product_id)
  )

  const handleClick = () => {
    history.push(`${ProductRoute}/${product_id}`);
  }

  const handleFav = () => {
    const isUserLogged = Boolean(sessionStorage.getItem(storageTokenKey));
    if (isUserLogged) {
      if (wishlistActive) {
        removeFromWishlist(product_id);
        api.delete(`wishlist/${product_id}`)
      } else {
        pushToWishlist(product_id);
        api.post(`wishlist/${product_id}`)
      }
    }
  }

  return (
    <StyledBox
      dynamicWidth={props.layout === 'large'}
      border={props.layout === 'large'}
    >
      <img src={media.path} alt={"produto"} onClick={() => handleClick()}/>
      {showShopcart && shopcartActive ? (
        <StyledActiveCartIcon
          onClick={() => {
            setShopStatus(false)
            // return removeShopcartCodeCb
            //   ? removeShopcartCodeCb(`${productId}`)
            //   : 0
            return removeFromShopcart(product_id);
          }}
        />
      ) : (
        <StyledCartIcon
          onClick={() => {
            setShopStatus(true)
            // return pushShopcartCodeCb ? pushShopcartCodeCb(`${productId}`) : 0
            return pushToShopcart(product_id);
          }}
        />
      )}
      {showWishlist && wishlistActive ? (
        <StyledActiveFavIcon
          onClick={() => {
            setWishStatus(false)
            handleFav();
          }}
        />
      ) : (
        <StyledFavoriteIcon
          onClick={() => {
            setWishStatus(true)
            handleFav();
          }}
        />
      )}
      <div id='price-title-wrapper' onClick={() => handleClick()}>
        <h3 id='product-title'>{name}</h3>
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
            ou {active_price.divided_max}x de R$ {dividedPrice} sem juros
          </p>
        </div>
      </div>
    </StyledBox>
  )
}

export default ProductBox
