import React, {Component} from 'react'
import { FaPlus } from 'react-icons/fa';
import  {Container, Button, TextField, Typography} from '@material-ui/core'
import { SignInButton, ResgisterButton, StyledLogo, StyledCard, Form, SubmitButton } from './style'
import logo from '../../assets/big-logo.png'



const Login: React.FC = () => {
  return (
    <Container > 
    <StyledCard className="mt-3 mt-md-5" >
      <div className="text-center">
        <StyledLogo src={logo}/>
        <Typography className="mt-3 font-weight-normal" component="h1" variant="h6"> Os melhores produtos você encontra aqui!</Typography>
      </div> 
      <div className="mt-4">

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth 
        id="email"
        label="Email"
        name="username"
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth 
        id="password"
        label="Senha"
        name="password"
        />
      <SignInButton
        type="button"
        variant ="contained"
        fullWidth 
        color="primary"
        size="large"
        className="mb-3 mb-md-2 mt-2"
        >Entrar</SignInButton>
      <ResgisterButton
        variant ="contained"
        fullWidth 
        type="button"
        size="large"
        className="mb-3 mb-md-4 mt-2"
        >Ainda não tem conta? cadastre-se</ResgisterButton>
      
    </div>   
  </StyledCard>
</Container>
  )
}
export default Login