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
import { IconName } from "react-icons/bs";

function CustomFooter() {
  return (
    <footer class="page-footer font-small blue-grey lighten-5">
      <div class="footer-class">
        <div class="container">
    
          <div class="row py-4 d-flex align-items-center">
    
            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>
            
            <div class="col-md-6 col-lg-7 text-center text-md-right">
    
              <a class="fb-ic">
                <i class="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram white-text"> </i>
              </a>
    
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3 dark-grey-text">
          <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
    
            <h6 class="text-uppercase font-weight-bold">Company name</h6>
            <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur
              adipisicing elit.</p>
    
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
            <h6 class="text-uppercase font-weight-bold">Products</h6>
            <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a class="dark-grey-text" href="#!">MDBootstrap</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">MDWordPress</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">BrandFlow</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">Bootstrap Angular</a>
            </p>
    
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a class="dark-grey-text" href="#!">Your Account</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">Shipping Rates</a>
            </p>
            <p>
              <a class="dark-grey-text" href="#!">Help</a>
            </p>
    
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p>
              <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
    
          </div>
        </div>
    
      </div>
      <div class="footer-copyright text-center text-black-50 py-3">© 2020 Copyright:
        <a class="dark-grey-text" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
     </div>
    </footer>
  );
}
export default CustomFooter;