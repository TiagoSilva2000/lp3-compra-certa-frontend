import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export interface IStyledArrowProps {
  isRight?: boolean
  absolute?: boolean
  color: string
}

const activatedColorMapper = (color: string): string => {
  switch (color) {
    case CCColors.PRIMARYPURPLE:
      return CCColors.DARKPURPLE
    default:
      return 'black'
  }
}

export const StyledArrow = styled.span<IStyledArrowProps>`
  cursor: pointer;

  position: ${props => (props.absolute ? 'absolute' : 'static')};
  top: ${props => (props.absolute ? '50%' : 'auto')};

  width: auto;
  margin-top: -22px;
  padding: 16px;
  /* color: white; */
  color: ${props => props.color};
  font-weight: bold;
  font-size: 40px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  right: ${props => (props.isRight ? 0 : 'auto')};

  :hover {
    /* color: rgba(0, 0, 0, 0.8); */
    color: ${props => activatedColorMapper(props.color)};
  }
`
