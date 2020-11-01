import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import User from "./components/User";
import UserList from "./components/UserList";
import HomePage from "./HomePage";
import login from "./LoginPage";
import register from "./components/AddUser";
import posts from "./components/Posts";
import onlineShop from "./components/OnlineShop";
import "./App.css"
import Navbar from "react-bootstrap/Navbar";

function CustomFooter() {
  return (
    <div className="footer">

<footer class="page-footer font-small stylish-color-dark pt-4">

  <div class="container text-center text-md-left">

    <div class="row">
      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Posts</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div><hr class="clearfix w-100 d-md-none"/>

<div class="col-md-2 mx-auto">

  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Comments</h5>

  <ul class="list-unstyled">
    <li>
      <a href="#!">Link 1</a>
    </li>
    <li>
      <a href="#!">Link 2</a>
    </li>
    <li>
      <a href="#!">Link 3</a>
    </li>
    <li>
      <a href="#!">Link 4</a>
    </li>
  </ul>

</div>
      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Online shop</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Address & Contact</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 col-lg-2 text-center mx-auto my-4">

        <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

        <a type="button" class="btn-floating btn-fb">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a type="button" class="btn-floating btn-tw">
          <i class="fab fa-twitter"></i>
        </a>
        <a type="button" class="btn-floating btn-gplus">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a type="button" class="btn-floating btn-dribbble">
          <i class="fab fa-dribbble"></i>
        </a>

      </div>

    </div>
    </div>
  <hr></hr>
  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href="register" class="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>

  <hr></hr>
  <div class="footer-copyright text-center py-3">© 2020 Matchpoint
  </div>

</footer>
    </div>
  );
}
export default CustomFooter;