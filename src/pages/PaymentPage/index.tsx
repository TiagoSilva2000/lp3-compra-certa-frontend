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
import { IAddressInfo } from '../../types/address-info'
import { CreditCardInfo } from '../../types/credit-card-info'
import { mockedCreditCards } from '../../mocks/mocked-credit-cards.constant'
import { UserInfo } from '../../types/user-info'
import { mockedUser } from '../../mocks/mocked-user.constant'
import api from '../../services/api'
import { GetAddressResponse, GetUserResponse, GetPaymentResponse } from '../../interfaces/responses'
import { clearShopcart } from '../../utils/shopcartOperations'
import { Link } from 'react-router-dom'
import { IndexRoute, ShopHistoryRoute } from '../../mocks/routes.constant'
interface IPaymentPageProps {
  location: {
    state: {
      rows: ProductRowData[]
      addresses?: IAddressInfo[]
      cards?: CreditCardInfo[]
      user?: UserInfo
    }
  }
}

interface IPaymentPageState {
  address: GetAddressResponse
  card: CreditCardInfo
  user: GetUserResponse
  usingUser: boolean
  usingAddress: number
  usingCard: number
  loading: boolean
}

const cleanAddress: GetAddressResponse = {
  id: 0,
  user_id: 0,
  owner_phone: '',
  owner_name: '',
  state: '',
  neighbour: '',
  street: '',
  country: '',
  cep: '',
  city: '',
  details: '',
  house_id: ''
}

const cleanCard: CreditCardInfo = {
  name: '',
  due_date: '',
  last_digits: '',
  owner_name: '',
  default: false,
  ccv: ''
}

const cleanUser: GetUserResponse = {
  cpf: '',
  email: '',
  first_name: '',
  last_name: '',
  id: 0,
  password: '',
  phone: '',
  user_type: 0
}

class PaymentPage extends React.Component<
  IPaymentPageProps,
  IPaymentPageState
> {
  private registeredAddresses: GetAddressResponse[] = []
  private registeredCards: GetPaymentResponse[] = []
  private registeredUser?: GetUserResponse
  private rows: ProductRowData[]
  private total: number

  constructor(props: IPaymentPageProps) {
    super(props)
    this.rows = props.location?.state?.rows ?? []
    this.total = this.rows.reduce<number>((acc, curr) => acc + curr.total, 0)

    this.state = {
      user: cleanUser,
      address: cleanAddress,
      card: cleanCard,
      usingUser: false,
      usingAddress: -1,
      usingCard: -1,
      loading: true
    }
  }

  componentDidMount() {
    Promise.all([
      api.get<GetPaymentResponse[]>('/payments').then(result => {
        this.registeredCards = result.data;
      }),
      api.get<GetAddressResponse[]>('/addresses').then(result => {
        this.registeredAddresses = result.data;
      }),
      api.get<GetUserResponse>('/users').then(result => {
        this.registeredUser = result.data;
      })
    ]).then(result => {
      this.setState({loading: false});
    })
  }

  toggleUserUsage(): void {
    const isUsing = !this.state.usingUser
    this.setState({ usingUser: isUsing })
    this.setState({ user: isUsing ? this.registeredUser ?? cleanUser : cleanUser })
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

    this.setState({ usingCard: cardIdx })
    if (!this.registeredCards[cardIdx]) {
      this.setState({card: cleanCard});
      return;
    }
    const chosenCard = this.registeredCards[cardIdx]

    if (chosenCard.payment) {
      this.setState({
        card: {...chosenCard, ...chosenCard.payment, ccv: "***"}
      })
    }
  }

  handleUserInputs(newUser: GetUserResponse): void {
    this.setState({ user: newUser })
  }

  handleAddressInput(newAddress: GetAddressResponse): void {
    this.setState({ address: newAddress })
  }

  async handleSubmit(e: any): Promise<void> {
    e.preventDefault();
    console.log("passed");
    await api.post('/orders', {
      total: this.total,
      products: this.rows.map(v => v.id),
      personal: this.state.user,
      payment: this.state.card,
      address: this.state.address
    })

    clearShopcart();
    window.open(ShopHistoryRoute, '_self');
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
                        value={user.first_name}
                        onChange={e =>
                          this.handleUserInputs({
                            ...user,
                            first_name: e.target.value as string
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
                        value={address.house_id}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            house_id: e.target.value as string
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
                        value={address.details}
                        onChange={e =>
                          this.handleAddressInput({
                            ...address,
                            details: e.target.value as string,
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
                        value={address.owner_phone}
                        onChange={(e: any) =>
                          this.handleAddressInput({
                            ...address,
                            owner_phone: e.target.value as string
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
                            {`**** **** **** ${card.payment?.last_digits}`}
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
                        value={card.owner_name}
                        onChange={e =>
                          this.handleCardInput({
                            ...card,
                            owner_name: e.target.value
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
                          value={`**** **** **** ${card?.last_digits}`}
                          readOnly
                        />
                      ) : (
                        <StyledNumberFormat
                          format='#### #### #### ####'
                          placeholder='0000 0000 0000 0000'
                          className='form-control'
                          readOnly={isUsingCard()}
                          value={card.last_digits}
                          onChange={(e: any) =>
                            this.handleCardInput({
                              ...card,
                              last_digits: e.target.value
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
                        value={card?.due_date}
                        onChange={(e: any) =>
                          this.handleCardInput({
                            ...card,
                            due_date: e.target.value
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId='form-card-ccv'>
                      <Form.Label>CCV</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='CCV'
                        value={isUsingCard() ? '***' : card?.ccv}
                        readOnly={isUsingCard()}
                        onChange={e =>
                          this.handleCardInput({
                            ...card,
                            ccv: e.target.value as string
                          })
                        }
                      />
                    </Form.Group>
                  </Form.Row>
                  <Link to={IndexRoute} onClick={(e) => this.handleSubmit(e)}>
                    <Button variant='primary' type='submit'>
                      Confirmar
                    </Button>
                  </Link>
                </div>
              </Form>
            </Container>
            <Container style={{minWidth: 600}}>
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
