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
                  <a className="nav-link active" aria-current="page" href="/">Homepage</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile">
                  <a className="nav-link" href="/">Profile</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin">
                  <a className="nav-link" href="/">Sign in</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <a className="nav-link" href="/">Sign up</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
