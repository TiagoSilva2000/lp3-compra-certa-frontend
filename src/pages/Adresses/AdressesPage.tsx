import React from 'react'
import { Link } from 'react-router-dom'
import {
  Room,
  Inbox,
  DeleteForever,
  EditLocation,
  Assistant,
  AddLocation
} from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  CustomChip,
  AddCustomChip,
  AdjustNav,
  StyledCard
} from './style'

import {
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Button,
  Typography
} from '@material-ui/core'

type MyState = {
  value: string
}

class Adresses extends React.Component<{ props: any }, MyState> {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <StyledPage>
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
              icon={<Room />}
              color='primary'
              label='Meus Endereços'
            />
            <AdjustNav>
              <Link to='/newAdress'>
                <AddCustomChip
                  color='primary'
                  icon={<AddLocation />}
                  label='Adicionar Endereço'
                />
              </Link>
            </AdjustNav>
            <StyledCard>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Destinatário : Evelyn Souza Ferreira{' '}
                    <Chip size='small' label='Padrão' icon={<Inbox />} />
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    <Typography gutterBottom variant='h6' component='h4'>
                      Telefone: (+55) 719934456314
                    </Typography>
                    Endereço: Rua Jogo do Carneiro, ed Luz da lua, 234,
                    Salvador-Bahia 40045040
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary' disabled>
                  <Assistant /> Tornar padrão
                </Button>
                <Button size='small' color='primary'>
                  <EditLocation /> Editar
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
                    Destinatário : Ana Patrícia
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    <Typography gutterBottom variant='h6' component='h4'>
                      Telefone: (+55) 719934456314
                    </Typography>
                    Rua das Mangueiras, ed Luz do Sol, 354, Salvador-Bahia
                    40045040
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Assistant /> Tornar padrão
                </Button>
                <Button size='small' color='primary'>
                  <EditLocation /> Editar
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
export default Adresses
