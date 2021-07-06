import React from 'react'
import { Link, useHistory } from 'react-router-dom'
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
import api from '../../services/api'
import { storageFirstNameKey, storageTokenKey } from '../../utils/constants'
import {GetAuthResponse} from '../../interfaces/responses'
import { IndexRoute } from '../../mocks/routes.constant'
import { setStorageVariables } from '../../utils/setStorageVariables'
const Register = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post<GetAuthResponse>('/users', {
        email,
        password,
        passwordConfirmation
      });
      const {token} = response.data

      if (!token.token) {
        throw new Error("register error, token does not exist");
      }

      setStorageVariables(response.data);
      history.push(IndexRoute);
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }

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
          <TextField
            variant='filled'
            margin='normal'
            type='password'
            required
            fullWidth
            id='password_confirmation'
            label='Confirme sua senha'
            name='password_confirmation'
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <RegisterButton
            variant='contained'
            fullWidth
            type='button'
            size='large'
            className='mb-2 mt-md-2 mt-2'
            onClick={() => handleSubmit()}
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
