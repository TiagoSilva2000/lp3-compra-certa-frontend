import { IProductBoxProps } from '../components/ProductBox'
import IphoneImage from '../assets/samples/products/iphone.webp'

const productBoxProps: IProductBoxProps = {
  showRating: true,
  showShopcart: true,
  showWishlist: true,
  editable: false,
  data: {
    active_price: {
      divided_max: 10,
      value: 300000,
      active: true,
      payment_discount: 1000
    },
    main_media: {
      path: IphoneImage,
      ext: 'png',
      main: true
    },
    id: 1,
    name: 'Celular Iphone Turbinado Moto G Turbo!!',
    rating: 3,
    description: 'uma descrição legal',
    provider_id: 1,
    sold_qnt: 300,
    stock: 1000,
    type: 'informática'
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
