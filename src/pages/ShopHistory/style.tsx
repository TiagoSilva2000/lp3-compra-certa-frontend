import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Button, Chip } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

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

export const CustomChip = withStyles(theme => ({
  root: {
    clickable: false,
    height: 40,
    borderRadius: 40 / 2
  },
  colorPrimary: {
    backgroundColor: CCColors.PRIMARYPURPLE
  },
  colorSecondary: {
    backgroundColor: CCColors.PRIMARYYELLOW
  }
}))(Chip)

export const HistoryCustomChip = withStyles(theme => ({
  root: {
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    cursor: 'pointer',
    textDecoration: 'none',
    color: CCColors.INDEXGRAY
  },
  colorPrimary: {
    backgroundColor: CCColors.LIGHTPURPLE
  }
}))(Chip)

export const AdjustNav = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2em;

  Link {
    text-decoration: none;
    color: ${CCColors.PRIMARYYELLOW};
  }
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
      a,
      Link {
        width: 100%;
        height: fit-content;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
      }

      :hover {
        color: ${CCColors.PRIMARYPURPLE};
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
  padding: 1em;
`
