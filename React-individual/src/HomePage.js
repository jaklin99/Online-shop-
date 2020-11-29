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
            src="/imgs/wallpaper.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to MatchPoint</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            class="img"
            src="/imgs/novak.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <a href="posts" class="btn btn-home">
              Watch videos
                        </a>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="img"
            src="/imgs/shopping.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <a href="onlineShop" class="btn btn-home">
              Shop Online
            </a>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel><CustomFooter />
    </div>
  );
}
export default HomePage;
