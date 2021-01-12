
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./auth-service/auth-service";
import Login from "./auth-components/login-component";
import Register from "./auth-components/register-component";
import Profile from "./auth-components/profile-component";
import BoardUser from "./auth-components/board-user-component";
import BoardAdmin from "./auth-components/board-admin-component";
import User from "./components/User";
import UserList from "./components/UserList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import HomePage from "./HomePage";
import ModalProduct from "./components/ModalProduct";
import ModalCategory from "./components/ModalCategory";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import posts from "./components/Posts";
import Account from "./AccountPage";
import onlineShop from "./components/OnlineShop";
import Cart from "./components/Cart";
import { FaShoppingCart } from "react-icons/fa"
import CategoryList from "./components/CategoryList";
import Category from "./components/Category";
import WebSocket from "./websocket/webSocket";

class Header extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showAdminBoard: false,
            currentUser: undefined,
            
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showAdminBoard } = this.state;

        return (
            <Router>
                <Navbar bg="white" variant="light">
                    <Navbar.Brand href="/"><img data-pin-nopin="true"
                        src="/imgs/matchpoint.png" width="140" height="50"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <div class="md-form mt-0">
                            </div>
                        </Nav>
                        {showAdminBoard && (
             
                <Link to={"/admin"}>
                <NavDropdown title="Service" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/userList">Show users</NavDropdown.Item>
                                        <ModalCategory />
                                        <NavDropdown.Item href="/categoryList">Show categories</NavDropdown.Item>
                                        <ModalProduct />
                                        <NavDropdown.Item href="/productList">Show produts</NavDropdown.Item>
                                    </NavDropdown>                </Link>
                        )}          
                        <Nav >
                            {currentUser ? (

                                <div className="navbar-nav">
                                   
                                    <li className="nav-item">
                                        <a href="/cart" className="nav-link">
                                            <FaShoppingCart /> Cart
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/account/" + currentUser.email} className="nav-link">
                                            {currentUser.username}
                                        </Link>
                                    </li>

                                    <li className="nav-item ">
                                        <a href="/" className="nav-link" onClick={this.logOut}>
                                            Log out
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
                <Navbar bg="light" variant="light">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/posts">Posts</Nav.Link>
                            {currentUser ? (
                                <div className="navbar-nav">
                            <Nav.Link href="/onlineShop">Online shop</Nav.Link>
                            <Nav.Link href="/webS">Web socket</Nav.Link>
                            </div> 
                            ) : (
                                <div className="navbar-nav">
                            <div class="md-form mt-0">
                            </div>
                            </div>
                            )}
                            <Nav.Link type="submit" class="btn btn-info" role="button" href="mailto:jakitoo99@gmail.com">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse></Navbar>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/user" component={BoardUser} />
                    <Route path="/admin" component={BoardAdmin} />
                    <Route path="/userList" component={UserList} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/posts" component={posts} />
                    <Route path="/onlineShop" component={onlineShop} />
                    <Route path="/user/:email" component={User} />
                    <Route path="/product/:name" component={Product} />
                    <Route path="/category/:id" component={Category} />
                    <Route path="/productList" component={ProductList} />
                    <Route path="/categoryList" component={CategoryList} />
                    <Route path="/account/:email" component={Account} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/webS" component={WebSocket} />
                </Switch>


            </Router>
        );
    }
}

export default Header;