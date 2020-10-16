import React, { Component } from "react";
import UserService from "../services/UserService";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    this.state = {
      currentUser: {
        id: null,
        name: "",
        email: "",
        password: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          name: name,
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
  getUser(id) {
    UserService.get(id)
      .then((response) => {
        this.setState({
          currentUser: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
  updatePublished(status) {
    var data = {
      id: this.state.currentUser.id,
      name: this.state.currentUser.name,
      email: this.state.currentUser.email,
      password: this.state.currentUser.password,
    };

    UserService.update(this.state.currentUser.id, data)
      .then((response) => {
        this.setState((prevState) => ({
          currentUser: {
            ...prevState.currentUser,
          },
        }));
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateUser() {
    UserService.update(this.state.currentUser)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/users");
        this.setState({
          message: "The user was updated successfully!",
        });
      })
      .catch(() => {
        this.setState({
          message: "Unsuccessful update."
        })
      });
  }

  deleteUser() {
    UserService.delete(this.state.currentUser)
      .then(() => {
        this.props.history.push("/users"); //redirect 
        this.setState({
          message: "The user was deleted successfully."
        });
      })
      .catch((e) => {
        this.setState({
          message: "Something went wrong." + e
        });
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        {currentUser ? (
          <div className="edit-form">
            <h4>User</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentUser.name}
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
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={currentUser.password}
                  onChange={this.onChangePassword}
                />
              </div>
            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUser}
            >
              Delete
            </button>
            
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
            <p>{this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}
