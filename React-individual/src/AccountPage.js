import React, { Component } from "react";
import AuthService from "./auth-service/auth-service";
import UserService from "./services/UserService";
import "./App.css";
import CustomFooter from "./Footer";

export default class AccountPage extends Component  {
      constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.getUser = this.getUser.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);
    
        this.state = {
            currentUser: AuthService.getCurrentUser()
          };
      }
    
      componentDidMount() {
        console.log(this.props);
        this.getUser(this.props.match.params.email);
      }
    
      onChangeName(e) {
        const username = e.target.value;
    
        this.setState(function (prevState) {
          return {
            currentUser: {
              ...prevState.currentUser,
              username: username,
            },
          };
        });
      }
    
      onChangeEmail(e) {
        const email = e.target.value;
    
        this.setState((prevState) => ({
          currentUser: {
            ...prevState.currentUser,
            email: email,
          },
        }));
      }
      onChangePassword(e) {
        const password = e.target.value;
    
        this.setState((prevState) => ({
          currentUser: {
            ...prevState.currentUser,
            password: password,
          },
        }));
      }
      getUser(email) {
        UserService.get(email)
          .then(response => {
            this.setState({
              currentUser: response.data,
            });
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e + "fgh");
          });
      }
      saveUpdate(status) {
        var data = {
          username: this.state.currentUser.username,
          email: this.state.currentUser.email,
          password: this.state.currentUser.password,
          published: status
        };
    
        UserService.update(this.state.currentUser.email, data)
          .then(response => {
            this.setState(prevState => ({
              currentUser: {
                ...prevState.currentUser,
                published: status
              }
            }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      updateUser() {
        UserService.update(
          this.state.currentUser.email,
          this.state.currentUser
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "Your profile was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    render() {
        const { currentUser } = this.state;
    
    return (
        <div className="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-4">
                        <div class="card">
                            <div class="card-header"> My Account
    </div>
                            <div class="card-body">
                                <form>
                                    {/* DONE: make the credentials appear for each logged-in user */}
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="name" placeholder={currentUser.username} required />
                                    </div>
                                    <div class="form-group">
                                        <label for="token">Token</label>
                                        {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="email" placeholder={currentUser.email} required />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="text" class="form-control" id="password" aria-describedby="password" placeholder="Enter password" required />
                                        <small id="password" class="form-text text-muted">We'll never share your password with anyone else.</small>
                                    </div>
                                    <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
                                    <div class="mx-auto">
                                        <button type="submit" class="btn btn-info" onClick={() => this.saveUpdate(true)}>Save changes </button>
                                        <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUser}
            >
              Update
            </button> <button type="submit" class="btn btn-info"><a href="mailto:jakitoo99@gmail.com">Deactivate</a></button></div>
                                </form>
                            </div></div>
                    </div>
                </div>
            </div>
            <CustomFooter /></div>
    );
}
}

