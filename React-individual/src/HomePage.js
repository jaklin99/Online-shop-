import React, { useState } from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";

function HomePage(props) {
  return (
    // <div class="App-header">
    // <div class="main">
    //   <div class="callout">
    //     <div class="callout-header">Welcome to the tennis club</div>
    //   </div>
    // </div>
    // </div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/tennis1.jfif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/tennis2.jfif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/tennis3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default HomePage;
