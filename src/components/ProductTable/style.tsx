import styled from 'styled-components'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { Button, IconButton, TableCell } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'
import { Table } from 'react-bootstrap'

export const ReceiveButton = withStyles(theme => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)

export const ReadyButton = withStyles(theme => ({
  root: {
    color: CCColors.PRIMARYPURPLE
  },
  ready: {
    color: 'white',
    backgroundColor: 'green'
  }
}))(IconButton)

export const StyledTable = withStyles(theme => createStyles({}))(Table)

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

export const QuantitySelectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  p {
    width: fit-content;
    cursor: pointer;
    color: ${CCColors.INDEXGRAY};
    margin-top: 8px;
    padding-bottom: 1px;
    border-bottom: 1px solid ${CCColors.INDEXGRAY};
  }
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
