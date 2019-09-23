import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';
import EventForm from './components/EventForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <Switch>
          <Route path = "/events" component = {Events} />
          <Route path = "/login" component = {Login} />
          <Route exact path = "/accounts" />
          <Route path = "/addevent" component = {EventForm} />
        </Switch>

      </div>


    </Router>
    
  );
}

export default App;
