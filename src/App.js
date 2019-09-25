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


import './App.css';

function App() {
  return (
    <Router>
      <div className = "App">
        <h1>Pot Luck Planner</h1>
        <SideBar />
        

      </div>


    </Router>
    
  );
}

export default App;
