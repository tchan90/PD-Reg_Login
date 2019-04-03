import React, { Component } from 'react';
import axios from 'axios';
import classnames from 'classnames';



class Login extends Component {
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      password2:'',
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

  }
  onChange(e){
  this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault()
    const user={
      email:this.state.email,
      password:this.state.password,
    };
    //console.log(user);

    axios
    .post('api/users/login',user)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err.response.data));
  }

  render() {
    const {errors} = this.state;

    return (
        <div> 
        <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br/><br/>
          <h1 className="header center grey-text register-font">Login</h1>
          <div className="row center">
            <h5 className="header col s12 light">Please fill out the spaces below</h5>
          </div></div></div>
          
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className={classnames ('validate',{'is-invalid':errors.email})} value={this.state.email} onChange={this.onChange}/> {errors.email && (<div className = "invalid-feedback">{errors.email}</div>)}
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"/>
              <label for="password">Password</label>
            </div>
          </div>
        </form>
      </div>

<div class="container">
<div class="section">
  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
</div>
<br/><br/>
</div> </div>
    )
  }
}

export default Login;