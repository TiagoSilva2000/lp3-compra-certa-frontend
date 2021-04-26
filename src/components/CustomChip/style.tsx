import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'
import { CCColors } from '../../constants/colors.constant'

interface IStyledCustomChipProps {
  color: string
}

export const StyledCustomChip = withStyles(theme => ({
  root: {
    clickable: false,
    height: 40,
    borderRadius: 40 / 2,
    marginBottom: '1em',
    padding: 2
  },
  colorPrimary: {
    backgroundColor: CCColors.PRIMARYPURPLE
  },
  colorSecondary: {
    backgroundColor: CCColors.PRIMARYYELLOW
  }
}))(Chip)

// export const StyledCustomChipp = styled(Chip)<IStyledCustomChipProps>`
//   pointer-events: none;
//   height: 40;
//   border-radius: 40 / 2;
//   margin-bottom: '1em';
//   background-color: ${props => props.color};
// `
