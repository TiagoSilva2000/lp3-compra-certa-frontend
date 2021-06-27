import React from 'react'
import { Link } from 'react-router-dom'
import { AddLocation } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../mocks/category-list.constant'
import { Alert } from '@material-ui/lab'
import {
  validateJustLetters,
  validateTelephone,
  validateCep,
  isEmpty
} from '../../utils/RegexValidor'
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
import { IAddressInfo } from '../../types/address-info'
import api from '../../services/api'

interface IAddressEditProps {
  location: {
    state: {
      data?: IAddressInfo
    }
  }
}

type MyState = {
  ownerName: string
  ownerPhone: string
  cep: string
  street: string
  number: string
  complement: string
  alert: JSX.Element
}

interface IAddressState extends Omit<IAddressInfo, "id"> {
  alert: JSX.Element
}

class NewAdress extends React.Component<IAddressEditProps, IAddressState> {
  isUpdate = false;
  id = -1;

  constructor(props: IAddressEditProps) {
    super(props)

    if (props.location?.state?.data) {
      this.isUpdate = true;
      this.id = props.location.state.data.id;
    }

    this.state = {
      city: props.location?.state?.data?.city ?? '',
      state: props.location?.state?.data?.state ?? '',
      country: props.location?.state?.data?.country ?? '',
      cep: props.location?.state?.data?.cep ?? '',
      street: props.location?.state?.data?.street ?? '',
      neighbour: props.location?.state?.data?.neighbour ?? '',
      number: props.location?.state?.data?.number.toString() ?? '',
      notes: props.location?.state?.data?.notes ?? '',
      ownerName: props.location?.state?.data?.ownerName ?? '',
      ownerPhone: props.location?.state?.data?.ownerPhone ?? '',
      alert: React.createElement('h1', '')
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOwnerNameChange(event: any): void {
    if (validateJustLetters(event.target.value)) {
      this.setState({ ownerName: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ ownerName: event.target.value })
      this.setState({
        alert: (
          <Alert severity='error'>
            Você deve preencher esse campo com o nome completo
          </Alert>
        )
      })
    }
  }

  handleOwnerPhoneChange(event: any): void {
    if (validateTelephone(event.target.value)) {
      this.setState({ ownerPhone: event.target.value })
      this.setState({
        alert: React.createElement('h1', '')
      })
    } else {
      this.setState({ ownerPhone: event.target.value })
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

  handleNeighbourChange(event: any): void {
    this.setState({ neighbour: event.target.value })
  }

  handleCountryChange(event: any): void {
    this.setState({ country: event.target.value })
  }

  handleStateChange(event: any): void {
    this.setState({ state: event.target.value })
  }

  handleCityChange(event: any): void {
    this.setState({ city: event.target.value })
  }

  handleNumberChange(event: any): void {
    this.setState({ number: event.target.value })
  }

  handleComplementChange(event: any): void {
    this.setState({ notes: event.target.value })
  }

  async handleSubmit(event: any): Promise<void> {
    event.preventDefault()
    try {
      if (this.isUpdate) {
        await api.put(`/addresses/${this.id}`, {
          ...this.state,
          house_id: this.state.number,
          details: this.state.notes,
          owner_name: this.state.ownerName,
          owner_phone: this.state.ownerPhone
        });
      } else {
        await api.post('/addresses', {
          ...this.state,
          house_id: this.state.number,
          details: this.state.notes,
          owner_name: this.state.ownerName,
          owner_phone: this.state.ownerPhone
        });
      }

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
    } catch (err) {
      console.log(err);
    }
    // console.log('NEW ADRESS:', this.state)
  }

  render(): JSX.Element {
    console.log(this.isUpdate);
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
                value={this.state.ownerName}
                label='Nome do destinatário:'
                variant='filled'
                onChange={this.handleOwnerNameChange.bind(this)}
              />
              <StyledProfileNumberFormat
                label='Telefone do destinatário:'
                onChange={this.handleOwnerPhoneChange.bind(this)}
                value={this.state.ownerPhone}
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
                value={this.state.city}
                className='input'
                label='City:'
                variant='filled'
                onChange={this.handleCityChange.bind(this)}
              />
              <StyledTextField
                id='filled-basic'
                value={this.state.state}
                className='input'
                label='State:'
                variant='filled'
                onChange={this.handleStateChange.bind(this)}
              />
              <StyledTextField
                id='filled-basic'
                value={this.state.country}
                className='input'
                label='Country:'
                variant='filled'
                onChange={this.handleCountryChange.bind(this)}
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
                value={this.state.neighbour}
                className='input'
                label='Bairro:'
                variant='filled'
                onChange={this.handleNeighbourChange.bind(this)}
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
                value={this.state.notes}
                className='input'
                label='Complemento:'
                variant='filled'
                onChange={this.handleComplementChange.bind(this)}
              />
              <AdjustButton>
                <SaveButton type='submit'>
                  {this.isUpdate ? "Salvar" : "Adicionar"}
                </SaveButton>
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
