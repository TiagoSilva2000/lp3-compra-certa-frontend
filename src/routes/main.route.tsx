import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Index from '../pages/Index'

const MainRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Index} />
    </Switch>
  </BrowserRouter>
)

export default MainRoutes
