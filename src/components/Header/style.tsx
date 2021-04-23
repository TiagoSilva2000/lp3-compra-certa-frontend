import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledHeader = styled.header`
  background-color: ${CCColors.LIGHTPURPLE};
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const StyledRegisterDiv = styled.ul`
  width: 300px;
  height: 80px;
  max-width: fit-content;
  text-align: left;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  list-style-type: none;
  margin: 0 12px;
  padding: 5px;

  li {
    margin-bottom: 5px;
  }
  .register-logged-account {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .styled-link {
    color: white;
    :hover {
      text-decoration: underline;
    }
  }
`

export const HeaderSearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  align-self: center;

  width: 90%;

  ul.icons-holder {
    margin: 10px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      position: relative;
      text-decoration: none;
      margin-right: 15px;
      padding: 8px;
      color: #333333;

      &:hover {
        span {
          background-color: ${CCColors.MINT};
          color: ${CCColors.DARKPURPLE};
        }
      }
      span {
        line-height: 1.6;
        text-align: center;
        width: 22px;
        height: 22px;
        position: absolute;
        background-color: ${CCColors.DARKPURPLE};
        font-weight: 700;
        color: ${CCColors.MINT};
        font-size: 12px;
        top: auto;
        border-radius: 50%;
        right: 0;
        bottom: 0;
        transition: 0.3s;
        &.wishlist-qnt {
          right: 2px;
          bottom: 2px;
        }
      }
    }
  }
`

export const TopHeaderText = styled.span`
  margin-right: 15px;
  color: grey;
  letter-spacing: 0px;
`
export const HeaderDepartmentListNav = styled.nav`
  background-color: ${CCColors.DARKPURPLE};
  padding: 5px 105px;
  height: 100%;
  width: 100%;
  display: flex;
`

export const AllDepartmentsIndexer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 5px;
  width: 20%;
  height: fit-content;
  align-self: center;

  color: black;
  background-color: white;
  font-weight: bold;
  line-height: 1.15;
  font-size: 0.875rem;
  letter-spacing: 0.02ch;
  border-radius: 24rem;
  text-align: center;
  vertical-align: middle;
  /* padding: 0.4rem 0.1rem; */

  p {
    padding: 0;
    margin: 0;
    margin-left: 9px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  :hover {
    cursor: pointer;
  }
`

export const DepartmentUnList = styled.ul`
  display: inline;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  background-color: ${CCColors.DARKPURPLE};

  li {
    display: inline-block;
    word-spacing: normal;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: end;

    a {
      color: white;
      font-weight: bold;
      border-radius: 15px;
      border-radius: 24rem;
      padding: 7px 12px;
      padding: 0.5rem 1rem;
      text-decoration: none;
      transition: 0.3s;
      line-height: 1.15;

      :hover {
        border-radius: 20px;
        background-color: purple;
        color: white;
      }
    }
  }
`

export const StyledSearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 10px 40px 10px 20px;
    border: 2px solid ${CCColors.PRIMARYPURPLE};
    :focus {
      border-bottom: 2px solid blue;
    }
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 16%;
    right: 0.1rem;
    padding: 0 0.2rem;
    border: none;
    background: none;
  }
`
