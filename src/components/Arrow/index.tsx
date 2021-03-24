import React from 'react'
import { CCColors } from '../../constants/colors.constant'
import { StyledArrow, IStyledArrowProps } from './style'

interface IArrowProps {
  symbol: string
  isRight?: boolean
  absolute?: boolean
  color?: string
}

const Arrow = (props: IArrowProps): JSX.Element => {
  const styledProps: IStyledArrowProps = {
    ...props,
    color: props.color ?? CCColors.INDEXGRAY
  }

  return <StyledArrow {...styledProps}>{props.symbol}</StyledArrow>
}

export default Arrow
