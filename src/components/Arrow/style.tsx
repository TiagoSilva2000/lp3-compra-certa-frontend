import styled, { keyframes } from 'styled-components'

import { CCColors } from '../../constants/colors.constant'

function activatedColorMapper(color?: string): string {
  switch (color) {
    case CCColors.PRIMARYPURPLE:
      return CCColors.DARKPURPLE
    default:
      return 'black'
  }
}

export interface IStyledArrowProps {
  isRight?: boolean
  absolute?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
  color?: string
  direction?: string
  thin?: boolean
  animationDisabled?: boolean
  reverse?: boolean
  hasBorder?: boolean
  width?: number
  height?: number
  fontSize?: number
}

export const StyledArrow = styled.div<IStyledArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  cursor: pointer;
  text-align: center;
  background-color: ${props => (props.reverse ? props.color : 'transparent')};
  box-shadow: ${props =>
    props.hasBorder
      ? '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19)'
      : ''};
  border: ${props =>
    props.hasBorder
      ? `1px solid ${props.reverse ? 'white' : props.color}`
      : 'transparent'};
  border-radius: ${props => (props.hasBorder ? `50%` : '0px')};

  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: ${props => props.absolute?.top ?? 'auto'};
  right: ${props => props.absolute?.right ?? 'auto'};
  left: ${props => props.absolute?.left ?? 'auto'};
  bottom: ${props => props.absolute?.right ?? 'auto'};

  transition: 0.6s ease;

  svg {
    color: ${props => (props.reverse ? 'white' : props.color)};
    width: ${props => (props.width ? props.width : 'initial')};
    height: ${props => (props.height ? props.height : 'initial')};
  }

  :hover {
    color: ${props =>
      props.animationDisabled ? '' : activatedColorMapper(props.color)};
    background-color: ${props =>
      props.animationDisabled ? '' : activatedColorMapper(props.color)};
  }
`
// span {
//   text-align: center;
//   font-family: monospace;
//   width: fit-content;
//   height: fit-content;
//   font-weight: ${props => (props.thin ? 'lighter' : 'bold')};
//   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '40px')};
//   writing-mode: ${props => (props.direction ? props.direction : 'initial')};
// }

// export const StyledArrowDiv = styled.span<IStyledArrowProps>`
//   user-select: none;
//   cursor: pointer;
//   font-family: monospace;

//   color: ${props => (props.reverse ? 'white' : props.color)};
//   font-weight: ${props => (props.thin ? 'lighter' : 'bold')};
//   font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '40px')};
//   writing-mode: ${props => (props.direction ? props.direction : 'initial')};
//   position: ${props => (props.absolute ? 'absolute' : 'static')};
//   top: ${props => (props.absolute ? '50%' : 'auto')};
//   right: ${props => (props.isRight ? 0 : 'auto')};
//   border: ${props =>
//     props.hasBorder
//       ? `1px solid ${props.reverse ? 'white' : props.color}`
//       : 'transparent'};
//   border-radius: ${props => (props.fontSize ? `50%` : '8px')};
//   padding: ${props => (props.hasBorder ? '6px 2px' : 'none')};
//   text-align: center;

//   background-color: ${props => (props.reverse ? props.color : 'transparent')};
//   transition: 0.6s ease;
//   :hover {
//     color: ${props =>
//       props.animationDisabled ? '' : activatedColorMapper(props.color)};
//   }
// `
