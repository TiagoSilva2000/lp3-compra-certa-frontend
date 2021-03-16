import React from 'react'
import {
  AllDepartmentsIndexer,
  DepartmentUnList,
  HeaderSearchDiv,
  StyledHeader,
  StyledRegisterDiv,
  TopHeaderText
} from './style'
import { wishlist, shopbag } from '../../assets/icons'
import logo from '../../assets/logo.svg'
import Placeholder from '../Placeholder'
import { DepartmentList } from '../../constants/department-list.constant'

const Header = () => (
  <StyledHeader>
    <div id='headerWrapper'>
      <HeaderSearchDiv>
        {/* <img src={logo} alt='logo' style={{ height: 45, width: 300 }} /> */}
        <Placeholder bgColor='blue' width={300} height={45} />
        <input type='text' placeholder='procure por nome, código, marca...' />
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
      <DepartmentUnList>
        {/* <AllDepartmentsIndexer>Todos os Departamentos</AllDepartmentsIndexer> */}
        {DepartmentList.map(({ name, link }, idx) => (
          <li key={idx}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </DepartmentUnList>
    </div>
  </StyledHeader>
)

export default Header
