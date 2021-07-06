import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  NavigateBefore,
  NavigateNext
} from '@material-ui/icons'
import React, { MouseEventHandler } from 'react'
import { CCColors } from '../../mocks/colors.constant'
import { StyledArrow, IStyledArrowProps } from './style'

interface IArrowProps extends IStyledArrowProps {
  symbol?: string | Element | JSX.Element
  up?: boolean
  down?: boolean
  right?: boolean
  left?: boolean
  direction?: 'up' | 'down' | 'right' | 'left'
  disabled?: boolean
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

  if (props.direction) {
    switch (props.direction) {
      case 'up':
        symbol = <KeyboardArrowUp />
        break
      case 'down':
        symbol = <KeyboardArrowDown />
        break
      case 'left':
        symbol = <NavigateBefore />
        break
      case 'right':
        symbol = <NavigateNext />
        break
    }
  }

  return (
    <StyledArrow className='arrow' {...styledProps}>
      {symbol}
    </StyledArrow>
  )
}

export default Arrow
