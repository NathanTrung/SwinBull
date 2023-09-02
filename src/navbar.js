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
            <Link to="/transaction-history">Transaction History</Link>
          </li>
          <li>
            <Link to="*">Learn Crypto</Link>
          </li>
          <li>
            <Link to="*">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
