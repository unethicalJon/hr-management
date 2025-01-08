import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddNewEmployee } from './layouts/components/AddNewEmployee';
import { HomePage } from './layouts/components/HomePage';
import { Navbar } from './layouts/components/Navbar';
import { UpdateEmployee } from './layouts/components/UpdateEmployee';
import EmployeeModel from './model/EmployeeModel';


function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Switch>
        <Route path='/' exact>
          <Redirect to ='/home'/>
        </Route>
        <Route path='/home'>
        <HomePage/>
        </Route>
        <Route path ='/add'>
        <AddNewEmployee/>
        </Route>
        <Route path='/edit'>
        </Route>
        </Switch>
        </div>
  );
}

export default App; 
