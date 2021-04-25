import React from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import {
  RegisterButton,
  StyledCard,
  StyledContainer,
  StyledImg,
  StyledTitle,
  StyledArrowBack
} from './style'
import loginImage from '../../assets/login.svg'

const Register = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledCard className='mt-1 mt-md-2'>
        <Link to='/login'>
          <StyledArrowBack />
        </Link>
        <StyledTitle className='mt-3 font-weight-normal' variant='h2'>
          Cadastre-se, é rápido :D
        </StyledTitle>
        <div className='mt-2'>
          <TextField
            variant='filled'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
          />
          <TextField
            variant='filled'
            margin='normal'
            type='password'
            required
            fullWidth
            id='password'
            label='Senha'
            name='password'
          />
          <TextField
            variant='filled'
            margin='normal'
            type='password'
            required
            fullWidth
            id='password'
            label='Confirme sua senha'
            name='password'
          />
          <RegisterButton
            variant='contained'
            fullWidth
            type='button'
            size='large'
            className='mb-2 mt-md-2 mt-2'
          >
            Cadastrar
          </RegisterButton>
        </div>
      </StyledCard>
      <StyledImg src={loginImage} />
    </StyledContainer>
  )
}
export default Register
