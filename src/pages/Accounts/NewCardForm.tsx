import React from 'react'
import { Link } from 'react-router-dom'
import { LocalAtm } from '@material-ui/icons'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AccountList } from '../../constants/category-list.constant'
import {
  CategoryWrapper,
  SectionWrapper,
  StyledPage,
  CustomChip,
  SaveButton,
  AdjustButton
} from './style'

import { TextField } from '@material-ui/core'

type MyState = {
  cardName: string
  cardNumber: string
  cardExpiringDate: string
  cvv: string
}

class NewCard extends React.Component<{ props: any }, MyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cardName: '',
      cardNumber: '',
      cardExpiringDate: '',
      cvv: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCardNameChange(event: any): any {
    this.setState({ cardName: event.target.value })
  }

  handleCardNumberChange(event: any): any {
    this.setState({ cardNumber: event.target.value })
  }

  handleCardExpiringDateChange(event: any): any {
    this.setState({ cardExpiringDate: event.target.value })
  }

  handleCvvChange(event: any): any {
    this.setState({ cvv: event.target.value })
  }

  handleSubmit(event: any): any {
    console.log('updated user infos:', this.state)
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
              {Object.keys(AccountList).map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${AccountList[item]}`}>
                    <a>{item}</a>
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
                <SaveButton>Adicionar</SaveButton>
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
