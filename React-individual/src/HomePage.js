import React, { useState } from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import CustomFooter from "./Footer";

function HomePage(props) {
  return (
    <div class="carousel">
    <Carousel>
      <Carousel.Item>
        <img class="img"
          src="/imgs/tennis3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to MatchPoint</h3>
                  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          class="img"
          src="/imgs/tennis3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Watch videos</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          class="img"
          src="/imgs/tennis3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Shop online</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel><CustomFooter/>
    </div>
  );
}
export default HomePage;
