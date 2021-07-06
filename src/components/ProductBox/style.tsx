import { Favorite, LocalMall, LocalMallOutlined } from '@material-ui/icons'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import styled from 'styled-components'
import { CCColors } from '../../mocks/colors.constant'

interface IStyledBoxProps {
  dynamicWidth?: boolean
  border?: boolean
}

export const StyledBox = styled.div<IStyledBoxProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => (props.dynamicWidth ? '65%' : '250px')};
  max-width: ${props => (props.dynamicWidth ? '65%' : '250px')};
  /* min-width: 200px; */
  padding: 20px 10px;
  transition: 0.3s;
  border: ${props => (props.border ? `1px solid ${CCColors.MINT}` : 'none')};
  background-color: white;
  border-radius: 5px;
  margin: 5px;

  div#price-title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  div#price-wrapper {
    justify-self: end;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img {
    width: 145px;
    height: 145px;
    justify-self: center;
    align-self: center;
  }

  p {
    margin: 5px;
  }

  h3#product-title {
    margin: 5px;
    font-size: 16px;
    font-weight: lighter;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p#original-price {
    color: ${CCColors.INDEXGRAY};
    font-weight: lighter;
    /* text-decoration: line-through; */
    font-weight: bold;
  }

  p#no-original-price {
  }

  p#divided-by {
  }

  p#current-price {
    font-weight: 800;
    font-size: 1.8em;
  }
`

export const StyledFavoriteIcon = styled(FavoriteBorder)`
  color: ${CCColors.INDEXGRAY};
  position: absolute;
  top: 2%;
  right: 5%;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${CCColors.PRIMARYPURPLE};
  }
`

export const StyledActiveFavIcon = styled(Favorite)`
  color: ${CCColors.PRIMARYPURPLE};
  position: absolute;
  top: 2%;
  right: 5%;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #ff2400aa;
  }
`

export const StyledCartIcon = styled(LocalMallOutlined)`
  position: absolute;
  color: ${CCColors.INDEXGRAY};
  top: 2%;
  left: 5%;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #85bb65;
  }
`

export const StyledActiveCartIcon = styled(LocalMall)`
  position: absolute;
  color: #85bb65;
  top: 2%;
  left: 5%;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${'red'};
  }
`
