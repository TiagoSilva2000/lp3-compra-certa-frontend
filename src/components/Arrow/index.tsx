import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  NavigateBefore,
  NavigateNext
} from '@material-ui/icons'
import React, { MouseEventHandler } from 'react'
import { CCColors } from '../../constants/colors.constant'
import { StyledArrow, IStyledArrowProps } from './style'

interface IArrowProps extends IStyledArrowProps {
  symbol?: string | Element | JSX.Element
  up?: boolean
  down?: boolean
  right?: boolean
  left?: boolean
  onClick?: MouseEventHandler
}

const Arrow = (props: IArrowProps): JSX.Element => {
  const styledProps: IStyledArrowProps = {
    ...props,
    color: props.color ?? CCColors.INDEXGRAY
  }
  let symbol = props.symbol ?? <NavigateNext />

  symbol = props.down ? <KeyboardArrowDown /> : symbol
  symbol = props.left ? <NavigateBefore /> : symbol
  symbol = props.up ? <KeyboardArrowUp /> : symbol
  return (
    <StyledArrow className='arrow' {...styledProps}>
      {symbol}
    </StyledArrow>
  )
}

export default Arrow
