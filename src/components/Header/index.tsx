import React from 'react'
import {
  AllDepartmentsIndexer,
  DepartmentUnList,
  HeaderDepartmentListWrapper,
  HeaderSearchDiv,
  StyledHeader,
  StyledRegisterDiv,
  StyledSearchForm,
  TopHeaderText
} from './style'
import { wishlist, shopbag } from '../../assets/icons'
import logo from '../../assets/logo.svg'
import { search, hamburguer } from '../../assets/icons/index'
import Placeholder from '../Placeholder'
import { DepartmentList } from '../../constants/department-list.constant'

const Header = () => (
  <StyledHeader>
    <div id='headerWrapper'>
      <HeaderSearchDiv>
        {/* <img src={logo} alt='logo' style={{ height: 45, width: 300 }} /> */}
        <Placeholder bgColor='blue' width={300} height={45} />
        <StyledSearchForm>
          <input type='text' placeholder='procure por nome, código, marca...' />
          <button type='submit'>
            <img src={search} alt='Procurar' />
          </button>
        </StyledSearchForm>
        <StyledRegisterDiv>
          <p>
            <b>Bem vindo :)</b>
            <br />
            <a href='https://www.google.com'>Entre ou Cadastre-se</a>
          </p>
        </StyledRegisterDiv>
        <div>
          <ul>
            <li>
              {/* <img src={wishlist} alt='wishlist' style={{ height: 45, width: 45 }} /> */}
              <Placeholder bgColor='blue' width={45} height={45} />
            </li>
            <li>
              {/* <img src={shopbag} alt='wheelcart' style={{ height: 45, width: 45 }}/> */}
              <Placeholder bgColor='blue' width={45} height={45} />
            </li>
          </ul>
        </div>
      </HeaderSearchDiv>
      <HeaderDepartmentListWrapper>
        <AllDepartmentsIndexer>
          <img src={hamburguer} alt='index' />
          <p>Todos os Departamentos</p>
        </AllDepartmentsIndexer>
        <DepartmentUnList>
          {DepartmentList.map(({ name, link }, idx) => (
            <li key={idx}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </DepartmentUnList>
      </HeaderDepartmentListWrapper>
    </div>
  </StyledHeader>
)

export default Header
