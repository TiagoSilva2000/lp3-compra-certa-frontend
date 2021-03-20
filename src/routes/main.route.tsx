import React , { Suspense, lazy} from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Login from '../pages/Login/Login'


const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default MainRoutes
