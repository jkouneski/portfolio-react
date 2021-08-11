import React from "react";
import "./Nav.css";

import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="display-4 text-light">Joey Kouneski</h1>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarText"
            >
              <ul className="nav navbar-nav float-right">
              <li className="nav-item lead">
                  <Link to='/about' className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item lead">
                  <Link to='/portfolio' className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item lead">
                  <Link to='/contact' className="nav-link">
                    Conatct
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Nav;