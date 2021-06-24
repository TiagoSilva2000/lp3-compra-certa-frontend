// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { CCColors } from '../../mocks/colors.constant'

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
  padding: 1.5em;
  max-width: 50em;
  height: 90vh;
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

export const StyledTitle = withStyles(theme => ({
  root: {
    color: CCColors.DARKPURPLE
  }
}))(Typography)

export const StyledArrowBack = withStyles(theme => ({
  root: {
    color: CCColors.DARKPURPLE
  }
}))(ArrowBackIcon)
