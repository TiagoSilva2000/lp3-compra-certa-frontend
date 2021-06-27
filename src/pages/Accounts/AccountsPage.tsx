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
import { CreditCardBasicInfo, CreditCardInfo } from '../../types/credit-card-info'
import { mockedCreditCards } from '../../mocks/mocked-credit-cards.constant'
import api from '../../services/api'
import { PaymentResponse } from '../../interfaces/responses'

const Accounts = (): JSX.Element => {
  const [userCards, setUserCards] = React.useState<PaymentResponse[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const result = await api.get<PaymentResponse[]>('/payments');
        setUserCards(result.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])

  const setDefault = async (cardId: number) => {
    try {
      await api.patch(`/payments/${cardId}`);
      setUserCards(userCards.map(v => {
        if (v.id === cardId)
          v.default = true;
        else
          v.default = false;
        return v;
      }))
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (cardId: number) => {
    try {
      await api.delete(`/payments/${cardId}`);
      setUserCards(userCards.filter(v => v.id !== cardId))
    } catch (err) {
      console.log(err);
    }
  }

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
                    <CreditCard /> {card.name}
                    {/* <Chip size='small' label='Padrão' icon={<Inbox />} /> */}
                    {card.payment && 
                    <Typography variant='h6' component='h2'>
                      <span style={{ verticalAlign: 'sub' }}>
                        {'**** **** **** '}
                      </span>
                      {card.payment.last_digits}
                    </Typography>                    
                    }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' disabled={card.default} onClick={() => setDefault(card.id)}>
                  <Assistant /> Tornar padrão
                </Button>
                <Button
                  size='small'
                  color='secondary'
                  onClick={() => handleDelete(card.id)}
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
