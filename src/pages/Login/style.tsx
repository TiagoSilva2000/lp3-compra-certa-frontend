// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

export const StyledLogo = styled.img`
  max-width: 30em;
  margin: 0;
  padding: 0;
  /* max-heigth: 5em; */
`

export const StyledImg = styled.img`
  margin: 5em;
  width: 40em;
  min-width: 20em;
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2em;
  padding: 1em 2.5em 1em 2.5em;
  max-width: 50em;
  heigth: 30vh;
  background-color: ${CCColors.MINT};
`

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 2.6em;
  background-color: ${CCColors.DARKPURPLE};
`

export const StyledH6 = styled.h6`
  color: ${CCColors.DARKPURPLE};
  font-size: 1.5rem;
  font-weight: 300;
`

export const SignInButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)

export const RegisterButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYYELLOW,
    '&:hover': {
      backgroundColor: CCColors.DARKYELLOW
    }
  }
}))(Button)
