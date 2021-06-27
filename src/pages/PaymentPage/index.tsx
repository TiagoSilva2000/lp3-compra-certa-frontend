import { FormatListNumbered } from '@material-ui/icons'
import React from 'react'
import { Button, Col, Container, Form, ListGroup } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { states } from '../../mocks/states.constant'
import { ProductRowData } from '../../types/product-row-data'
import { StyledPaymentPage, StyledTotalWrapper } from './style'
import { rows as mockedRows } from '../../mocks/product-rows.constant'
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
import { mockedAddresses } from '../../mocks/mocked-addresses.constant'
import { AddressInfo } from '../../types/address-info'
import { CreditCardInfo } from '../../types/credit-card-info'
import { mockedCreditCards } from '../../mocks/mocked-credit-cards.constant'
import { UserInfo } from '../../types/user-info'
import { mockedUser } from '../../mocks/mocked-user.constant'
interface IPaymentPageProps {
  rows: ProductRowData[]
  addresses?: AddressInfo[]
  cards?: CreditCardInfo[]
  user?: UserInfo
}

interface IPaymentPageState {
  address: AddressInfo
  card: CreditCardInfo
  user: UserInfo
  usingUser: boolean
  usingAddress: number
  usingCard: number
}

const cleanAddress: AddressInfo = {
  ownerPhone: '',
  ownerName: '',
  state: '',
  neighbour: '',
  street: '',
  cep: '',
  city: '',
  notes: '',
  number: ''
}

const cleanCard: CreditCardInfo = {
  cardName: '',
  dueDate: '',
  lastDigits: '',
  ownerName: '',
  default: false,
  ccv: ''
}

const cleanUser: UserInfo = {
  cpf: '',
  email: '',
  name: ''
}

class PaymentPage extends React.Component<
  IPaymentPageProps,
  IPaymentPageState
