import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './Navbar.css';



 class Navbar extends React.Component {
    constructor(props) {
        super(props)

      
    }

    



	render() {
    
		return (
      <div className="mynav">
			<nav className="navbar navbar-expand-md ">
		<div className="container">
          <Link className="navbar-brand"  to="/">Wayfarer</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              { this.props.currentUser ? 
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/cities">Cities</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={ this.props.logout }>Logout</a>
                  </li>
                </>
              :
                <>
                                
                   <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                               
                </>
              }
            </ul>
          </div>
        </div>

			</nav>

            </div>
		);
	}
}
export default Navbar;