import React from 'react'
import { Link } from 'react-router-dom'
import { LocalAtm } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Alert } from '@material-ui/lab'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  CustomChip,
  SaveButton,
  AdjustButton
} from './style'
import {
  validateCvv,
  isEmpty,
  validateExpiringDate,
  validateJustNumbers
} from '../utils/RegexValidor'

import { TextField } from '@material-ui/core'

type MyState = {
  cardName: string
  cardNumber: string
  cardExpiringDate: string
  cvv: string
  alert: JSX.Element
}

class NewCard extends React.Component<{ props: any }, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cardName: '',
      cardNumber: '',
      cardExpiringDate: '',
      cvv: '',
      alert: React.createElement('h1', '')
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCardNameChange(event: any): any {
    this.setState({ cardName: event.target.value })
  }

  handleCardNumberChange(event: any): any {
    if (validateJustNumbers(event.target.value)) {
      this.setState({ cardNumber: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ cardNumber: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Digite apenas o número do cartão sem espaços.
          </Alert>
        )
      })
    }
  }

  handleCardExpiringDateChange(event: any): any {
    if (validateExpiringDate(event.target.value)) {
      this.setState({ cardExpiringDate: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ cardExpiringDate: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Você deve digitar a validade do cartão no formado MM/AAAA.
          </Alert>
        )
      })
    }
  }

  handleCvvChange(event: any): any {
    if (validateCvv(event.target.value)) {
      this.setState({ cvv: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ cvv: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Você deve digitar o código de 3 digítos que fica atrás do cartão.
          </Alert>
        )
      })
    }
  }

  handleSubmit(event: any): any {
    console.log('NEW CARD:', this.state)
    if (isEmpty(this.state)) {
      this.setState({
        alert: (
          <Alert severity='success'>Cartão de crédito salvo com sucesso!</Alert>
        )
      })
    } else {
      this.setState({
        alert: (
          <Alert severity='error'>Você deve preencher todos os campos.</Alert>
        )
      })
    }
    event.preventDefault()
  }

  render(): JSX.Element {
    return (
      <>
        <Header />
        <StyledPage>
          <CategoryWrapper>
            <h3>Minha conta:</h3>
            <ul>
              {AccountList.map(({ name, route }, idx) => (
                <li key={idx}>
                  <Link to={route}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </CategoryWrapper>
          <SectionWrapper>
            <CustomChip
              icon={<LocalAtm />}
              color='primary'
              label='Novo cartão'
            />
            {this.state.alert}
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              <TextField
                id='filled-basic'
                className='input'
                margin='dense'
                value={this.state.cardName}
                label='Nome do cartão:'
                variant='filled'
                onChange={this.handleCardNameChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.cardNumber}
                className='input'
                label='Número do cartão:'
                variant='filled'
                onChange={this.handleCardNumberChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.cardExpiringDate}
                className='input'
                label='Validade do cartão:'
                variant='filled'
                onChange={this.handleCardExpiringDateChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.cvv}
                className='input'
                label='CVV:'
                variant='filled'
                onChange={this.handleCvvChange.bind(this)}
              />
              <AdjustButton>
                <SaveButton type='submit'>Adicionar</SaveButton>
              </AdjustButton>
            </form>
          </SectionWrapper>
        </StyledPage>
        <Footer />
      </>
    )
  }
}
export default NewCard
