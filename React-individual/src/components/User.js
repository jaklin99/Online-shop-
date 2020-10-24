import React, { Component } from "react";
import UserService from "../services/UserService";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.getUser = this.getUser.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
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
    this.getUser(this.props.match.params.amail);
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
  getUser(email) {
    UserService.get(email)
      .then(response => {
        this.setState({
          currentUser: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e+"fgh");
      });
    }
    saveUpdate(status) {
      var data = {
        name: this.state.currentUser.name,
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
    // UserService.update(this.state.currentUser)
    //   .then((response) => {
    //     console.log(response.data);
    //     this.props.history.push("/users");
    //     this.setState({
    //       message: "The user was updated successfully!",
    //     });
    //   })
    //   .catch(() => {
    //     this.setState({
    //       message: "Unsuccessful update."
    //     })
    //   });

  deleteUser() {
    UserService.delete(this.state.currentUser)
      .then(() => {
        this.props.history.push("/userList"); //redirect 
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
            <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentUser.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentUser.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.saveUpdate(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.saveUpdate(true)}
              >
                Save
              </button> )}
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
