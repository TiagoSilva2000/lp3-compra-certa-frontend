import { IProductBoxProps } from '../components/ProductBox'
import IphoneImage from '../assets/samples/products/iphone.webp'

const productBoxProps: IProductBoxProps = {
  showRating: true,
  showShopcart: true,
  showWishlist: true,
  editable: false,
  data: {
    bestDividedBy: 10,
    currentPrice: 3000.47,
    imgAlt: 'iphone image',
    imgPath: IphoneImage,
    productId: 1,
    title: 'Celular Iphone Turbinado Moto G Turbo!!',
    originalPrice: 3500.54,
    rating: 3
  }
}

export const mockedProductList = [
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps,
  productBoxProps
  // productBoxProps
]
