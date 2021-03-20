import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Main from '../pages//Index'
import NotFound from '../pages/NotFound'

const routesToBeDone: string[] = ['/profile', '/buy', '/shop']

const MainRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route render={() => <NotFound routesToBeDone={routesToBeDone} />} />
    </Switch>
  </BrowserRouter>
)

export default MainRoutes
