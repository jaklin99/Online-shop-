import React, { Component } from "react";
import UserService from "../services/UserService";

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
      <span className="h3">
      <center>
            
            <div className="col-12 col-lg-4 mt-2 hv-center">
          <form>
            <div className="form-group text-left">
             
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="form-group text-left">
             
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group text-left">
              
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
                placeholder="Password"
              />
            </div>
            <button onClick={this.saveUser} className="btn btn-info">
              Register
            </button>
            </form>
        </div>
         </center></span>
        )};
  }

