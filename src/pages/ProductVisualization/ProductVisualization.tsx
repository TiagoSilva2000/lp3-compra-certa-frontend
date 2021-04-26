import React from 'react'
import { Link } from 'react-router-dom'
import {
  LocalMall,
  Loyalty,
  AddShoppingCart,
  Shop,
  Remove,
  Add
} from '@material-ui/icons'
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
  ProductChip,
  StyledProductViewerWrapper,
  ProductButtonWrapper,
  PriceWrapper,
  StyledBuyProductWrapper
} from './style'

import {
  TextField,
  Chip,
  Button,
  Container,
  FormControl
} from '@material-ui/core'

import {
  Button as BootstrapButton,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Nav,
  Table
} from 'react-bootstrap'
import { Img2, Img3, Img4, Img5, Img6 } from '../../assets/ProductImg'
import ProductList from '../../components/ProductList'
import { mockedProductList } from '../../constants/mocked-product-list.constant'

import { StyledProfileNumberFormat } from '../../styles/styled-profile-number-format.style'
import { StyledNumberFormat } from '../../styles/styled-number-format.style'
import { HoverRating } from '../../components/Rating'
import {
  mockedProductAdditionData,
  mockedProductDescription
} from '../../constants/mocked-product-view.constant'

interface IProductVisProps {
  description?: string
}

interface IProductVisState {
  mainImg: string
  quantity: number
  total: number
  activeView: 'description' | 'additional'
}

class ProductVisualization extends React.Component<
  IProductVisProps,
  IProductVisState
> {
  constructor(props: IProductVisProps) {
    super(props)
    this.state = {
      mainImg: Img2,
      quantity: 0,
      total: 25,
      activeView: 'description'
    }
    this.changeMainImage = this.changeMainImage.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  setActiveView(view: 'description' | 'additional'): void {
    this.setState({ activeView: view })
  }

  changeMainImage(img: string): any {
    return this.setState({ mainImg: img })
  }

  removeItem(): any {
    const value = this.state.quantity
    if (value > 0) {
      return this.setState({ quantity: value - 1 })
    }
  }

  addItem(): any {
    const value = this.state.quantity
    const maxItens = this.state.total / 2
    if (value < maxItens) {
      return this.setState({ quantity: value + 1 })
    }
  }

  render(): JSX.Element {
    const { activeView } = this.state
    const images = [Img2, Img3, Img4, Img5, Img6]
    const description = this.props.children ?? mockedProductDescription
    const data = mockedProductAdditionData

    return (
      <>
        <Header />
        <StyledPage>
          <StyledBuyProductWrapper>
            <ListGroup style={{ marginRight: '10px' }}>
              {images.map((img, idx) => (
                <ListGroup.Item key={idx} style={{ marginBottom: '10px' }}>
                  <ImgGallery
                    src={img}
                    onClick={() => this.changeMainImage(img)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
            <GalleryWrapper>
              <Gallery src={this.state.mainImg} />
            </GalleryWrapper>
            <SectionWrapper>
              <h3>Celular iphone, super ultra mega das galáxias</h3>
              <HoverRating showValue totalTimes={0} />
              <PriceWrapper>
                <h4>de R$ 45.78</h4>
                <h2>
                  por R$ <b>23,90</b> à vista
                </h2>
                <h5>
                  ou parcelado em 6 x <b>R$2,17</b> sem juros
                </h5>
              </PriceWrapper>
              <ProductChip label='162393 vendidos' icon={<LocalMall />} />
              <div>
                QUANTIDADE:{' '}
                <Button
                  type='button'
                  size='small'
                  onClick={() => this.removeItem()}
                >
                  <Remove />
                </Button>
                {this.state.quantity}
                <Button
                  type='button'
                  size='small'
                  onClick={() => this.addItem()}
                >
                  <Add />
                </Button>
                <ProductChip
                  label={this.state.total + ' disponíveis'}
                  size='small'
                  icon={<Loyalty />}
                />
              </div>
              <ProductButtonWrapper>
                {/* <ShopButton
                variant='contained'
                type='button'
                size='small'
                className='ml-2 mt-ml-2 mr-2'
              >
                <AddShoppingCart /> adicionar ao carrinho
              </ShopButton> */}
                <ShopButton
                  variant='contained'
                  type='button'
                  size='small'
                  className='mr-2 mr-md-2 '
                >
                  <Shop /> Comprar agora
                </ShopButton>
              </ProductButtonWrapper>
              <Form>
                <Form.Group>
                  <Form.Label>Calcule o frete:</Form.Label>
                  <InputGroup>
                    <StyledNumberFormat
                      format='#####-###'
                      mask='_'
                      placeholder='00000-000'
                      value={''}
                      className='form-control'
                    />
                    <InputGroup.Append>
                      <BootstrapButton variant='secondary'>Ok</BootstrapButton>{' '}
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form>
            </SectionWrapper>
          </StyledBuyProductWrapper>
          <Card style={{ width: '100%', marginTop: 80 }}>
            <Card.Header>
              <Nav variant='tabs' defaultActiveKey='#first'>
                <Nav.Item>
                  <Nav.Link
                    href='#descricao'
                    onClick={() => this.setActiveView('description')}
                  >
                    Descrição
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href='#adicional'
                    onClick={() => this.setActiveView('additional')}
                  >
                    Informação Adicional
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              {activeView === 'description' ? (
                <Card.Text>{description}</Card.Text>
              ) : (
                <Table>
                  <thead>
                    <tr>
                      <th>Peso</th>
                      <th>Dimensões</th>
                      {/* <th>Tamanho</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.weight} g</td>
                      <td>{`${data.size.x}cm x ${data.size.y}cm x ${data.size.z}cm`}</td>
                      {/* <td></td> */}
                    </tr>
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </StyledPage>
        <Footer />
      </>
    )
  }
}
export default ProductVisualization
