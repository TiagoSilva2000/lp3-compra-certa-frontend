import styled from 'styled-components'

export const StyledShopListPage = styled.div`
  height: 90;
  width: 100%;
  padding: 7% 10% 7% 10%;
  display: flex;
  justify-content: center;
`

export const CategoryWrapper = styled.div`
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

export const ProductListWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .products-shop-unlist {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 15px;
    align-content: flex-start;

    li {
      height: fit-content;
      margin-bottom: 30px;
    }
  }

  .page-switcher-positioner {
  }
`