> {
  private readonly registeredAddresses: AddressInfo[]
  private readonly registeredCards: CreditCardInfo[]
  private readonly registeredUser: UserInfo
  private readonly rows: ProductRowData[]
  private readonly total: number

  constructor(props: IPaymentPageProps) {
    super(props)
    this.registeredAddresses = props.addresses ?? mockedAddresses
    this.registeredCards = props.cards ?? mockedCreditCards
    this.registeredUser = props.user ?? mockedUser
    this.rows = props.rows ?? mockedRows
    this.total = this.rows.reduce<number>((acc, curr) => acc + curr.total, 0)

    this.state = {
      user: cleanUser,
      address: cleanAddress,
      card: cleanCard,
      usingUser: false,
      usingAddress: -1,
      usingCard: -1
    }
  }

  toggleUserUsage(): void {
    const isUsing = !this.state.usingUser
    this.setState({ usingUser: isUsing })
    this.setState({ user: isUsing ? this.registeredUser : cleanUser })
  }

  changeSelectedAddress(addressIdx: number): void {
    const isUsing = addressIdx !== -1
    console.log(addressIdx)
    this.setState({ usingAddress: addressIdx })
    this.setState({
      address: this.registeredAddresses[addressIdx] ?? cleanAddress
    })
  }

  changeSelectedCard(cardIdx: number): void {
    const isUsing = cardIdx !== -1
    console.log(cardIdx)

    this.setState({ usingCard: cardIdx })
    this.setState({
      card: this.registeredCards[cardIdx] ?? cleanCard
    })
  }

  handleUserInputs(newUser: UserInfo): void {
    this.setState({ user: newUser })
  }

  handleAddressInput(newAddress: AddressInfo): void {
    this.setState({ address: newAddress })
  }

  handleCardInput(newCard: CreditCardInfo): void {
    this.setState({ card: newCard })
  }

  render(): JSX.Element {
    const {
      card,
      address,
      user,
      usingAddress,
      usingCard,
      usingUser
    } = this.state
    const isUsingAddress = (): boolean => this.state.usingAddress !== -1
    const isUsingCard = (): boolean => this.state.usingCard !== -1

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
                          onChange={() => this.toggleUserUsage()}
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
                        readOnly={usingUser}
                        value={user.name}
                        onChange={e =>
                          this.handleUserInputs({
                            ...user,
                            name: e.target.value as string
                          })
                        }
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
                        readOnly={usingUser}
                        value={user.cpf}
                        onChange={(e: any) =>
                          this.handleUserInputs({
                            ...user,
                            cpf: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-email'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        readOnly={usingUser}
                        value={user.email}
                        onChange={e =>
                          this.handleUserInputs({
                            ...user,
                            email: e.target.value as string
                          })
                        }
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
                        onChange={(e: any) => {
                          this.changeSelectedAddress(Number(e.target.value))
                        }}
                      >
                        <option value={-1}>...</option>
                        {this.registeredAddresses.map((addr, idx) => (
                          <option key={`st${idx}`} value={idx}>
                            {addr.street}
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
                        readOnly={isUsingAddress()}
                        value={address.city}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            city: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-state'>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as='select'
                        readOnly={isUsingAddress()}
                        value={states.findIndex(st => st === address.state)}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            state: states[Number(e.target.value)]
                          })
                        }
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
                        className='form-control'
                        readOnly={isUsingAddress()}
                        value={address.cep}
                        onChange={(e: any) =>
                          this.handleAddressInput({
                            ...address,
                            cep: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-street'>
                      <Form.Label>Rua/Avenida</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='address'
                        readOnly={isUsingAddress()}
                        value={address.street}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            street: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-neighbour'>
                      <Form.Label>Bairro</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='address'
                        readOnly={isUsingAddress()}
                        value={address.neighbour}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            neighbour: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-address-number'>
                      <Form.Label>Número</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='number'
                        readOnly={isUsingAddress()}
                        value={address.number}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            number: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-address-notes'>
                      <Form.Label>Complemento</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='complement'
                        readOnly={isUsingAddress()}
                        value={address.notes}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            notes: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-contact'>
                      <Form.Label>Contato</Form.Label>
                      <StyledNumberFormat
                        format='(##) # ####-####'
                        placeholder='(99) 9 9999-9999'
                        readOnly={isUsingAddress()}
                        className='form-control'
                        value={address.ownerPhone}
                        onChange={(e: any) =>
                          this.handleAddressInput({
                            ...address,
                            ownerPhone: e.target.value as string
                          })
                        }
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
                        onChange={(e: any) => {
                          this.changeSelectedCard(Number(e.target.value))
                        }}
                      >
                        <option value={-1}>...</option>
                        {this.registeredCards.map((card, idx) => (
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
                        readOnly={isUsingCard()}
                        value={card.ownerName}
                        onChange={e =>
                          this.handleCardInput({
                            ...card,
                            ownerName: e.target.value
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId='form-card-number'>
                      <Form.Label>Número do Cartão</Form.Label>
                      {isUsingCard() ? (
                        <Form.Control
                          type='text'
                          placeholder='Nome do Titular'
                          value={`**** **** **** ${card?.lastDigits}`}
                          readOnly
                        />
                      ) : (
                        <StyledNumberFormat
                          format='#### #### #### ####'
                          placeholder='0000 0000 0000 0000'
                          className='form-control'
                          readOnly={isUsingCard()}
                          value={card.lastDigits}
                          onChange={(e: any) =>
                            this.handleCardInput({
                              ...card,
                              lastDigits: e.target.value
                            })
                          }
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
                        className='form-control'
                        readOnly={isUsingCard()}
                        value={card.dueDate}
                        onChange={(e: any) =>
                          this.handleCardInput({
                            ...card,
                            dueDate: e.target.value
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-card-ccv'>
                      <Form.Label>CCV</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='CCV'
                        value={isUsingCard() ? '***' : card.ccv}
                        readOnly={isUsingCard()}
                        onChange={e =>
                          this.handleCardInput({
                            ...card,
                            ccv: e.target.value
                          })
                        }
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
                {this.rows.map((row, idx) => (
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
                    <b>Total: </b> <span>R$ {this.total}</span>
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
}

export default PaymentPage
