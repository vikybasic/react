import React, { Component } from 'react'
import Detail from './posts/Details'
import Home from './posts/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'

class App extends Component {

  render() {
    return (
      <Router  >
        <div>
          <Route exact={true} path="/" render={(props) => (<Home />)} />
          <Route path="/shipment-details/id" render={(props) => (<Detail submit={this.handleSubmit} />)} />
        </div>
      </Router>
    )
  }
}

export default App
