import styled from 'styled-components'
import { CCColors } from '../../constants/colors.constant'

export const StyledHeader = styled.header`
  background-color: ${CCColors.DARKPURPLE};
  padding-top: 50px;

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

  input {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
  }
`

export const TopHeaderText = styled.span`
  margin-right: 15px;
  color: grey;
  letter-spacing: 0px;
`

export const AllDepartmentsIndexer = styled.li`
  :hover {
    cursor: pointer;
  }
`

export const DepartmentUnList = styled.ul`
  display: inline;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
