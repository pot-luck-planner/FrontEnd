import React from 'react';
import RegForm from './components/RegForm'
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
        <h1>Pot Luck Planner</h1>
        <Switch>
          <PrivateRoute path = "/events" component = {Events} />
          <Route path = "/login" component = {Login} />
          <PrivateRoute exact path = "/accounts" />
          <PrivateRoute path = "/addevent" component = {EventForm} />
          <{PrivateRoute exact path = "/accounts" />
          <{PrivateRoute path = "/addevent" component = {EventForm} />
          <RegForm />

        </Switch>

      </div>


    </Router>
    
  );
}

export default App;
