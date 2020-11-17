
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./auth-service/auth-service";
import Login from "./auth-components/login-component";
import Register from "./auth-components/register-component";
import Profile from "./auth-components/profile-component";
import BoardUser from "./auth-components/board-user-component";
import BoardModerator from "./auth-components/board-moderator-component";
import BoardAdmin from "./auth-components/board-admin-component";
import User from "./components/User";
import UserList from "./components/UserList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "./HomePage";
//import Form from "./Form";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import posts from "./components/Posts";
import Account from "./AccountPage";
import onlineShop from "./components/OnlineShop";
import contact from "./Contact";
import Comment from "./components/Comment";



class Header extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <Router>
                 <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Matchpoint</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="posts">Posts</Nav.Link>
                            <Nav.Link href="onlineShop">Online shop</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                            <NavDropdown title="Service" id="basic-nav-dropdown">
                                <NavDropdown.Item href="userList">Show users</NavDropdown.Item>
                                <NavDropdown.Item href="addProduct">Add product</NavDropdown.Item>
                                <NavDropdown.Item href="productList">Show produts</NavDropdown.Item>
                            </NavDropdown>   </Nav>
                        <Nav>
                            {currentUser ? (
                                <div className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to={"/account"} className="nav-link">
                                            {currentUser.username}
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="/" className="nav-link" onClick={this.logOut}>
                                            LogOut
                                        </a>
                                    </li>
                                </div>
                            ) : (
                                    <div className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to={"/login"} className="nav-link">
                                                Login
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to={"/register"} className="nav-link">
                                                Sign Up
                                            </Link>
                                        </li>

                                    </div>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>




                {/* <nav className="navbar navbar-expand" bg="light" expand="lg">
                    <Link to={"/"} className="navbar-brand">
                        Matchpoint
          </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
              </Link>
                        </li> */}
                {/* 
                        {showModeratorBoard && (
                            <li className="nav-item">
                                <Link to={"/mod"} className="nav-link">
                                    Moderator Board
                </Link>
                            </li>
                        )} */}

                {/* {showAdminBoard && (
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link">
                                    Admin Board
                </Link>
                            </li>
                        )}

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    User
                </Link>
                            </li>
                        )} */}
                {/* <li className="nav-item">
                            <Link to={"/onlineShop"} className="nav-link">
                                Online shop
                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/posts"} className="nav-link">
                                Posts
                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">
                                Contact
                </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cart"} className="nav-link">
                                Cart
                </Link>
                        </li>
                        <NavDropdown className="loginItem" title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="account">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item></NavDropdown>
                    </div> */}

                {/* {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                </a>
                            </li>
                        </div>
                    ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Sign Up
                </Link>
                                </li>

                            </div>
                        )}
                </nav> */}


                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/user" component={BoardUser} />
                    <Route path="/mod" component={BoardModerator} />
                    <Route path="/admin" component={BoardAdmin} />
                    <Route path="/userList" component={UserList} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/posts" component={posts} />
                    <Route path="/onlineShop" component={onlineShop} />
                    <Route path="/addProduct" component={AddProduct} />
                    <Route path="/user/:email" component={User} />
                    <Route path="/product" component={Product} />
                    <Route path="/productList" component={ProductList} />
                    <Route path="/contact" component={contact} />
                    <Route path="/account" component={Account} />
                    <Route path="/comment" component={Comment} />
                    {/* <Route path="/form" component={Form} /> */}
                </Switch>


            </Router>
        );
    }
}

export default Header;