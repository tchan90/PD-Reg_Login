import React, { Component } from 'react'

class Register extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:'',
      password2:'',
      errors:{}
    }
  }



  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <br/><br/>
      <h1 className="header center grey-text register-font">Register</h1>
      <div className="row center">
        <h5 className="header col s12 light">Please fill out the spaces below</h5>
      </div> </div> </div>
      
      <div className="row">
          <form className="col s12 ">
            <div className="row input-padding">
              <div className="input-field col s12">
                <input id="first_name" type="text" className="validate"/>
                <label for="first_name">Full Name</label>
              </div>
            </div>
            <div className="row input-padding">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row input-padding">
              <div className="input-field col s12">
                <input id="password2" type="password2" className="validate"/>
                <label for="password2">Confirm Password</label>
              </div>
            </div>
            <div className="row input-padding">
              <div className="input-field col s12">
                <input id="email" type="email" class="validate"/>
                <label for="email">Email</label>
              </div>
            </div>
          </form>
        </div>

  <div className="container">
    <div className="section-submit">
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
    <br/><br/>
  </div>
      </div>
    )
  }
}

export default Register;





