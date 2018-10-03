import React, { Component } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to='/'>Gemstore</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/checkout'>Checkout</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link disabled" to='/checkout'>Total: $0.00</NavLink>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>

            </div>
          </nav>
      </div>
    );
  }
}

export default Navbar;
