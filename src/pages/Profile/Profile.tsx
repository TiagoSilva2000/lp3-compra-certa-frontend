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
} from '../../utils/RegexValidor'
import { AccountList } from '../../mocks/category-list.constant'
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
import api from '../../services/api'
import { GetUserResponse } from '../../interfaces/responses'
import IAPIResponse from '../../interfaces/IAPIResponse'
import { tokenChecking } from '../../utils/token-checking'

interface IProfileProps {
  customer?: boolean
  employee?: boolean
}

interface IProfileState {
  first_name: string
  last_name: string
  email: string
  phone: string
  cpf: string
  alert: JSX.Element
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  element = React.createElement('h1', '')

  constructor(props: IProfileProps) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      cpf: '',
      alert: this.element
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(): void {
    tokenChecking();
    api.get<GetUserResponse>('/users')
      .then((result: IAPIResponse<GetUserResponse>) => {
        this.setState({
          first_name: result.data.first_name,
          last_name: result.data.last_name,
          cpf: result.data.cpf,
          email: result.data.email,
          phone: result.data.phone
        })
      })
  }

  handleNameChange(event: any, isFirst: boolean): any {

    if (validateJustLetters(event.target.value)) {
      isFirst ? this.setState({first_name: event.target.value}) : this.setState({last_name: event.target.value})
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      isFirst ? this.setState({first_name: event.target.value}) : this.setState({last_name: event.target.value})
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

  handlePhoneChange(event: any): any {
    if (validateTelephone(event.target.value)) {
      this.setState({ phone: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ phone: event.target.value })
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

  async handleSubmit(event: any): Promise<void> {
    event.preventDefault()

    const {first_name, last_name, email, cpf, phone} = this.state;
    try {
      if (isEmpty(this.state)) {
        await api.put("/users", {
          first_name,
          last_name,
          email,
          cpf,
          phone
        });

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

    } catch(err) {
      console.log(err.message);
      console.log(err);
      // throw new Error(err);
    }
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
                value={this.state.first_name}
                label='Nome:'
                // onChange={this.handleNameChange.bind(this)}
                onChange={(e) => this.handleNameChange(e, true)}
              />
              <StyledTextField
                className='input'
                variant='filled'
                value={this.state.last_name}
                label='Sobrenome:'
                // onChange={this.handleNameChange.bind(this)}
                onChange={(e) => this.handleNameChange(e, false)}
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
                value={this.state.phone}
                label='Telefone'
                onChange={(e) => this.handlePhoneChange(e)}
              />
              <StyledProfileNumberFormat
                format='###.###.###-##'
                placeholder='000.000.000-00'
                value={this.state.cpf}
                label='CPF'
                onChange={(e) => this.handleCpfChange(e)}
              />
              <AdjustButton>
                <SaveButton type='submit' onClick={(e) => this.handleSubmit(e)}>Salvar</SaveButton>
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
