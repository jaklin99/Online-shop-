import React from "react";
import "./App.css"
import { FaFacebook, FaInstagram,FaTwitter,FaSnapchat } from "react-icons/fa"

function CustomFooter() {
  return (
   
<div className="footer-class">
<div class="container">
  <div class="row">
    <div class="col"><h5>Get in touch with us on social media:</h5></div><div class="col"></div>
    <div class="col"><h3><FaFacebook/> <FaInstagram/> <FaTwitter/> <FaSnapchat/></h3> </div></div></div> <hr></hr>
  <div class="footer-content">
  <div class="container">
  <div class="row">
    {/* <div class="col">
    <h5> Quick view:</h5>
    <a className="links" href="/posts">Posts</a><br></br>
    <a className="links" href="/onlineShop">Online shop</a><br></br>
    <a className="links" href="/checkout">Check out</a><br></br>
    </div> */}
    <div class="col">
    <h5>Contact us:</h5>
    <a className="links" href="/contact">Contact us</a><br></br>
    </div>
    <div class="col">
    <h5>Address:</h5>
    <h7>Ivan Vazov Str.10, Sofia, Bulgaria</h7>
    </div>
  </div>
</div><hr></hr>
    </div>© {new Date().getFullYear()} 
  <h7> Matchpoint</h7></div>
    
  );
}
export default CustomFooter;