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
  SaveButton,
  AdjustButton,
  FormLineWrapper
} from './style'
import {
  validateCvv,
  isEmpty,
  validateExpiringDate,
  validateJustNumbers
} from '../utils/RegexValidor'

import CustomChip from '../../components/CustomChip'
import { StyledTextField } from '../../styles/styled-profile-textfield.style'
import { StyledProfileNumberFormat } from '../../styles/styled-profile-number-format.style'

type MyState = {
  cardName: string
  ownerName: string
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
      alert: React.createElement('h1', ''),
      ownerName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCardNameChange(event: any): void {
    this.setState({ cardName: event.target.value })
  }

  handleCardNumberChange(event: any): void {
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

  handleCardExpiringDateChange(event: any): void {
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

  handleCvvChange(event: any): void {
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

  handleSubmit(event: any): void {
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

  handleOwnerNameChange(event: any): void {
    this.setState({ ownerName: event.target.value })
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
              <StyledTextField
                id='filled-basic'
                className='input'
                margin='dense'
                value={this.state.cardName}
                label='Nome do cartão:'
                variant='filled'
                onChange={this.handleCardNameChange.bind(this)}
              />
              <StyledTextField
                id='filled-basic'
                className='input'
                margin='dense'
                value={this.state.ownerName}
                label='Nome do titular:'
                variant='filled'
                onChange={this.handleOwnerNameChange.bind(this)}
              />
              <StyledProfileNumberFormat
                format='#### #### #### ####'
                placeholder='0000 0000 0000 0000'
                onChange={this.handleCardNumberChange.bind(this)}
                label='Número do Cartão:'
                value={this.state.cardNumber}
              />
              <FormLineWrapper>
                <StyledProfileNumberFormat
                  format='##/####'
                  placeholder='00/0000'
                  onChange={this.handleCardExpiringDateChange.bind(this)}
                  label='Validade do cartão:'
                  value={this.state.cardExpiringDate}
                />
                <div className='custom-spacing'></div>
                <StyledTextField
                  id='filled-basic'
                  value={this.state.cvv}
                  className='input'
                  label='CVV:'
                  variant='filled'
                  onChange={this.handleCvvChange.bind(this)}
                />
              </FormLineWrapper>
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
