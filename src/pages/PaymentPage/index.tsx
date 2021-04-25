import { FormatListNumbered } from '@material-ui/icons'
import React from 'react'
import { Button, Col, Container, Form, ListGroup } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { states } from '../../constants/states.constant'
import { ProductRowData } from '../../types/product-row-data'
import { StyledPaymentPage, StyledTotalWrapper } from './style'
import { rows as mockedRows } from '../../constants/product-rows.constant'
import {
  Card,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import { StyledNumberFormat } from '../../styles/styled-number-format.style'
import { mockedAddresses } from '../../constants/mocked-addresses.constant'
import { AddressInfo } from '../../types/address-info'
import { CreditCardInfo } from '../../types/credit-card-info'
import { mockedCreditCards } from '../../constants/mocked-credit-cards.constant'
import { UserInfo } from '../../types/user-info'
import { mockedUser } from '../../constants/mocked-user.constant'
interface IPaymentPageProps {
  rows: ProductRowData[]
  addresses?: AddressInfo[]
  cards?: CreditCardInfo[]
  user?: UserInfo
}

const PaymentPage = (props: IPaymentPageProps) => {
  const rows = props.rows ?? mockedRows
  const total = rows.reduce<number>((acc, curr) => acc + curr.total, 0)
  const registeredAddresses = props.addresses ?? mockedAddresses
  const registeredCards = props.cards ?? mockedCreditCards
  const registeredUser = props.user ?? mockedUser
  const [address, setAddress] = React.useState<AddressInfo | undefined>(
    undefined
  )
  const [card, setCard] = React.useState<CreditCardInfo | undefined>(undefined)
  const [user, setUser] = React.useState<UserInfo | undefined>(undefined)

  console.log(states.findIndex(st => st === address?.state))
  return (
    <>
      <Header customerView />
      <StyledPaymentPage>
        <Container className='payment-body-wrapper'>
          <Container className='payment-form-wrapper'>
            <Form>
              <div className='payment-form-section'>
                <h3 className='form-section-label'>Pessoal</h3>
                <Form.Row>
                  <FormControlLabel
                    label='Usar minhas informações'
                    control={
                      <Checkbox
                        name='form-checkbox-user'
                        color='primary'
                        onChange={() => setUser(registeredUser && !user ? registeredUser : undefined)}
                      />
                    }
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-name'>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter name'
                      readOnly={!!user}
                      value={user?.name ?? ''}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='form-cpf'>
                    <Form.Label
                      column
                      style={{ padding: 0, marginBottom: '.5rem' }}
                    >
                      CPF
                    </Form.Label>
                    <StyledNumberFormat
                      format='###.###.###-##'
                      mask='_'
                      placeholder='000.000.000-00'
                      className='form-control'
                      readOnly={!!user}
                      value={user?.cpf ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      readOnly={!!user}
                      value={user?.email ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
              </div>
              <hr />
              <div className='payment-form-section'>
                <h3 className='form-section-label'>Endereço</h3>
                <Form.Row>
                  <Form.Group as={Col} controlId='address-select'>
                    <Form.Label>Meus endereços</Form.Label>
                    <Form.Control
                      as='select'
                      defaultValue={-1}
                      onChange={(e: any) =>
                        setAddress(registeredAddresses[e.target.value])
                      }
                    >
                      <option value={-1}>...</option>
                      {registeredAddresses.map((addr, idx) => (
                        <option key={`st${idx}`} value={idx}>
                          {addr.address}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Insira sua cidade'
                      readOnly={!!address}
                      value={address?.city ?? ''}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='form-state'>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as='select'
                      readOnly={!!address}
                      value={states.findIndex(st => st === address?.state)}
                    >
                      <option value={-1}>...</option>
                      {states.map((state, idx) => (
                        <option key={`st${idx}`} value={idx}>
                          {state}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-cep'>
                    <Form.Label column style={{ paddingLeft: 0 }}>
                      CEP
                    </Form.Label>
                    <StyledNumberFormat
                      format='#####-###'
                      mask='_'
                      placeholder='00000-000'
                      readOnly={!!address}
                      value={address?.cep ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-street'>
                    <Form.Label>Rua/Avenida</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='address'
                      readOnly={!!address}
                      value={address?.address ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-neighbour'>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='address'
                      readOnly={!!address}
                      value={address?.address ?? ''}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='form-address-number'>
                    <Form.Label>Número</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='number'
                      readOnly={!!address}
                      value={address?.number ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-address-notes'>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='complement'
                      readOnly={!!address}
                      value={address?.notes ?? ''}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='form-contact'>
                    <Form.Label>Contato</Form.Label>
                    <StyledNumberFormat
                      format='(##) # ####-####'
                      placeholder='(99) 9 9999-9999'
                      readOnly={!!address}
                      value={address?.ownerPhone ?? ''}
                      className='form-control'
                    />
                  </Form.Group>
                </Form.Row>
              </div>
              <hr />
              <div className='payment-form-section'>
                <h3 className='form-section-label'>Pagamento</h3>
                <Form.Row>
                  <Form.Group as={Col} controlId='card-select'>
                    <Form.Label>Já registrados</Form.Label>
                    <Form.Control
                      as='select'
                      defaultValue={-1}
                      onChange={(e: any) =>
                        setCard(registeredCards[e.target.value])
                      }
                    >
                      <option value={-1}>...</option>
                      {registeredCards.map((card, idx) => (
                        <option key={`card${idx}`} value={idx}>
                          {`**** **** **** ${card.lastDigits}`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-card-owner'>
                    <Form.Label>Nome do Titular</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Nome do Titular'
                      readOnly={!!card}
                      value={card?.ownerName ?? ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-card-number'>
                    <Form.Label>Número do Cartão</Form.Label>
                    {card ? (
                      <Form.Control
                        type='text'
                        placeholder='Nome do Titular'
                        readOnly
                        value={`**** **** **** ${card?.lastDigits}`}
                      />
                    ) : (
                      <StyledNumberFormat
                        format='#### #### #### ####'
                        placeholder='0000 0000 0000 0000'
                        readOnly={!!card}
                        className='form-control'
                      />
                    )}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId='form-card-due-date'>
                    <Form.Label>Data de Vencimento</Form.Label>
                    <StyledNumberFormat
                      format='##/####'
                      placeholder='MM/AAAA'
                      readOnly={!!card}
                      value={card?.dueDate ?? ''}
                      className='form-control'
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='form-card-ccv'>
                    <Form.Label>CCV</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='CCV'
                      readOnly={!!card}
                      value={card ? '***' : ''}
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant='primary' type='submit'>
                  Confirmar
                </Button>
              </div>
            </Form>
          </Container>
          <Container>
            <h2>Compras</h2>
            <ListGroup className='product-list'>
              {rows.map((row, idx) => (
                <ListGroup.Item key={`pw${idx}`} className='product-holder'>
                  <div className='h-100 d-inline-block product-holder-number'>
                    <b>{idx + 1}</b>
                  </div>
                  <span>{row.product}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <hr />
            <Container>
              <StyledTotalWrapper>
                <p>
                  <b>Total: </b> <span>R$ {total}</span>
                </p>
              </StyledTotalWrapper>
            </Container>
            <hr />
          </Container>
        </Container>
      </StyledPaymentPage>
      <Footer />
    </>
  )
}

export default PaymentPage
