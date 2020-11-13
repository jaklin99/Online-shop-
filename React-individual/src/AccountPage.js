import React, { Component } from "react";
import AuthService from "./auth-service/auth-service";

import "./App.css";
import CustomFooter from "./Footer";

export default class AccountPage extends Component  {
    constructor(props) {
        super(props);
    
        this.state = {
          currentUser: AuthService.getCurrentUser()
        };
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
                                        <button type="submit" class="btn btn-info">Update information</button></div>
                                </form>
                            </div></div>
                    </div>
                </div>
            </div>
            <CustomFooter /></div>
    );
}
}

