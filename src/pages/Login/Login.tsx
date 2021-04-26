import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Typography } from '@material-ui/core'
import {
  SignInButton,
  RegisterButton,
  StyledLogo,
  StyledCard,
  StyledContainer,
  StyledImg
} from './style'
import logo from '../../assets/big-logo.png'
import shoppingImage from '../../assets/shopping.svg'

const Login = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledCard className='mt-1 mt-md-2'>
        <div className='text-center'>
          <StyledLogo src={logo} />
          <Typography
            className='mt-3 font-weight-normal'
            component='h1'
            variant='h6'
          >
            {' '}
            Os melhores produtos você encontra aqui!
          </Typography>
        </div>
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
          <SignInButton
            type='button'
            variant='contained'
            fullWidth
            size='large'
            className='mb-2 mb-md-2 mt-2'
          >
            Entrar
          </SignInButton>
          <Link to='/register'>
            <RegisterButton
              variant='contained'
              fullWidth
              type='button'
              size='large'
              className='mb-2 mt-md-2 mt-2'
            >
              Ainda não tem conta? cadastre-se
            </RegisterButton>
          </Link>
        </div>
      </StyledCard>
      <StyledImg src={shoppingImage} />
    </StyledContainer>
  )
}
export default Login
