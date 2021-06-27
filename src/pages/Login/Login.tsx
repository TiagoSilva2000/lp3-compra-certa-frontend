import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
import api from '../../services/api'
import { storageFirstNameKey, storageTokenKey } from '../../utils/constants'
import { GetAuthResponse } from '../../interfaces/responses'
import { IndexRoute } from '../../mocks/routes.constant'
import { setStorageVariables } from '../../utils/setStorageVariables'


const Login = (): JSX.Element => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const handleSubmit = async () => {
    
    try {
      const result = await api.post<GetAuthResponse>('/auths', {
        email,
        password
      })
      setStorageVariables(result.data);
      history.push(IndexRoute);
    } catch(err) {
      console.log(err);
      throw new Error(err);
    }


  }

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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignInButton
            type='button'
            variant='contained'
            fullWidth
            size='large'
            className='mb-2 mb-md-2 mt-2'
            onClick={() => handleSubmit()}
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
