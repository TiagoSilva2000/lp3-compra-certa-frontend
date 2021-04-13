import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

export const StyledPage = styled.div`
  height: 90;
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  justify-content: center;
`

export const Progress = withStyles(theme => ({
  root: {
    color: CCColors.DARKPURPLE,
    width: '30em',
    height: '30em'
  }
}))(CircularProgress)
