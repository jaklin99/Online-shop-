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
import { FaFacebook, FaInstagram,FaTwitter,FaSnapchat } from "react-icons/fa"

function CustomFooter() {
  return (
   
<div className="footer-class">
<div class="container">
  <div class="row">
    <div class="col"><h5>Get in touch on social media:</h5></div><div class="col"></div>
    <div class="col"><h3><FaFacebook/> <FaInstagram/> <FaTwitter/> <FaSnapchat/></h3> </div></div></div> <hr></hr>
  <div class="footer-content">
  <div class="container">
  <div class="row">
    <div class="col">
    <h5> Quick view:</h5>
    <a href="">Home</a><br></br>
    <a href="">Home</a><br></br>
    <a href="">Home</a><br></br>
    <a href="">Home</a><br></br>
    <a href="">Home</a>
    </div>
    <div class="col">
    <h5>Contact us:</h5>
    </div>
    <div class="col">
    <h5>Address:</h5>
    </div>
  </div>
</div><hr></hr>
    </div>© {new Date().getFullYear()} 
  <h7> Matchpoint</h7></div>
    
  );
}
export default CustomFooter;