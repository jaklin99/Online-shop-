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
        <Navbar bg="light" expand="lg"> <Navbar.Brand href="/">MatchPoint</Navbar.Brand></Navbar>
  
  </div>
 );
}
export default CustomFooter;