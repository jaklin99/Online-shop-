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

      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">Matchpoint</h5>

            Contact information: <br />+44746378278<br />matchpoint@gmail.com
          </div>
          <h5 class="text-uppercase">Address</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Oxford Str., London, UK</a>
              </li>            
            </ul>
          <hr class="clearfix w-100 d-md-none pb-3" />
          <div class="col-md-2 mb-md-0 mb-2">
            <h5 class="text-uppercase">Shop Online</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Shop online</a>
              </li>
              <li>
                <a href="#!">Cart</a>
              </li>
             
            </ul>
          </div>
          <div class="col-md-2 mb-md-0 mb-2">
            <h5 class="text-uppercase">Articles</h5>

          
          </div>
          <div class="col-md-2 mb-md-0 mb-2">
            <h5 class="text-uppercase">Posts</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomFooter;