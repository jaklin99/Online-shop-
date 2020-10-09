import React, { useState } from "react";
import "./App.css";

import register from "./RegisterPage";
function LoginPage(props) {
  return (
    <span className="h3">
      <center>
        <img src="/imgs/login.png" alt="logo img" />
        <div className="col-12 col-lg-4 mt-2 hv-center">
          <form>
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
            <a class="linksLogin" href="/register">
              Don't have an account? Sign in
            </a>
            <br></br>
            <a href="home" class="btn btn-info" active>
              Login
            </a>
          </form>
        </div>
      </center>
    </span>
  );
}
export default LoginPage;
