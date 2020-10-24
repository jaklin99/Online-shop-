import React, { useState } from "react";
import "./App.css";
import CustomFooter from "./Footer";

function Contact(props) {
  return (
      <div className="contact">
<div class="container">
<div class="row">
<div class="col">
<div class="card">
    <div class="card-header"> Contact us.
    </div>
    <div class="card-body">
        <form>
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
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="6" required></textarea>
            </div>
            <div class="mx-auto">
            <button type="submit" class="btn btn-info">Submit</button></div>
        </form>
    </div></div>
</div>
</div>
</div><CustomFooter/></div>
         );
}
export default Contact;
