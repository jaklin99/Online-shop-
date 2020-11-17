import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CustomFooter from "../Footer";

class OnlineShop extends React.Component {
  render() {
    return (
        <div class="online">
      {/* <div class="container"> 
        <div class="row"> 
            <div class="col-lg-3 mb-4"> 
                <div class="card"> 
                    <img class="card-img" src="./imgs/red-racket.jpg" alt="" />
  
                    <div class="card-body"> 
                        <h5 class="card-title">Red Racket</h5> 
                        <p class="card-text"> 
                            Price: 150 
                        </p> 
                        <p class="card-text"> 
                           Material: Aluminium
                        </p>
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Add to basket
                        </a> 
                    </div> 
                </div> 
            </div> 
            <div class="col-lg-3 mb-4"> 
                <div class="card"> 
                    <img class="card-img" src="./imgs/red-racket.jpg" alt="" />
  
                    <div class="card-body"> 
                        <h5 class="card-title">Red Racket</h5> 
                        <p class="card-text"> 
                            Price: 150 
                        </p> 
                        <p class="card-text"> 
                           Material: Aluminium
                        </p>
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Add to basket
                        </a> 
                    </div> 
                </div> 
            </div> 
            <div class="col-lg-3 mb-4"> 
                <div class="card"> 
                    <img class="card-img" src="./imgs/red-racket.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Red Racket</h5> 
                        <p class="card-text"> 
                            Price: 150 
                        </p> 
                        <p class="card-text"> 
                           Material: Aluminium
                        </p>
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Add to basket
                        </a> 
                    </div> 
                </div> 
            </div> 
            <div class="col-lg-3 mb-6"> 
                <div class="card"> 
                    <img class="card-img" src="./imgs/red-racket.jpg" alt=""/> 
  
                    <div class="card-body"> 
                        <h5 class="card-title">Red Racket</h5> 
                        <p class="card-text"> 
                            Price: 150 
                        </p> 
                        <p class="card-text"> 
                           Material: Aluminium
                        </p>
                        <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Add to basket
                        </a> 
                    </div> 
                </div> 
            </div> 
        </div>  */}
        <div class="row card-deck">
    <div class="col-lg-4 col-md-6 mb-4">
        <div class="card text-center">
            <div class="card-header">
                <h4>Name</h4>
            </div>
            <div class="card-body">
                <a href="#"><img class="card-img-top"></img> 
                   </a>
                <h5 class="card-title">Price</h5>
                <div class="row">
                    <div class="col-4 padding-0">
                        <input type="number" min="0" class="form-control" />
                            
                    </div>
                    <div class="col-4 padding-0">
                        <button class="btn btn-primary">
                                Add To Cart
                        </button>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary btn-block">Remove From Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card text-white bg-danger mb-3">
    <div class="card-header text-center">Shopping Cart</div>
    <div class="card-body">
        <h5 class="card-title">Total: </h5>
        <hr/>
        <h6 class="card-title">Items bought:</h6>
 
        <ul>
            <li >
               Name- quantity
            </li>
        </ul>
 
        <button class="btn btn-light btn-block" >Checkout
        </button>
    </div>
</div>
    </div> <CustomFooter/>
  </div></div>
    );
  }
}
export default OnlineShop;
