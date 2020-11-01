import React, { useState } from "react";
import "./App.css";
import CustomFooter from "./Footer";
import GoogleBtn from './GoogleBtn';
import RememberMe from './RememberMe'
function LoginPage(props) {
  return (<div className="register">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header"> Login
      </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" rows="6" required></input>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your password with anyone else.</small>

                </div>
                <div class="mx-auto">
                  <button type="submit" class="btn btn-register">Login</button></div>
                  <small class="form-text text-muted"> <a href="register">Don't have an account?</a></small>

              </form>
            </div></div>
        </div>
      </div> {/* <GoogleBtn/>  */} {/* <RememberMe/> */}
    </div><CustomFooter /></div>
  );
}
export default LoginPage;
