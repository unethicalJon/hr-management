import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        
    <div className="card text-center">
  <div className="card-header">
  <nav className="navbar navbar-light bg-light">
    <img src="./images/nova-black.png" width="100" height="50" className="d-inline-block align-top" alt="NOVA"/>
</nav>
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" to='/home'>Punonjësit</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/add'>Shto</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Përditëso</a>
      </li>
    </ul>
  </div></div>
    );
}