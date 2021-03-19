import React from 'react'
import { StyledArrow } from './style'

interface IArrowProps {
  symbol: string
}

const Arrow = (props: IArrowProps): JSX.Element => (
  <StyledArrow>{props.symbol}</StyledArrow>
)

export default Arrow
