import React from 'react'
import { Link } from 'react-router-dom'
import { Payment, ShoppingBasket, ShopTwo, Room } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ProductTable } from '../../components/ProductTable'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledProfilePage,
  CustomChip,
  HistoryCustomChip,
  AdjustNav
} from './style'
import { CustomerOrderStatus } from '../../enum/customer-order-status.enum'
import { rows } from '../../constants/product-rows.constant'
import SideBox from '../../components/SideBox'

interface IShopHistoryState {
  activeSection: CustomerOrderStatus
  rating: boolean
  toReceive: boolean
  address: boolean
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
      address: false
    }
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
    const { activeSection } = this.state

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
            />
          </SectionWrapper>
        </StyledProfilePage>
        <Footer />
      </>
    )
  }
}
