import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer footer-bg">  
         <div className="container">
        <div className="row">
          <div className="col l6 s12">
           
            <ul>
              <li><Link to="#">Terms and Conditions</Link></li><br/>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
  
          </div>
          
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            <br/>Copyright 2019
            </div>
          </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;