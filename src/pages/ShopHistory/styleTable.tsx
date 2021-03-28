import styled from 'styled-components'
import { withStyles, createStyles } from '@material-ui/core/styles'
import { Button, TableCell } from '@material-ui/core'
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
