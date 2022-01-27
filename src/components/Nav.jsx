import React from 'react';
//import { Link } from 'react-router-dom';
//import Marquee from 'react-fast-marquee'
import Download from './Download'
import './style.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary col-md-12">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> 
          </button>
        </div>
      </nav>
      <div></div>
      <div
        className="collapse bg-light btn-group-toggle p-2"
        id="navbarToggleExternalContent"
      >
        <br />
        <Download />
      </div>
    </div>
  );
};

export default Nav;