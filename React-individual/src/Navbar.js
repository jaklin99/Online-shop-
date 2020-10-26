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
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import posts from "./components/Posts";
import Articles from "./components/Articles";
import Account from "./AccountPage";
import onlineShop from "./components/OnlineShop";
import contact from "./Contact";
import Cart from "./components/Cart";

function CustomNavbar() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Matchpoint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="posts">Posts</Nav.Link>
            <Nav.Link href="articles">Articles</Nav.Link>
            <Nav.Link href="onlineShop">Online shop</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link className="loginItem" href="login">Login</Nav.Link>
            <NavDropdown title="Service" id="basic-nav-dropdown">
              <NavDropdown.Item href="user">User</NavDropdown.Item>
              <NavDropdown.Item href="userList">Show users</NavDropdown.Item>
              <NavDropdown.Item href="product">Product</NavDropdown.Item>
              <NavDropdown.Item href="addProduct">Add product</NavDropdown.Item>
              <NavDropdown.Item href="productList">Show produts</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="loginItem" title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="account">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <a class="btn btn-cart" href="cart">
              <i class="fa fa-shopping-cart"></i> Cart
    </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/userList" component={UserList} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={posts} />
        <Route exact path="/onlineShop" component={onlineShop} />
        <Route path="/login" component={login} />
        <Route path="/addProduct" component={AddProduct} />
        <Route path="/register" component={register} />
        <Route path="/user/:email" component={User} />
        <Route path="/product" component={Product} />
        <Route exact path="/productList" component={ProductList} />
        <Route path="/articles" component={Articles} />
        <Route path="/contact" component={contact} />
        <Route path="/account" component={Account} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}
export default CustomNavbar;
