import React, { Component } from "react";
import UserService from "../services/UserService";
import CustomFooter from "../Footer";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "",
      password: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  saveUser() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    UserService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      id: null,
      name: "",
      email: "",
      password:"",
      submitted: false,
    });
  }
   render() {
     return (
      <div className="register">
      <div class="container">
      <div class="row">
      <div class="col">
      <div class="card">
          <div class="card-header"> Register
          </div>
          <div class="card-body">
              <form>
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
                placeholder="Name"
              /></div>
                  <div class="form-group">
                      <label for="email">Email address</label>
                      <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
                placeholder="Email"
              /><small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
                placeholder="Password"
              /><small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>
              
                  </div>
                  <div class="mx-auto">
                  <button onClick={this.saveUser} type="submit" class="btn btn-register">Submit</button></div>
              </form>
          </div></div>
      </div>
      </div>
      </div><CustomFooter/></div>
               );

  //     <div class="row"> 
    
  //   <div class="col-lg-4 mb-4">
  //    <form class="form-l">
  //      <h2>Register</h2>
  //            <div className="form-group text-left">
              //  <input
              //   type="text"
              //   className="form-control"
              //   id="name"
              //   required
              //   value={this.state.name}
              //   onChange={this.onChangeName}
              //   name="name"
              //   placeholder="Name"
              // />
  //            </div>
  //          <div className="form-group text-left">
            //  <input
            //     type="text"
            //     className="form-control"
            //     id="email"
            //     required
            //     value={this.state.email}
            //     onChange={this.onChangeEmail}
            //     name="email"
            //     placeholder="Email"
            //   />
  //      </div>
  // <div className="form-group text-left">
              
              // <input
              //   type="password"
              //   className="form-control"
              //   id="password"
              //   required
              //   value={this.state.password}
              //   onChange={this.onChangePassword}
              //   name="password"
              //   placeholder="Password"
              // />
  //           </div>
  //           <div className="form-group text-left">
              
  //             <input
  //               type="password"
  //               className="form-control"
  //               id="password"
  //               required
  //               value={this.state.password}
  //               onChange={this.onChangePassword}
  //               name="confirmPassword"
  //               placeholder="Confirm password"
  //             />
  //           </div>
  //           <button href="/home" className="btn btn-watch">
  //             Cancel
  //           </button>
  //           <button onClick={this.saveUser} className="btn btn-comment">
  //             Register
  //           </button>
  //           <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>
  //         </form></div>
  //          <CustomFooter/> 
  //   </div>

  
 
   }
  }

