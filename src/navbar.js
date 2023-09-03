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
            <a href="https://www.investopedia.com/terms/c/cryptocurrency.asp" target="_blank">Learn Crypto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
