import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navabar from './Navabar'
import Home from '../pages/Home'
import Reports from '../pages/Reports'
import Products from '../pages/Products'

import '../css/App.css'

function App() {
  return (
    <>
      <Router>
        <Navabar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
