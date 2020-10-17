import React, { useState } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import CustomFooter from "../Footer";

function HomePage(props) {
  return (
    <div class="carousel">
    <Carousel>
      <Carousel.Item>
        <img class="img"
          src="/imgs/sharapova-williams.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sharapova VS Williams</h3>
          <a href="#" class="btn btn-info"> 
                            Want to read more? 
                        </a> 
                  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          class="img"
          src="/imgs/d-n.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Djokovic VS Nadal </h3>
          <a href="#" class="btn btn-info"> 
                            Want to read more? 
                        </a> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><CustomFooter/>
    </div>
  );
}
export default HomePage;
