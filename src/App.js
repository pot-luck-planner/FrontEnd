import React from 'react';
import RegForm from './components/RegForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';
import EventForm from './components/EventForm';
import SideBar from './components/NavBar/SideBar';
<<<<<<< HEAD
import ItemCard from './components/Item/ItemCard';
import AttendieCard from './components/Attendie/AttendieCard';

=======
import EventUpdate from './components/EventUpdate';
// import Dashboard from './components/Dashboard';
>>>>>>> 930b55ed6fc322e538ba200c69ff7ef3a68d5962

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
          {/* <PrivateRoute exact path = "/accounts/:username"
                        render={props => {
                          return <Dashboard {...props} />
                        }} /> */}
          <PrivateRoute path = "/addevent" component = {EventForm} />
          <PrivateRoute path = "/updateevent/:id" render = {(props) => <EventUpdate {...props} /> }  />
          <RegForm />

        </Switch>


      </div>


    </Router>
    
  );
}

export default App;
