import styled from 'styled-components'

interface IStyledNumberBoxProps {
  isActive: boolean
}

export const StyledPageSwitcher = styled.ul`
  list-style-type: none;
`

export const StyledSwitcherBox = styled.li<IStyledNumberBoxProps>`
  display: inline;
  margin-right: 10px;

  border: 1px solid #aaaaaa;
  border-radius: 2px;
  padding: 10px 15px;
  background-color: ${props => (props.isActive ? '#aaaaaa' : 'white')};
  color: ${props => (props.isActive ? 'black' : '#aaaaaa')};
  transition: 0.2s;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};

  :hover {
    background-color: #aaaaaa;
    color: #000000;
  }
`
