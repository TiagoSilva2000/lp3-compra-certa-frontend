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

import { Heart, Shop } from 'react-bootstrap-icons'
import logo from '../../assets/big-logo.png'
import { search, hamburguer } from '../../assets/icons/index'
import { DepartmentList } from '../../constants/department-list.constant'
import { Link } from 'react-router-dom'

interface IHeaderProps {
  employeeView?: boolean
  customerView?: boolean
  defaultView?: boolean
}

const Header = (props: IHeaderProps): JSX.Element => {
  const {
    employeeView: employee,
    customerView: customer,
    defaultView: defaultv
  } = props
  const username = 'username'

  return (
    <StyledHeader>
      <HeaderSearchDiv>
        <img
          src={logo}
          alt='logo'
          style={{ height: 45, width: 300, margin: '1em' }}
        />
        {!employee && (
          <StyledSearchForm name='search-form' method='GET' action=''>
            <input
              type='text'
              placeholder='procure por nome, código, marca...'
            />
            <button type='submit'>
              <img src={search} alt='Procurar' />
            </button>
          </StyledSearchForm>
        )}
        <StyledRegisterDiv>
          <li>Bem vindo{!defaultv && <b>{`, ${username}`}</b>} :)</li>
          <li className='register-logged-account'>
            <Link
              to={defaultv ? '/signin' : '/profile'}
              className='styled-link'
            >
              <span>{defaultv ? 'Entre ou cadastre-se' : 'Meu Perfil'}</span>
            </Link>
            {!defaultv && (
              <Link to='/' className='styled-link'>
                <span>Sair</span>
              </Link>
            )}
          </li>
        </StyledRegisterDiv>
        {!employee && (
          <ul className='icons-holder'>
            <li>
              <Shop width={30} height={30} />
            </li>
            <li>
              <Heart width={30} height={30} />
            </li>
          </ul>
        )}
      </HeaderSearchDiv>
      {!employee && (
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
      )}
    </StyledHeader>
  )
}

export default Header
