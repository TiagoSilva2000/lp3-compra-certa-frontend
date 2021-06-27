import React from 'react'
import { Link } from 'react-router-dom'
import {
  LocalAtm,
  Inbox,
  CreditCard,
  DeleteForever,
  AddLocation,
  Assistant
} from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../mocks/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  StyledCard,
  AdjustNav,
  AddCustomChip
} from './style'

import {
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'
import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'
import { CreditCardInfo } from '../../types/credit-card-info'
import { mockedCreditCards } from '../../mocks/mocked-credit-cards.constant'

const Accounts = (): JSX.Element => {
  const [userCards, setUserCards] = React.useState<CreditCardInfo[]>(
    mockedCreditCards
  )

  return (
    <>
      <Header />
      <StyledPage>
        <SideBox title='Minha conta' linkedElements={AccountList} />
        <SectionWrapper>
          <CustomChip
            icon={<LocalAtm />}
            color='primary'
            label='Meus Cartões'
          />
          <AdjustNav>
            <Link to='/newCard'>
              <AddCustomChip
                color='primary'
                icon={<AddLocation />}
                label='Adicionar cartão'
              />
            </Link>
          </AdjustNav>
          {userCards.map((card, idx) => (
            <StyledCard key={`card${idx}`}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    <CreditCard /> {card.cardName}
                    {/* <Chip size='small' label='Padrão' icon={<Inbox />} /> */}
                    <Typography variant='h6' component='h2'>
                      <span style={{ verticalAlign: 'sub' }}>
                        {'**** **** **** '}
                      </span>
                      {card.lastDigits}
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' disabled={card.default}>
                  <Assistant /> Tornar padrão
                </Button>
                <Button
                  size='small'
                  color='secondary'
                  onClick={() =>
                    setUserCards(userCards.filter((card, cidx) => cidx !== idx))
                  }
                >
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
          ))}
        </SectionWrapper>
      </StyledPage>
      <Footer />
    </>
  )
}
export default Accounts
