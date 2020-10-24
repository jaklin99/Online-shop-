import React, { useState } from "react";
import "./App.css";
import CustomFooter from "./Footer";

function AccountPage(props) {
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
            {/* REMINDER: make the credentials appear for each logged-in user */}
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" id="password" aria-describedby="password" placeholder="Enter password" required/>
                <small id="password" class="form-text text-muted">We'll never share your password with anyone else.</small>
            </div>
            <div class="mx-auto">
            <button type="submit" class="btn btn-info">Update information</button></div>
        </form>
    </div></div>
</div>
</div>
</div>
<CustomFooter/></div>
         );
}
export default AccountPage;
