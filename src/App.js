import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegForm from './components/RegForm'
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';
import EventForm from './components/EventForm';
import SideBar from './components/NavBar/SideBar';
// import ItemCard from './components/Item/ItemCard';
import AttendieCard from './components/Attendie/AttendieCard';
import UserList from './components/UserList';
import EventUpdate from './components/EventUpdate';
import Invites from './components/Invites';
import Dashboard from './components/Dashboard';



import './App.css';


function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Pot Luck Planner</h1>

        <SideBar />




        <Switch>
          <PrivateRoute
          path = "/invite-user/:id"
          render={(props) =>
          <AttendieCard {...props} />} />
          <PrivateRoute 
          path = "/events"
          render ={(props) =>
          <Events {...props} /> }  />
          <PrivateRoute
          path = "/invites"
          render={(props) => 
          <Invites {...props} />} />
          <Route path = "/login" component = {Login} />
           <PrivateRoute exact path = "/accounts/:username"
                        render={props => {
                          return <Dashboard {...props} />
                        }} /> 
          <PrivateRoute path = "/addevent" component = {EventForm} />
          <PrivateRoute path = "/updateevent/:id" render = {(props) => <EventUpdate {...props} /> }  />
          <RegForm />

        </Switch>

      </div>


    </Router>
    
  );
}

export default App;
