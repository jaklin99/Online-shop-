import React, { Component } from "react";
import AuthService from "./auth-service/auth-service";
import UserService from "./services/UserService";
import "./App.css";
import CustomFooter from "./Footer";

export default class AccountPage extends Component {
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
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={currentUser.username}
                        onChange={this.onChangeName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={currentUser.email}
                        onChange={this.onChangeEmail}
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={this.onChangePassword}
                      /><small id="password" class="form-text text-muted">We'll never share your password with anyone else.</small>
                    </div>
                    <ul>
                      {currentUser.roles &&
                        currentUser.roles.map((role) => <li key={role.id}>{role.name}</li>)}
                    </ul>
                    <div class="mx-auto">
                      <button
                        type="submit"
                        className="badge badge-success"
                        onClick={() => this.saveUpdate(true)}
                      >
                        Update</button>
                    </div>
                  </form>
                </div></div>
            </div>
          </div>
        </div>
        <CustomFooter /></div>
    );
  }
}

