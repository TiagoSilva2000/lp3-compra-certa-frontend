import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages//Index'
import ShopList from '../pages/ShopList'
import NotFound from '../pages/NotFound'

const Login = lazy(() => import('../pages/Login/Login'))
const Profile = lazy(() => import('../pages/Profile/Profile'))
const ShopHistory = lazy(() => import('../pages/ShopHistory/ShopHistory'))

const routesToBeDone: string[] = ['/buy', '/shop', '/signin']

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<h1>LOA DING ...</h1>}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/loja' component={ShopList} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/shopHistory' component={ShopHistory} />
        <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default MainRoutes
