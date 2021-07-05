import React from 'react'
import { Link } from 'react-router-dom'
import { Payment, ShoppingBasket, ShopTwo, Room } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ProductTable } from '../../components/ProductTable'
import { AccountList } from '../../mocks/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledProfilePage,
  HistoryCustomChip,
  AdjustNav
} from './style'
import { CustomerOrderStatus } from '../../enum/customer-order-status.enum'
// import { rows } from '../../mocks/product-rows.constant'
import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'
import { Button, Col, Form, Modal } from 'react-bootstrap'
import { HoverRating } from '../../components/Rating'
import { ProductRowData } from '../../types/product-row-data'
import api from '../../services/api'
import { GetOrderResponse } from '../../interfaces/responses'
import DefaultImage from '../../assets/samples/products/default-img.png'
import { OrderStatus } from '../../enum/order-status.enum'

interface IShopHistoryState {
  activeSection: CustomerOrderStatus
  rating: boolean
  ratingValue: number
  toReceive: boolean
  address: boolean
  showRatingModal: boolean
  rows: ProductRowData[];
  rrows: GetOrderResponse[]
  order_id?: number
  product_id?: number
}

interface IShopHistoryProps {
  defaultActiveSection?: CustomerOrderStatus
}

export default class ShopHistory extends React.Component<
  IShopHistoryProps,
  IShopHistoryState
> {
  orderRows: GetOrderResponse[] = []

  constructor(props: IShopHistoryProps) {
    super(props)
    const activeSection =
      props.defaultActiveSection ?? CustomerOrderStatus.ENDED
    this.state = {
      activeSection,
      rating: true,
      ratingValue: 0,
      toReceive: false,
      address: false,
      showRatingModal: false,
      rows: [],
      rrows: []
    }
    this.toggleRatingModal = this.toggleRatingModal.bind(this)
    this.setRatingValue = this.setRatingValue.bind(this);
  }

  componentDidMount(): void {
    api.get<GetOrderResponse[]>(`/orders`).then(result => {
      const newRows: ProductRowData[] = []
      result.data.forEach(v => {
        newRows.push({
          id: v.id,
          address: "",
          img: DefaultImage,
          total: 0,
          quantity: 0,
          tracking: [],
          trackingCode: v.id.toString(),
          product: "nome"
        })
      })
      const orderRows = result.data
      orderRows.sort((a, b) => {
        if (a.id === b.id)
          return 0;

        return a.id < b.id ? 1 : -1;
      })
      this.orderRows = orderRows;

      this.setState({rows: newRows, rrows: orderRows.filter(o => o.received)})
    })
  }

  toggleRatingModal(order_id?: number, product_id?: number, ): void {
    this.setState({ showRatingModal: !this.state.showRatingModal })

    if (order_id) {
      this.setState({order_id})
    }
    if (product_id) {
      this.setState({product_id})
    }
  }

  setActiveSection(sectionName: CustomerOrderStatus): void {
    const { activeSection } = this.state

    if (activeSection === sectionName) return
    const isEnded = sectionName === CustomerOrderStatus.ENDED;
    this.setState({
      activeSection: sectionName,
      address: sectionName === CustomerOrderStatus.TOSEND,
      rating: sectionName === CustomerOrderStatus.ENDED,
      toReceive: sectionName === CustomerOrderStatus.TORECEIVE,
      rrows: this.orderRows.filter(o => {
        if (isEnded)
          return o.received
        return !o.received;
      })
      // rrows: this.orderRows.filter(o => {
      //   if (isEnded)
      //     return o.status === OrderStatus.DELIVERED
      //   return o.status !== OrderStatus.DELIVERED;
      // })
    })

    // this.setState({rrows: this.state.rrows.filter(v => v.o)})
  }

  setRatingValue(v: number): void {
    this.setState({ratingValue: v})
  }

  handleRating(): void {
    const order_id = this.state.order_id;
    const product_id = this.state.product_id;

    Promise.all([
      api.post(`/rating/${order_id}`, {
        product_id,
        rating: this.state.ratingValue
      }),
      api.patch(`orders/${order_id}/received`)
    ]);
  }

  render(): JSX.Element {
    const { activeSection, showRatingModal } = this.state

    return (
      <>
        <Header />
        <StyledProfilePage>
          <SideBox title='Minha conta' linkedElements={AccountList} />
          <SectionWrapper>
            <CustomChip
              icon={<ShoppingBasket />}
              color='primary'
              label='Minhas compras'
            />
            <AdjustNav>
              <HistoryCustomChip
                color={
                  activeSection === CustomerOrderStatus.ENDED
                    ? 'primary'
                    : 'default'
                }
                icon={<ShopTwo />}
                label={`${CustomerOrderStatus.ENDED}s`}
                onClick={() => this.setActiveSection(CustomerOrderStatus.ENDED)}
              />
              {/* <HistoryCustomChip
                icon={<Payment />}
                color={
                  activeSection === CustomerOrderStatus.TOSEND
                    ? 'primary'
                    : 'default'
                }
                label={CustomerOrderStatus.TOSEND}
                onClick={() =>
                  this.setActiveSection(CustomerOrderStatus.TOSEND)
                }
              /> */}
              <HistoryCustomChip
                color={
                  activeSection === CustomerOrderStatus.TORECEIVE
                    ? 'primary'
                    : 'default'
                }
                icon={<Room />}
                label={CustomerOrderStatus.TORECEIVE}
                onClick={() =>
                  this.setActiveSection(CustomerOrderStatus.TORECEIVE)
                }
              />

            </AdjustNav>
            <ProductTable
              {...this.state}
              rows={[]}
              rrows={this.state.rrows}
              tracking={activeSection !== CustomerOrderStatus.TOSEND}
              additionalData
              toReceiveCb={this.toggleRatingModal}
            />
          </SectionWrapper>
          <Modal
            show={showRatingModal}
            onHide={() => this.setState({ showRatingModal: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Avalie a sua compra!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Sua nota</Form.Label>
                    <HoverRating editable setRatingCb={this.setRatingValue}/>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Suas opiniões</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant='secondary'
                onClick={() => this.setState({ showRatingModal: false })}
              >
                Cancelar
              </Button>
              <Button
                variant='primary'
                onClick={() => {
                  this.setState({ showRatingModal: false })
                  this.handleRating();
                }}
              >
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </StyledProfilePage>
        <Footer />
      </>
    )
  }
}
