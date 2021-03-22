import React from 'react'
import {
  AllDepartmentsIndexer,
  DepartmentUnList,
  HeaderDepartmentListNav,
  HeaderSearchDiv,
  StyledHeader,
  StyledRegisterDiv,
  StyledSearchForm
} from './style'
import { wishlist, shopbag } from '../../assets/icons'
import logo from '../../assets/logo.svg'
import { search, hamburguer } from '../../assets/icons/index'
import Placeholder from '../Placeholder'
import { DepartmentList } from '../../constants/department-list.constant'
import { Link } from 'react-router-dom'

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
            <Link to='/signin'>
              <a href='https://www.google.com'>Entre ou Cadastre-se</a>
            </Link>
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
      <HeaderDepartmentListNav>
        <AllDepartmentsIndexer>
          <img src={hamburguer} alt='index' />
          <p>Todos os departamentos</p>
        </AllDepartmentsIndexer>
        <DepartmentUnList>
          {DepartmentList.map(({ name, link }, idx) => (
            <li key={idx}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </DepartmentUnList>
      </HeaderDepartmentListNav>
    </div>
  </StyledHeader>
)

export default Header
