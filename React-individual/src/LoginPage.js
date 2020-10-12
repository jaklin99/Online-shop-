import React, { useState } from "react";
import "./App.css";
import CustomFooter from "./Footer";
import GoogleBtn from './GoogleBtn';

function LoginPage(props) {
  return (
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <img class="login-img"
          src="/imgs/tennis-login.jpg"
          alt="First slide"
        />
    </div>
    <div class="col-sm">
    <form class="form-l">
      <h2>Login</h2>
            <div className="form-group text-left">
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="form-group text-left">
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>

            <a class="linksLogin" href="/">
              Forgotten password/username?{" "}
            </a>
            <br></br>
          
            <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
            <br></br>
            <a href="home" class="btn btn-info" active>
              Login 
            </a><a href="register" class="btn btn-info" active>
              Register 
            </a>
            {/* <GoogleBtn/> */}
          </form>
          <CustomFooter/>
    </div>
   </div>
   </div>
 
  );
}
export default LoginPage;
