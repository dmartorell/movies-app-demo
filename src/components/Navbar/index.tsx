import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  const personalLinkedin = 'https://github.com/dmartorell/movies-dev-challenge';
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link className="logo" to="/">
            nonomo
          </Link>
        </li>
        <li className="nav-list__item">
          <ul className="nav-nested-list">
            <li><Link className="nav-nested-list__item" to="/">About</Link></li>
            <li><Link className="nav-nested-list__item" to="/">Features</Link></li>
            <li><Link className="nav-nested-list__item" to="/">Pricing</Link></li>
          </ul>
        </li>
        <li className="nav-list__item"><a className="contactUs" target="_blank" href={personalLinkedin} rel="noreferrer">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
