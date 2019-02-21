import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import User from './pages/user'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
        </Switch>
    </BrowserRouter>
);

export default Routes