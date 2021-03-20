import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

export const SignInButton = withStyles(theme => ({
  root:{
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE ,
    '&:hover':{
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)

export const ResgisterButton = withStyles(theme => ({
  root:{
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYYELLOW ,
    '&:hover':{
      backgroundColor: CCColors.DARKYELLOW
    }
  }
}))(Button)

export const StyledLogo = styled.img`
  max-width: 100%;
  `
  
  export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2em;
  padding: 2em 5em 2em 5em;
  max-width: 50em;
  background-color: ${CCColors.MINT};
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #ff6b6b;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`

export const SubmitButton = styled.div`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }`