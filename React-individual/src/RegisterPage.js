import React, { useState } from "react";
import "./App.css";

function RegisterPage(props) {
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
                type="email"
                className="form-control"
                id="Email"
                placeholder="Email"
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
            <div className="form-group text-left">
              <input
                type="confirmPassword"
                className="form-control"
                id="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
            <a href="home" class="btn btn-register" active>
              Register
            </a>
          </form>
        </div>
      </center>
    </span>
  );
}
export default RegisterPage;
