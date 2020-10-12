import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CustomFooter from "../Footer";

class OnlineShop extends React.Component {
  render() {
    return (
      <div class="container"> 
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
        </div> 
        <CustomFooter/>
    </div> 
  
    );
  }
}
export default OnlineShop;
