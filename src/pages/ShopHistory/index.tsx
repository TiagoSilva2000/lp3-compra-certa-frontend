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
import { rows } from '../../mocks/product-rows.constant'
import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'
import { Button, Col, Form, Modal } from 'react-bootstrap'
import { HoverRating } from '../../components/Rating'

interface IShopHistoryState {
  activeSection: CustomerOrderStatus
  rating: boolean
  toReceive: boolean
  address: boolean
  showRatingModal: boolean
}

interface IShopHistoryProps {
  defaultActiveSection?: CustomerOrderStatus
}

export default class ShopHistory extends React.Component<
  IShopHistoryProps,
  IShopHistoryState
> {
  constructor(props: IShopHistoryProps) {
    super(props)
    const activeSection =
      props.defaultActiveSection ?? CustomerOrderStatus.ENDED
    this.state = {
      activeSection,
      rating: true,
      toReceive: false,
      address: false,
      showRatingModal: false
    }
    this.toggleRatingModal = this.toggleRatingModal.bind(this)
  }

  toggleRatingModal(): void {
    this.setState({ showRatingModal: !this.state.showRatingModal })
  }

  setActiveSection(sectionName: CustomerOrderStatus): void {
    const { activeSection } = this.state

    if (activeSection === sectionName) return

    this.setState({
      activeSection: sectionName,
      address: sectionName === CustomerOrderStatus.TOSEND,
      rating: sectionName === CustomerOrderStatus.ENDED,
      toReceive: sectionName === CustomerOrderStatus.TORECEIVE
    })
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
              <HistoryCustomChip
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
              />
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
              rows={rows}
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
                    <HoverRating editable />
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
                Close
              </Button>
              <Button
                variant='primary'
                onClick={() => this.setState({ showRatingModal: false })}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </StyledProfilePage>
        <Footer />
      </>
    )
  }
}
