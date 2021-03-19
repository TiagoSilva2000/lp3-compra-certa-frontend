import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

const chooseBgColor = (isActive: boolean) =>
  isActive ? CCColors.PRIMARYPURPLE : 'white'

interface IStyledIndexProps {
  isActive: boolean
}

export const StyledIndexer = styled.ul`
  list-style-type: none;
  min-width: 100px;
  display: inline-block;
  width: 100%;
`

export const StyledIndex = styled.li<IStyledIndexProps>`
  display: inline-block;
  min-width: 10px;
  min-height: 3px;
  width: 30px;
  height: 4px;
  border-radius: 15px;
  padding: 2px;
  background-color: ${props => chooseBgColor(props.isActive)};
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;
`
