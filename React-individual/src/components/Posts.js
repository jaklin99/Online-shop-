import React, { useState } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import CustomFooter from "../Footer";

function Post(props) {
  return (
    <div class="carousel">
      <Carousel>
        <Carousel.Item>
          <iframe width="100%" height="700" src="https://www.youtube.com/embed/I77-CKHYFds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Carousel.Item>
        <Carousel.Item>
          <iframe width="100%" height="700" src="https://www.youtube.com/embed/V96sSCV03ng" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Carousel.Item>
      </Carousel><CustomFooter />
    </div>
  );
}
export default Post;
