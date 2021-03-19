import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 250px;
  min-width: 200px;
  /* max-height: 149px; */
  padding: 20px 10px;
  transition: 0.3s;
  /* background-color: ${CCColors.INDEXGRAY}; */
  box-sizing: border-box;

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
    color: ${CCColors.FONTGRAY};
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
