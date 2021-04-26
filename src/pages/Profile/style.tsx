// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Chip, TextField } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'
import NumberFormat from 'react-number-format'
import { StyledNumberFormat } from '../../styles/styled-number-format.style'

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

export const AdjustButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2em;
  width: 100%;
`
export const StyledProfilePage = styled.div`
  height: 90;
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  justify-content: center;
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

export const ProfileWrapper = styled.div`
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
