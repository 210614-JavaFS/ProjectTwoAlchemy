import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, NavLink } from 'react-router-dom'
import NavBar from './Component/NavBar';
import Login from './Component/login';
import Register from './Component/register';

function App() {
  return (
    <div className="App">
      
        <NavBar/>
        <Login/>  
      <p>Don't have an Account Click<a href="" >Register</a></p>
    </div>
  );
}

export default App;
