import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/razor.png';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction History</Link>
          </li>
          <li>
            <Link to="https://www.rba.gov.au/education/resources/explainers/cryptocurrencies.html" target="_blank">Learn Crypto</Link>
          </li>
          <li>
            <Link to="*">About Us</Link>
          </li>
          <div className='navbar-right'>
          <li className='signup-container'>
            <Link to="*">Sign Up</Link>
          </li>
          <li className='login-container'>
            <Link to="*">Log In</Link>
          </li>
      </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
