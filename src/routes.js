import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './core/Header/index'

import Home from './pages/home'
import User from './pages/user'

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default Routes