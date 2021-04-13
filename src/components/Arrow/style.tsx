import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

function activatedColorMapper(color: string): string {
  switch (color) {
    case CCColors.PRIMARYPURPLE:
      return CCColors.DARKPURPLE
    default:
      return 'black'
  }
}

export interface IStyledArrowProps {
  isRight?: boolean
  absolute?: boolean
  color: string
  direction?: string
  thin?: boolean
  sizepx?: number
  animationDisabled?: boolean
  reverse?: boolean
  hasBorder?: boolean
}

export const StyledArrow = styled.div<IStyledArrowProps>`
  min-width: ${props => (props.hasBorder ? '22px' : 'fit-content')};
  min-height: ${props => (props.hasBorder ? '22px' : 'fit-content')};
  user-select: none;
  cursor: pointer;
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: ${props => (props.absolute ? '50%' : 'auto')};
  right: ${props => (props.isRight ? 0 : 'auto')};
  border: ${props =>
    props.hasBorder
      ? `1px solid ${props.reverse ? 'white' : props.color}`
      : 'transparent'};
  border-radius: ${props => (props.sizepx ? `50%` : '8px')};
  text-align: center;
  background-color: ${props => (props.reverse ? props.color : 'transparent')};
  transition: 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    text-align: center;
    font-family: monospace;
    color: ${props => (props.reverse ? 'white' : props.color)};
    font-weight: ${props => (props.thin ? 'lighter' : 'bold')};
    font-size: ${props => (props.sizepx ? `${props.sizepx}px` : '40px')};
    writing-mode: ${props => (props.direction ? props.direction : 'initial')};
  }
  :hover {
    color: ${props =>
      props.animationDisabled ? '' : activatedColorMapper(props.color)};
    background-color: ${props =>
      props.animationDisabled ? '' : activatedColorMapper(props.color)};
  }
`

export const StyledArrowDiv = styled.span<IStyledArrowProps>`
  user-select: none;
  cursor: pointer;
  font-family: monospace;

  color: ${props => (props.reverse ? 'white' : props.color)};
  font-weight: ${props => (props.thin ? 'lighter' : 'bold')};
  font-size: ${props => (props.sizepx ? `${props.sizepx}px` : '40px')};
  writing-mode: ${props => (props.direction ? props.direction : 'initial')};
  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: ${props => (props.absolute ? '50%' : 'auto')};
  right: ${props => (props.isRight ? 0 : 'auto')};
  border: ${props =>
    props.hasBorder
      ? `1px solid ${props.reverse ? 'white' : props.color}`
      : 'transparent'};
  border-radius: ${props => (props.sizepx ? `50%` : '8px')};
  padding: ${props => (props.hasBorder ? '6px 2px' : 'none')};
  text-align: center;

  background-color: ${props => (props.reverse ? props.color : 'transparent')};
  transition: 0.6s ease;
  :hover {
    color: ${props =>
      props.animationDisabled ? '' : activatedColorMapper(props.color)};
  }
`
