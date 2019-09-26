import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegForm from './components/RegForm'
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import Events from './components/Events';
import EventForm from './components/EventForm';
import SideBar from './components/NavBar/SideBar';
import ItemCard from './components/Item/ItemCard';
import AttendieCard from './components/Attendie/AttendieCard';
import EventUpdate from './components/EventUpdate';
import Invites from './components/Invites';
import Dashboard from './components/Dashboard';
import Invite from './components/Invite';
import PrivateRoute1 from './utils/PrivateRoute1';
import './App.css';


function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Pot Luck Planner</h1>

        <SideBar />
        
        <Switch>

          <PrivateRoute1
          path = "/invites/:id"
          component = {Invite} />} />

          <PrivateRoute
          path = "/event/:id/addmenu"
          render = {(props) =>
          <ItemCard {...props} />} />
          
          <PrivateRoute
          path = "/invite-user/:id"
          render={(props) =>
          <AttendieCard {...props} />} />
          
          <PrivateRoute 
          path = "/events"
          render ={(props) =>
          <Events debug {...props} /> }  />
          
          <PrivateRoute1
          path = "/invites"
          component = {Invites} />
          
          <PrivateRoute exact path = "/dashboard"
                        render={props => {
                          return <Dashboard {...props} />
                        }} /> 
          
          <PrivateRoute path = "/addevent" component = {EventForm} />
          
          <PrivateRoute path = "/updateevent/:id" render = {(props) => <EventUpdate {...props} /> }  />
          
          <Route path = '/register' component = {RegForm} />

          <Route path = "/login" component = {Login} />


      </Switch>        

      </div>


    </Router>
    
  );
}

export default App;
