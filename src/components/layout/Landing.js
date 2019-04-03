import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
<div className="container-homepg">
  <div className="buttons-div">
      <Link to="/register" className="waves-effect waves-light btn btn-style">Register</Link>
      <Link to="#" className="waves-effect waves-light btn buttons-margin btn-style">Login</Link>

      </div>
</div>
     
    )
  }
}

export default Landing;