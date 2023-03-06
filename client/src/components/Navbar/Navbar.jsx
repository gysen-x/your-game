import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <button type="button">Homepage</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile">
                  <button type="button">Profile</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin">
                  <button type="button">Sign In</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <button type="button">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
