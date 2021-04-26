import React from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Alert } from '@material-ui/lab'
import {
  validateCpf,
  validateEmail,
  validateJustLetters,
  validateTelephone,
  isEmpty
} from '../utils/RegexValidor'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  ProfileWrapper,
  StyledProfilePage,
  AdjustButton,
  SaveButton
} from './style'
import { StyledNumberFormat } from '../../styles/styled-number-format.style'
import SideBox from '../../components/SideBox'
import CustomChip from '../../components/CustomChip'
import NumberFormat from 'react-number-format'
import { format } from 'prettier'
import { StyledTextField } from '../../styles/styled-profile-textfield.style'
import { StyledProfileNumberFormat } from '../../styles/styled-profile-number-format.style'

interface IProfileProps {
  customer?: boolean
  employee?: boolean
}

interface IProfileState {
  name: string
  email: string
  phoneNumber: string
  cpf: string
  alert: JSX.Element
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  element = React.createElement('h1', '')

  constructor(props: IProfileProps) {
    super(props)
    this.state = {
      name: 'Blueevee blue blue',
      email: 'eevee@blue.com',
      phoneNumber: '(71) 9 92773546',
      cpf: '42516448754',
      alert: this.element
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event: any): any {
    if (validateJustLetters(event.target.value)) {
      this.setState({ name: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ name: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Você deve preencher esse campo com o nome completo
          </Alert>
        )
      })
    }
  }

  handleEmailChange(event: any): any {
    if (validateEmail(event.target.value)) {
      this.setState({ email: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ email: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Parece que seu email está incorreto, preciso que você use um email
            válido.
          </Alert>
        )
      })
    }
  }

  handlePhoneNumberChange(event: any): any {
    if (validateTelephone(event.target.value)) {
      this.setState({ phoneNumber: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ phoneNumber: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>Digite um telefone válido, por favor.</Alert>
        )
      })
    }
  }

  handleCpfChange(event: any): any {
    if (validateCpf(event.target.value)) {
      this.setState({ cpf: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ cpf: event.target.value })
      this.setState({
        alert: <Alert severity='error'>Digite um CPF válido, por favor.</Alert>
      })
    }
  }

  handleSubmit(event: any): any {
    console.log('updated user infos:', this.state)
    if (isEmpty(this.state)) {
      this.setState({
        alert: <Alert severity='success'>Dados salvos com sucesso!</Alert>
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
        <StyledProfilePage>
          <SideBox title='Minha conta' linkedElements={AccountList} />
          <ProfileWrapper>
            <CustomChip icon={<Face />} color='primary' label='Meu Perfil' />
            {this.state.alert}
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              <StyledTextField
                className='input'
                variant='filled'
                value={this.state.name}
                label='Nome completo:'
                onChange={this.handleNameChange.bind(this)}
              />
              <StyledTextField
                value={this.state.email}
                className='input'
                label='Email:'
                variant='filled'
                onChange={this.handleEmailChange.bind(this)}
              />
              <StyledProfileNumberFormat
                format='(##) # ####-####'
                placeholder='(99) 9 9999-9999'
                value={this.state.phoneNumber}
                label='Telefone'
              />
              <StyledProfileNumberFormat
                format='###.###.###-##'
                placeholder='000.000.000-00'
                value={this.state.cpf}
                label='CPF'
              />
              <AdjustButton>
                <SaveButton type='submit'>Salvar</SaveButton>
              </AdjustButton>
            </form>
          </ProfileWrapper>
        </StyledProfilePage>
        <Footer />
      </>
    )
  }
}
export default Profile
