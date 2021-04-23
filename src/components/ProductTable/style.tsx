import styled from 'styled-components'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { Button, IconButton, TableCell } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'
import { Table } from 'react-bootstrap'
import DoneIcon from '@material-ui/icons/Done'
import { TableTheme } from './index'
export const ReceiveButton = withStyles(() => ({
  root: {
    color: CCColors.MINT,
    backgroundColor: CCColors.PRIMARYPURPLE,
    '&:hover': {
      backgroundColor: CCColors.DARKPURPLE
    }
  }
}))(Button)

export const ReadyButton = withStyles(() => ({
  root: {
    color: CCColors.PRIMARYPURPLE
  },
  ready: {
    color: 'white',
    backgroundColor: 'green'
  }
}))(IconButton)

export const StyledDone = withStyles(() => ({
  root: {
    // color: CCColors.READYGREEN
    color: CCColors.MINT,
    backgroundColor: CCColors.READYGREEN,
    borderRadius: '50%',
    padding: 2
  }
}))(DoneIcon)

export const StyledTable = withStyles(() => createStyles({}))(Table)

export const StyledTableCell = styled(TableCell)<{ styles: TableTheme }>`
  && {
    background-color: ${props => props.styles.headerBgColor};
    color: ${props => props.styles.headerColor};
    font-size: ${props => (props.styles.slim ? '12px' : '14px')};
  }
`

// export const StyledTableCell = withStyles(theme =>
//   createStyles({
//     head: {
//       backgroundColor: CCColors.PRIMARYYELLOW,
//       color: theme.palette.common.white
//     },
//     body: {
//       fontSize: 14
//     }
//   })
// )(TableCell)

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
