import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { LocalMall, Loyalty, AddShoppingCart, Shop } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  GalleryWrapper,
  SectionWrapper,
  StyledPage,
  Gallery,
  Label,
  ImgGallery,
  ShopButton,
  ProductChip
} from './style'

import { TextField, Chip } from '@material-ui/core'
import { Img2, Img3, Img4, Img5, Img6 } from '../ShopHistory/ProductImg'

type MyState = {
  mainImg: string
}

class ProductVisualization extends React.Component<{ props: any }, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      mainImg: Img2
    }
    this.changeMainImage = this.changeMainImage.bind(this)
  }

  changeMainImage(img: string): any {
    return this.setState({ mainImg: img })
  }

  render(): JSX.Element {
    return (
      <Fragment>
        <Header />
        <StyledPage>
          <GalleryWrapper>
            <Gallery src={this.state.mainImg} />
          </GalleryWrapper>
          <GalleryWrapper>
            <ImgGallery src={Img2} onClick={() => this.changeMainImage(Img2)} />
            <ImgGallery src={Img3} onClick={() => this.changeMainImage(Img3)} />
            <ImgGallery src={Img4} onClick={() => this.changeMainImage(Img4)} />
            <ImgGallery src={Img5} onClick={() => this.changeMainImage(Img5)} />
            <ImgGallery src={Img6} onClick={() => this.changeMainImage(Img6)} />
          </GalleryWrapper>
          <SectionWrapper>
            <h1>Celular iphone, super ultra mega das galáxias</h1>
            <Label>
              <ProductChip label='162393 vendidos' icon={<LocalMall />} />
            </Label>
            <Label>
              <h1>R$ 23,90</h1>
            </Label>
            <Label>
              <h3>Parcelamento sem juros: 6 x R$2,17</h3>
            </Label>
            <TextField
              variant='filled'
              margin='normal'
              id='cep'
              label='Calcule o frete:'
              name='cep'
            />
            <Label>
              QUANTIDADE + 0 -{' '}
              <ProductChip
                label='34 disponíveis'
                size='small'
                icon={<Loyalty />}
              />
            </Label>
            <Label>
              <ShopButton
                variant='contained'
                type='button'
                size='small'
                className='ml-2 mt-ml-2 mr-2'
              >
                <AddShoppingCart /> adicionar ao carrinho
              </ShopButton>
              <ShopButton
                variant='contained'
                type='button'
                size='small'
                className='mr-2 mr-md-2 '
              >
                <Shop /> Comprar agora
              </ShopButton>
            </Label>
          </SectionWrapper>
        </StyledPage>
        <Footer />
      </Fragment>
    )
  }
}
export default ProductVisualization
