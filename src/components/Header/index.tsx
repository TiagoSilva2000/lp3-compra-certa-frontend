import React from 'react'
import {
  AllDepartmentsIndexer,
  DepartmentButton,
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
import { DepartmentList } from '../../mocks/department-list.constant'
import { Link } from 'react-router-dom'
import ShopList from '../../pages/ShopList'
import {
  IndexRoute,
  ShopCartRoute,
  ShopRoute,
  WishlistRoute
} from '../../mocks/routes.constant'
import { DropdownButton, NavDropdown } from 'react-bootstrap'
import { Menu, MenuItem } from '@material-ui/core'

interface IHeaderProps {
  employeeView?: boolean
  customerView?: boolean
  defaultView?: boolean
  username?: string
  wishlistQnt?: number
  shopcartQnt?: number
}

// const CustomToggle = React.forwardRef((props: any, ref) => (
//   <AllDepartmentsIndexer
//     onClick={e => {
//       e.preventDefault()
//     }}
//   >
//     <img src={hamburguer} alt='index' />
//     <p>Todos os departamentos</p>
//     {props.children}
//   </AllDepartmentsIndexer>
// ))
// CustomToggle.displayName = 'custom toggle'

const Header = (props: IHeaderProps): JSX.Element => {
  const {
    employeeView: employee,
    customerView: customer,
    defaultView: defaultv
  } = props
  const wishQnt = props.wishlistQnt ?? 0
  const shopQnt = props.shopcartQnt ?? 0
  const username = props.username ?? 'username'

  return (
    <StyledHeader>
      <HeaderSearchDiv>
        {!employee ? (
          <Link to={`${IndexRoute}`}>
            <img
              src={logo}
              alt='logo'
              style={{ height: 45, width: 300, margin: '1em' }}
            />
          </Link>
        ) : (
          <img
            src={logo}
            alt='logo'
            style={{ height: 45, width: 300, margin: '1em' }}
          />
        )}
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
            <Link to={`${ShopCartRoute}`}>
              <li>
                <span className='shopcart-qnt'>{shopQnt}</span>
                <Shop width={30} height={30} />
              </li>
            </Link>
            <Link to={`${WishlistRoute}`}>
              <li>
                <span className='wishlist-qnt'>{wishQnt}</span>
                <Heart width={30} height={30} />
              </li>
            </Link>
          </ul>
        )}
      </HeaderSearchDiv>
      {!employee && (
        <HeaderDepartmentListNav>
          <AllDepartmentsIndexer>
            <img src={hamburguer} alt='index' />
            <DepartmentButton
              key={'direction'}
              id={`departments-button`}
              drop={'down'}
              variant='secondary'
              title={'Todos os Departamentos'}
              className='reset-dropdown-button'
            >
              <NavDropdown.Header>Departamentos</NavDropdown.Header>
              {DepartmentList.map(({ name, link }, idx) => (
                <NavDropdown.Item key={idx}>
                  <Link to={`${ShopRoute}/${link}`}>{name}</Link>
                </NavDropdown.Item>
              ))}
            </DepartmentButton>
          </AllDepartmentsIndexer>
          <DepartmentUnList>
            {DepartmentList.map(({ name, link }, idx) => {
              return (
                <li key={idx}>
                  <Link to={`${ShopRoute}/${link}`}>{name}</Link>
                </li>
              )
            })}
          </DepartmentUnList>
        </HeaderDepartmentListNav>
      )}
    </StyledHeader>
  )
}

export default Header
