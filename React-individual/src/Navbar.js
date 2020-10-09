import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import User from "./components/User";
import UserList from "./components/UserList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "./HomePage";
import login from "./LoginPage";
import register from "./components/AddUser";
import posts from "./components/Posts";
import onlineShop from "./components/OnlineShop";

function CustomNavbar() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">MatchPoint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="posts">Posts</Nav.Link>
            <Nav.Link href="onlineShop">Online shop</Nav.Link>
            <Nav.Link href="users">Users</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="account">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/posts" component={posts} />
        <Route exact path="/onlineShop" component={onlineShop} />
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/users" component={User} />
      </Switch>
    </Router>
  );
}
export default CustomNavbar;
