import React from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { Face } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Alert } from '@material-ui/lab'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  ProfileWrapper,
  StyledProfilePage,
  CustomChip,
  AdjustButton,
  SaveButton
} from './style'

type MyState = {
  name: string
  email: string
  phoneNumber: string
  cpf: string
}

class Profile extends React.Component<{ props: any }, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      name: 'Blueevee blue blue',
      email: 'eevee@blue.com',
      phoneNumber: '71992773546',
      cpf: '1206999992000'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event: any): any {
    this.setState({ name: event.target.value })
  }

  handleEmailChange(event: any): any {
    this.setState({ email: event.target.value })
  }

  handlePhoneNumberChange(event: any): any {
    this.setState({ phoneNumber: event.target.value })
  }

  handleCpfChange(event: any): any {
    this.setState({ cpf: event.target.value })
  }

  handleSubmit(event: any): any {
    console.log('updated user infos:', this.state)
    event.preventDefault()
  }

  render(): JSX.Element {
    return (
      <>
        <Header />
        <StyledProfilePage>
          <CategoryWrapper>
            <h3>Minha conta:</h3>
            <ul>
              {Object.keys(AccountList).map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${AccountList[item]}`}>
                    <a>{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </CategoryWrapper>
          <ProfileWrapper>
            <CustomChip icon={<Face />} color='primary' label='Meu Perfil' />
            <form onSubmit={this.handleSubmit} autoComplete='off'>
              <TextField
                id='filled-basic'
                className='input'
                margin='dense'
                value={this.state.name}
                label='Nome:'
                variant='filled'
                onChange={this.handleNameChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.email}
                className='input'
                label='Email:'
                variant='filled'
                onChange={this.handleEmailChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.phoneNumber}
                className='input'
                label='Telefone:'
                variant='filled'
                onChange={this.handlePhoneNumberChange.bind(this)}
              />

              <TextField
                id='filled-basic'
                value={this.state.cpf}
                className='input'
                label='CPF:'
                variant='filled'
                onChange={this.handleCpfChange.bind(this)}
              />
              <AdjustButton>
                <SaveButton
                  onClick={() => (
                    <Alert severity='success'>Dados salvos com sucesso!</Alert>
                  )}
                  type='submit'
                >
                  Salvar
                </SaveButton>
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
