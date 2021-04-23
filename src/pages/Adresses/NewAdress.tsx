import React from 'react'
import { Link } from 'react-router-dom'
import { AddLocation } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../constants/category-list.constant'
import { Alert } from '@material-ui/lab'
import {
  validateJustLetters,
  validateTelephone,
  validateCep,
  isEmpty
} from '../utils/RegexValidor'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  SaveButton,
  AdjustButton
} from './style'

import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'
import { StyledTextField } from '../../styles/styled-profile-textfield.style'
import { StyledProfileNumberFormat } from '../../styles/styled-profile-number-format.style'

type MyState = {
  recipientName: string
  recipientPhone: string
  cep: string
  street: string
  number: string
  complement: string
  alert: JSX.Element
}

class NewAdress extends React.Component<{ props: unknown }, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      recipientName: '',
      recipientPhone: '',
      cep: '',
      street: '',
      number: '',
      complement: '',
      alert: React.createElement('h1', '')
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRecipientNameChange(event: any): void {
    if (validateJustLetters(event.target.value)) {
      this.setState({ recipientName: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ recipientName: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Você deve preencher esse campo com o nome completo
          </Alert>
        )
      })
    }
  }

  handleRecipientPhoneChange(event: any): void {
    if (validateTelephone(event.target.value)) {
      this.setState({ recipientPhone: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ recipientPhone: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>Digite um telefone válido, por favor.</Alert>
        )
      })
    }
  }

  handleCepChange(event: any): void {
    if (validateCep(event.target.value)) {
      this.setState({ cep: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ cep: event.target.value })
      this.setState({
        alert: <Alert severity='error'>Seu cep parece inválido.</Alert>
      })
    }
  }

  handleStreetChange(event: any): void {
    this.setState({ street: event.target.value })
  }

  handleNumberChange(event: any): void {
    this.setState({ number: event.target.value })
  }

  handleComplementChange(event: any): void {
    this.setState({ complement: event.target.value })
  }

  handleSubmit(event: any): void {
    console.log('NEW ADRESS:', this.state)
    if (isEmpty(this.state)) {
      this.setState({
        alert: (
          <Alert severity='success'>Novo endereço salvo com sucesso!</Alert>
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
          <SideBox title='Minha conta' linkedElements={AccountList} />
          <SectionWrapper>
            <CustomChip
              icon={<AddLocation />}
              color='primary'
              label='Novo endereço'
            />
            {this.state.alert}
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              <StyledTextField
                id='filled-basic'
                className='input'
                margin='dense'
                value={this.state.recipientName}
                label='Nome do destinatário:'
                variant='filled'
                onChange={this.handleRecipientNameChange.bind(this)}
              />
              <StyledProfileNumberFormat
                label='Telefone do destinatário:'
                onChange={this.handleRecipientPhoneChange.bind(this)}
                value={this.state.recipientPhone}
                format='(##) # ####-####'
                placeholder='(99) 9 9999-9999'
              />
              <StyledProfileNumberFormat
                label='CEP:'
                onChange={this.handleCepChange.bind(this)}
                value={this.state.cep}
                format='#####.###'
                placeholder='00000.000'
              />
              <StyledTextField
                id='filled-basic'
                value={this.state.street}
                className='input'
                label='Rua/Avenida:'
                variant='filled'
                onChange={this.handleStreetChange.bind(this)}
              />
              <StyledTextField
                id='filled-basic'
                value={this.state.number}
                className='input'
                label='Número:'
                variant='filled'
                onChange={this.handleNumberChange.bind(this)}
              />
              <StyledTextField
                id='filled-basic'
                value={this.state.complement}
                className='input'
                label='Complemento:'
                variant='filled'
                onChange={this.handleComplementChange.bind(this)}
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
export default NewAdress
