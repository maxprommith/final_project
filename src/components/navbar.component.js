import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="menu-bar">
        <div className="group"> 
          <Link to="/" className="item title">BentenTracker</Link>
        </div>
        <div className="group">
            <a className="item">
            <Link to="/">Exercises</Link>
            </a>
            <a className="item">
            <Link to="/create">Create Exercise Log</Link>
            </a>
            <a className="item">
            <Link to="/user">Create User</Link>
            </a>
        </div>
      </nav>
    );
  }
}