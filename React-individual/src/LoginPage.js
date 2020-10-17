import React, { useState } from "react";
import "./App.css";
import CustomFooter from "./Footer";
import GoogleBtn from './GoogleBtn';
import RememberMe from './RememberMe'
function LoginPage(props) {
  return (
  <div className="login">
    <img class="login-img"
          src="/imgs/tennis-login.jpg"
          alt="First slide"
        />
    <form class="form-l">
      <h2>Login</h2>
            {/* <div className="form-group text-left">
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
            <tr>
                            <td colSpan="2">
                                <input type="checkbox"  name="lsRememberMe"  />
                                <label>Remember me</label></td>
                        </tr>
            <br></br>
            <a href="home" class="btn btn-info" active>
              Login 
            </a><a href="register" class="btn btn-info" active>
              Register 
            </a>
            {/* <GoogleBtn/> */}
          </form> 
          <RememberMe/>
          <CustomFooter/>
    </div>
 
  );
}
export default LoginPage;
