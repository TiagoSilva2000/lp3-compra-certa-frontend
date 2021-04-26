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
import {
  AccountRoute,
  AddressRoute,
  DataVisRoute,
  IndexRoute,
  LoginRoute,
  NewAddressRoute,
  NewCardRoute,
  OrderControlRoute,
  PaymentRoute,
  ProfileRoute,
  ShopCartRoute,
  ShopHistoryRoute,
  ShopRoute,
  WishlistRoute
} from '../constants/routes.constant'

const Profile = lazy(() => import('../pages/Profile/Profile'))
const Register = lazy(() => import('../pages/Register/Register'))
const ShopHistory = lazy(() => import('../pages/ShopHistory/index'))
const Adresses = lazy(() => import('../pages/Adresses/AdressesPage'))
const NewAdress = lazy(() => import('../pages/Adresses/NewAdress'))
const Accounts = lazy(() => import('../pages/Accounts/AccountsPage'))
const NewCard = lazy(() => import('../pages/Accounts/NewCardForm'))
const Wishlist = lazy(() => import('../pages/Wishlist/WishlistPage'))
const Product = lazy(
  () => import('../pages/ProductVisualization/ProductVisualization')
)

const routesToBeDone: string[] = []

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={Spinner}>
      <Switch>
        <Route exact path='/' component={Main} />

        <Route exact path='/login' component={Login} />

        <Route exact path='/spinner' component={Spinner} />

        <Route path={`${ShopRoute}`} component={ShopList} />
        <Route exact path={`${ProfileRoute}`} component={Profile} />
        <Route exact path={`${AddressRoute}`} component={Adresses} />
        <Route exact path={`${AccountRoute}`} component={Accounts} />
        <Route exact path={`${NewCardRoute}`} component={NewCard} />
        <Route exact path={`${NewAddressRoute}`} component={NewAdress} />
        <Route exact path={`${ShopHistoryRoute}`} component={ShopHistory} />
        <Route exact path={`${WishlistRoute}`} component={Wishlist} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/product' component={Product} />

        <Route exact path={`${OrderControlRoute}`} component={OrderControl} />

        <Route exact path={`${ShopCartRoute}`} component={ShopCart} />
        <Route exact path={`${PaymentRoute}`} component={PaymentPage} />
        <Route exact path={`${DataVisRoute}`} component={DataVis} />
        <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default MainRoutes
