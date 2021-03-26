import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledHeader = styled.header`
  background-color: ${CCColors.DARKPURPLE};


  div#headerWrapper {
    background-color: ${CCColors.LIGHTPURPLE};
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const StyledRegisterDiv = styled.div`
  width: 300px;
  height: 80px;
  text-align: left;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  p {
    align-self: center;
    display: inline-block;
    b {
      font-weight: 800;
    }
    a {
      color: white;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

export const HeaderSearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  align-self: center;

  width: 90%;

  div {
    margin: 10px;
    /* margin-left: 15px */
    /* padding-left: 15px;
    padding-right: 15px; */
    /* width: 100%; */

    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        text-decoration: none;
        margin-right: 10px;
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
  /* padding-left: 30px; */
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
  padding: 10px 20px;
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
