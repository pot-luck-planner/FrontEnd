import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';

import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          <PrivateRoute path = "/events" component = {Events} />
          <Route path = "/login" component = {Login} />
          <PrivateRoute exact path = "/accounts" />
        </Switch>

      </div>


    </Router>
    
  );
}

export default App;
