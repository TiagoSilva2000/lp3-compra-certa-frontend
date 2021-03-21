import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledHeader = styled.header`
  background-color: ${CCColors.DARKPURPLE};
  padding-top: 30px;

  div#headerWrapper {
    background-color: ${CCColors.PRIMARYPURPLE};
    margin: 0;
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

  width: 100%;

  div {
    margin: 10px;

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
export const HeaderDepartmentListWrapper = styled.div`
  background-color: ${CCColors.DARKPURPLE};
  /* padding-left: 30px; */
  padding: 5px 30px;
  height: 100%;
  width: 100%;
  display: flex;
`

export const AllDepartmentsIndexer = styled.div`
  /* color: ${CCColors.PRIMARYPURPLE}; */
  color: black;
  font-weight: bold;
  letter-spacing: 0.02ch;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  /* padding: 5px 5px 5px 15px; */
  padding: 0.5rem 1rem;
  height: fit-content;
  align-self: center;

  p {
    width: 100%;
    height: fit-content;
    margin-left: 7px;
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
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  background-color: ${CCColors.DARKPURPLE};

  li {
    display: inline-block;
    word-spacing: normal;
    margin-top: 5px;
    margin-bottom: 5px;

    a {
      color: white;
      font-weight: bold;
      border-radius: 15px;
      padding: 10px;
      padding-right: 15px;
      padding-left: 15px;
      text-decoration: none;
      transition: 0.3s;
      :hover {
        border-radius: 15px;
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
