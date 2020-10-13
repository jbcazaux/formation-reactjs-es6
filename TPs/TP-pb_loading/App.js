import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Route1 from './Routes/Route1'
import Route2 from './Routes/Route2'
import Menu from './Menu'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/route-1" component={Route1} />
      <Route exact path="/route-2" component={Route2} />
    </Switch>
  </BrowserRouter>
)

export default App
