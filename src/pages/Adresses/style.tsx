// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Chip, Card } from '@material-ui/core'
import { CCColors } from '../../mocks/colors.constant'

export const StyledCard = withStyles(theme => ({
  root: {
    backgroundColor: CCColors.LIGHTPURPLE,
    margin: '1em',
    width: '80%'
  }
}))(Card)

export const SaveButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    width: 160,
    backgroundColor: CCColors.PRIMARYYELLOW,
    '&:hover': {
      backgroundColor: CCColors.DARKYELLOW
    }
  }
}))(Button)

export const AddCustomChip = withStyles(theme => ({
  root: {
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    cursor: 'pointer',
    textDecoration: 'none'
  },
  colorPrimary: {
    backgroundColor: CCColors.PRIMARYYELLOW
  }
}))(Chip)

export const StyledPage = styled.div`
  height: 90;
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  justify-content: center;
`

export const AdjustNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2em;
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${CCColors.PRIMARYYELLOW};
  }
`
export const AdjustButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
  width: 100%;
`

export const CategoryWrapper = styled.div`
  padding: 30px 15px;
  width: 20%;
  height: 100%;
  border: 1px solid #aaaaaa;
  margin-top: 30px;

  h3 {
    font-size: 22px;
    margin-bottom: 22%;
    width: 100%;
  }
  ul {
    height: 60%;
    list-style-type: none;
    li {
      width: 100%;
      height: 100%;
      margin-bottom: 5%;
      cursor: pointer;
      line-height: 2;
      color: #aaaaaa;
      a {
        width: 100%;
        height: fit-content;
        color: ${CCColors.PRIMARYPURPLE};
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
      }
      a:hover {
        color: ${CCColors.PRIMARYYELLOW};
      }
    }
  }
`

export const SectionWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .input {
      width: 100%;
      padding: 1em;
    }
  }
`
