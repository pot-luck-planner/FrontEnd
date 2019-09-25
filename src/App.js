import React from 'react';
import RegForm from './components/RegForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';
import EventForm from './components/EventForm';
import SideBar from './components/NavBar/SideBar';
import ItemCard from './components/Item/ItemCard';
import AttendieCard from './components/Attendie/AttendieCard';
import EventUpdate from './components/EventUpdate';
// import Dashboard from './components/Dashboard';
import Dashboard from './components/Dashboard';


import './App.css';


function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Pot Luck Planner</h1>

        <SideBar />
        

        <Switch>
          <PrivateRoute path = "/events" component = {Events} />
          <Route path = "/login" component = {Login} />
          <PrivateRoute exact path = "/account/"
                        render={(props) => 
                        <Dashboard {...props} />
                        } />
          <PrivateRoute path = "/addevent" component = {EventForm} />
          <PrivateRoute path = "/updateevent/:id" render = {(props) => <EventUpdate {...props} /> }  />
          <RegForm />

        </Switch>


      </div>


    </Router>
    
  );
}

export default App;
