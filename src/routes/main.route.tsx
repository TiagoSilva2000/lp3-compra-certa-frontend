import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages//Index'
import ShopList from '../pages/ShopList'
import NotFound from '../pages/NotFound'

const routesToBeDone: string[] = ['/profile', '/buy', '/shop', '/signin']

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/loja' component={ShopList} />
      <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
    </Switch>
  </BrowserRouter>
)

export default MainRoutes
