import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages//Index'
import ShopList from '../pages/ShopList'
import NotFound from '../pages/NotFound'
import OrderControl from '../pages/OrderControl'
import Login from '../pages/Login/Login'
import { Spinner } from '../pages/Loading/LoadingSpinner'
import ShopCart from '../pages/ShopCart'
import PaymentPage from '../pages/PaymentPage'
import DataVis from '../pages/DataVis'

const Profile = lazy(() => import('../pages/Profile/Profile'))
const ShopHistory = lazy(() => import('../pages/ShopHistory'))
const Adresses = lazy(() => import('../pages/Adresses/AdressesPage'))
const NewAdress = lazy(() => import('../pages/Adresses/NewAdress'))
const Accounts = lazy(() => import('../pages/Accounts/AccountsPage'))
const NewCard = lazy(() => import('../pages/Accounts/NewCardForm'))
const Wishlist = lazy(() => import('../pages/Wishlist/WishlistPage'))

const routesToBeDone: string[] = ['/buy', '/shop', '/signin']

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={Spinner}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/spinner' component={Spinner} />
        <Route exact path='/loja' component={ShopList} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/adresses' component={Adresses} />
        <Route exact path='/accounts' component={Accounts} />
        <Route exact path='/newCard' component={NewCard} />
        <Route exact path='/newAdress' component={NewAdress} />
        <Route exact path='/shopHistory' component={ShopHistory} />
        <Route exact path='/wishlist' component={Wishlist} />
        <Route exact path='/order-control' component={OrderControl} />
        <Route exact path='/shopcart' component={ShopCart} />
        <Route exact path='/payment' component={PaymentPage} />
        <Route exact path='/datavis' component={DataVis} />
        <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default MainRoutes
