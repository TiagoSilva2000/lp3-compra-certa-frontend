import styled from 'styled-components'

export const StyledSideBox = styled.div`
  padding: 30px 15px;
  width: 20%;
  height: 100%;
  border: 1px solid #aaaaaa;
  margin-top: 30px;

  h3 {
    font-size: 22px;
    margin-bottom: 22%;
    width: 100%;
  }
  ul {
    height: 60%;
    list-style-type: none;
    li {
      width: 100%;
      height: 100%;
      margin-bottom: 5%;
      cursor: pointer;
      line-height: 2;
      color: #aaaaaa;
      a {
        width: 100%;
        height: fit-content;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
      }

      :hover {
        color: blue;
      }
    }
  }
`
