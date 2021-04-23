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
import { AccountList } from '../../constants/category-list.constant'
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
  Chip,
  Button,
  Typography
} from '@material-ui/core'
import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'

type MyState = {
  value: string
}

class Accounts extends React.Component<{ props: any }, MyState> {
  render(): JSX.Element {
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
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    <CreditCard /> Cartão 1
                    <Chip size='small' label='Padrão' icon={<Inbox />} />
                    <Typography variant='h6' component='h2'>
                      **** **** **** 2234
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' disabled>
                  <Assistant /> Tornar padrão
                </Button>
                <Button size='small' color='secondary'>
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    <CreditCard /> Cartão 2
                    <Typography variant='h6' component='h2'>
                      **** **** **** 6643
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Assistant /> Tornar padrão
                </Button>
                <Button size='small' color='secondary'>
                  <DeleteForever /> Remover
                </Button>
              </CardActions>
            </StyledCard>
          </SectionWrapper>
        </StyledPage>
        <Footer />
      </>
    )
  }
}
export default Accounts
