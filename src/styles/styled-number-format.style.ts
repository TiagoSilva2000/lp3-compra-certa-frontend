import { withStyles } from '@material-ui/core'
import NumberFormat from 'react-number-format'
export const StyledNumberFormat = withStyles(theme => ({
  root: {
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + 0.75rem + 2px)',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  },
  profile: {
    font: 'inherit',
    color: 'currentColor',
    width: '100%',
    border: 0,
    height: '1.1876em',
    margin: 0,
    display: 'block',
    minWidth: 0,
    background: 'none',
    boxSizing: 'content-box',
    animationName: 'mui-auto-fill-cancel',
    letterSpacing: 'inherit',
    animationDuration: '10ms',
    padding: '27px 12px 10px'
  }
}))(NumberFormat)
