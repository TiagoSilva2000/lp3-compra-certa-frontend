import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Main from '../pages//Index'
import ShopList from '../pages/ShopList'
import NotFound from '../pages/NotFound'

const routesToBeDone: string[] = ['/profile', '/buy', '/shop', '/signin']

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/loja' component={ShopList} />
      <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
    </Switch>
  </BrowserRouter>
)

export default MainRoutes
