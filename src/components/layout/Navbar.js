import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../../img/logo_01_01.png'

class Navbar extends Component {
  render() {
    return (
      <nav className="light-blue lighten-1 nav-size" role="navigation">
      <div className="nav-wrapper container nav-size"><Link to="/" id="logo-container" className="brand-logo logo-margin"><img src={logo} alt={"logo"}></img>
      </Link>
        <ul className="right hide-on-med-and-down">
          <li><Link className="login-font" to="/login">Login</Link></li>
        </ul>
  
        <ul id="nav-mobile" className="sidenav">
          <li><Link className="login-font" to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar;