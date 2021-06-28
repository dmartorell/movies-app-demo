import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/leisure-logo-2.png';

const Navbar = () => (
  <nav>

    <ul className="nav-list">
      <li className="nav-list__item">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </li>
      <li className="nav-list__item">
        <ul className="nav-nested-list">
          <Link className="nav-nested-list__item" to="/">About</Link>
          <Link className="nav-nested-list__item" to="/">Features</Link>
          <Link className="nav-nested-list__item" to="/">Pricing</Link>
        </ul>
      </li>
      <li className="nav-list__item"><Link className="contactUs" to="/">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
