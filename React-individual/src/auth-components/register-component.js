import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Card from "react-bootstrap/Card";
import AuthService from "../auth-service/auth-service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vaddress = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The address must be between 3 and 40 characters.
      </div>
    );
  }
};
const vphone = value => {
  if (value.length < 3 || value.length > 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      name:"",
      email: "",
      address: "",
      phone: "",
      password: "",
      successful: false,
      message: ""
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phone: e.target.value
    });
  } 
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.name,
        this.state.address,
        this.state.phone,       
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
<>
        <Card style={{width:"50%", marginLeft:"8cm", marginTop:"2%"}}>
<div class="container">
    <div class="omb_login">
          <h3 class="omb_authTitle">Sign up or <a className="signUp"href="/login">Login</a></h3>
		</div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                 <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-user">Name</i></span>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vname]}
                  />
                </div>
                <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-user">Username</i></span>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-envelope">Email</i></span>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-home">Address</i></span>
                  <Input
                    type="text"
                    className="form-control"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required, vaddress]}
                  />
                </div>

                <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-phone">Phone number</i></span>
                  <Input
                    type="text"
                    className="form-control"
                    name="phone number"
                    value={this.state.phone}
                    onChange={this.onChangePhoneNumber}
                    validations={[required, vphone]}
                  />
                </div>

                <div className="form-group">
                <span class="input-group-addon"><i class="fa fa-lock">Password</i></span>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
  </Card></>
    );
  }
}