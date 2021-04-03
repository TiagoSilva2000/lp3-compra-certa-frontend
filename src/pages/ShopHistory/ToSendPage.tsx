import React from 'react'
import { Link } from 'react-router-dom'
import { Payment, ShoppingBasket, ShopTwo, Room } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CollapsibleTable } from './ToSendTable'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledProfilePage,
  CustomChip,
  HistoryCustomChip,
  AdjustNav
} from './style'

const ToSendPage = (): JSX.Element => (
  <>
    <Header />
    <StyledProfilePage>
      <CategoryWrapper>
        <h3>Minha conta:</h3>
        <ul>
          {Object.keys(AccountList).map((item, idx) => (
            <li key={idx}>
              <Link to={`/${AccountList[item]}`}>
                <a> {item}</a>
              </Link>
            </li>
          ))}
        </ul>
      </CategoryWrapper>
      <SectionWrapper>
        <CustomChip
          icon={<ShoppingBasket />}
          color='primary'
          label='Minhas compras'
        />
        <AdjustNav>
          <Link to='/shopHistory'>
            <HistoryCustomChip
              color='default'
              icon={<ShopTwo />}
              label='Finalizadas'
            />
          </Link>
          <Link to='/shopHistory/toSend'>
            <HistoryCustomChip
              icon={<Payment />}
              color='primary'
              label='A enviar'
            />
          </Link>

          <Link to='/shopHistory/toReceive'>
            <HistoryCustomChip
              color='default'
              icon={<Room />}
              label='A receber'
            />
          </Link>
        </AdjustNav>

        <CollapsibleTable />
      </SectionWrapper>
    </StyledProfilePage>
    <Footer />
  </>
)
export default ToSendPage
