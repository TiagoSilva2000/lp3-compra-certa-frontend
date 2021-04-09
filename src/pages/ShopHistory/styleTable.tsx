import styled from 'styled-components'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { Button, TableCell } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

export const ReceiveButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)

export const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      backgroundColor: CCColors.PRIMARYYELLOW,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell)

export const StyledProductImg = styled.img`
  border-radius: 1em;
  width: 5em;
  height: 5em;
`

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 50em;
  p {
    font-weight: 500;
    font-family: Helvetica, Arial, sans-serif;
  }
`
