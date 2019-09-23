import React from 'react';
import { BrowserRouter as Router, Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          <Route path = "/login" component = {Login} />
          <PrivateRoute exact path = "/accounts" />
        </Switch>

      </div>


    </Router>
    
  );
}

export default App;
