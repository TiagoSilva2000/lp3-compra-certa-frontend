import React, { MouseEventHandler } from 'react'
import { CCColors } from '../../constants/colors.constant'
import { StyledArrow, IStyledArrowProps } from './style'

interface IArrowProps {
  symbol: string
  isRight?: boolean
  absolute?: boolean
  color?: string
  direction?: string
  thin?: boolean
  sizepx?: number
  animationDisabled?: boolean
  reverse?: boolean
  hasBorder?: boolean
  onClick?: MouseEventHandler
}

const Arrow = (props: IArrowProps): JSX.Element => {
  const styledProps: IStyledArrowProps = {
    ...props,
    color: props.color ?? CCColors.INDEXGRAY
  }

  return (
    <StyledArrow className='arrow' {...styledProps}>
      <span>{props.symbol}</span>
    </StyledArrow>
  )
}

export default Arrow
