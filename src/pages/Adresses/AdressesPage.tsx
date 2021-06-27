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
import { AccountList } from '../../mocks/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
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
import SideBox from '../../components/SideBox'
import { NewAddressRoute } from '../../mocks/routes.constant'
import CustomChip from '../../components/CustomChip'
import { mockedAddresses } from '../../mocks/mocked-addresses.constant'
import { AddressInfo } from '../../types/address-info'

const Adresses = (): JSX.Element => {
  const [addresses, setAddresses] = React.useState<AddressInfo[]>(
    mockedAddresses
  )
  const [defaultIdx, setDefaultIdx] = React.useState(
    addresses.findIndex(addr => addr.default === true)
  )
  const setDefault = (nDefaultIdx: number): void => {
    const tmpAddresses = addresses
    tmpAddresses[defaultIdx].default = false
    tmpAddresses[nDefaultIdx].default = true
    setAddresses(tmpAddresses)
    setDefaultIdx(nDefaultIdx)
  }

  return (
    <>
      <Header />
      <StyledPage>
        <SideBox title='Minha conta' linkedElements={AccountList} />
        <SectionWrapper>
          <CustomChip icon={<Room />} color='primary' label='Meus Endereços' />
          <AdjustNav>
            <Link to={NewAddressRoute}>
              <AddCustomChip
                color='primary'
                icon={<AddLocation />}
                label='Adicionar Endereço'
              />
            </Link>
          </AdjustNav>
          {addresses.map((addr, idx) => (
            <StyledCard key={`addr${idx}`}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Destinatário : {addr.ownerName}
                    {/* <Chip size='small' label='Padrão' icon={<Inbox />} /> */}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    <Typography gutterBottom variant='h6' component='h4'>
                      Telefone: {addr.ownerPhone}
                    </Typography>
                    Endereço:{' '}
                    {`${addr.street}, ${addr.neighbour}, ${addr.notes}, ${addr.number}, ${addr.city}-${addr.state}, ${addr.cep}`}{' '}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  disabled={addr.default}
                  onClick={() => setDefault(idx)}
                >
                  <Assistant /> Tornar padrão
                </Button>
                <Link
                  to={{
                    pathname: NewAddressRoute,
                    state: { data: { ...addr } }
                  }}
                >
                  <Button size='small' color='primary'>
                    <EditLocation /> Editar
                  </Button>
                </Link>
                <Button
                  size='small'
                  color='secondary'
                  onClick={() =>
                    setAddresses(addresses.filter((addr, aidx) => aidx !== idx))
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
export default Adresses
