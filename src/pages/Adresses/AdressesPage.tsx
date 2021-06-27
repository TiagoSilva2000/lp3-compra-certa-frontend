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
import { IAddressInfo } from '../../types/address-info'
import api from '../../services/api'
import { GetAddressResponse } from '../../interfaces/responses'

const Adresses = (): JSX.Element => {
  const [addresses, setAddresses] = React.useState<IAddressInfo[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const result = await api.get<GetAddressResponse[]>('/addresses');
        const mappedAddresses = result.data.map(addr => {
          const mappedAddr: IAddressInfo = {
            ...addr,
            number: addr.house_id,
            notes: addr.details,
            ownerPhone: addr.owner_phone,
            ownerName: addr.owner_name ?? "Não informado",
          };
          return mappedAddr;
        })

        setAddresses(mappedAddresses);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [])
  // const [defaultIdx, setDefaultIdx] = React.useState(
  //   addresses.findIndex(addr => addr.default === true)
  // )

  const setDefault = async (addressId: number): Promise<void> => {
    const tmpAddresses = addresses
    try {
      await api.patch(`/addresses/${addressId}`);

      tmpAddresses.forEach((addr) => {
        if (addr.id !== addressId)
          addr.default = false;
        else
          addr.default = true;
      })
      setAddresses(tmpAddresses)
      // setDefaultIdx(nDefaultIdx)      
    } catch (err) {
      console.log(err);
    }
  }

  const removeAddress = async (addressId: number): Promise<void> => {
    try {
      await api.delete(`/addresses/${addressId}`);

      setAddresses(addresses.filter(addr => addr.id !== addressId));
    } catch(err) {
      console.log(err);
    }


  }
  console.log({address: [...addresses]});
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
            <StyledCard key={`addr${addr.id}`}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Destinatário: {addr.ownerName}
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
                  onClick={() => setDefault(addr.id)}
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
                  onClick={() => removeAddress(addr.id)}
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
