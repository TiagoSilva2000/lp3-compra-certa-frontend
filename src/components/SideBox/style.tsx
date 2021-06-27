import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { CCColors } from '../../mocks/colors.constant'

export const StyledSideBox = styled(Container)`
  padding: 20px 0px 30px 0px;
  width: 20%;
  height: 100%;
  border: 1px solid #aaaaaa;
  margin-top: 30px;
  border-radius: 4px;
  h3 {
    font-size: 22px;
    margin-bottom: 15%;
    width: 100%;
    padding: 1% 3% 8% 5%;
    font-weight: bolder;
    color: ${CCColors.DARKPURPLE};
    border-bottom: 1px solid #aaaaaa;
  }

  h4 {
    margin-bottom: 8%;
    padding-bottom: 8%;

    border-bottom: 1px solid #aaaaaa;
  }

  h5 {
    margin-bottom: 6%;
    padding-bottom: 8%;
    border-bottom: 1px solid #aaaaaa;
  }

  ul {
    height: 60%;
    list-style-type: none;

    &.all-categories-wrapper {
      padding: 1% 0% 8% 5%;
    }

    &.subcategories-wrapper {
      padding-left: 3%;
      li {
        padding-left: 1%;
      }
    }

    &.categories-sections-wrapper {
      padding-left: 1%;
      margin-bottom: 5%;
    }

    &.categories-wrapper {
      padding-left: 2%;
    }
    li {
      width: 100%;
      height: 100%;
      margin-bottom: 2%;
      cursor: pointer;
      line-height: 2;
      a {
        color: #333;
        width: 100%;
        height: fit-content;
        text-decoration: none;
        transition: 0.2s;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
          color: ${CCColors.DARKYELLOW};
        }
      }
    }
  }
`
