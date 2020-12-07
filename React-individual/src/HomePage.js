import React, { useState } from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import CustomFooter from "./Footer";
import { Col, Row, Card, Button, ResponsiveEmbed, Image } from "react-bootstrap";

function HomePage(props) {
  return (
    <div class="carousel">
      <div class="hero-image">
        <img
          src="/imgs/tennis1.jpg"
          alt="First slide"
        />
        <div class="hero-text">
          <h2>Welcome to Matchpoint</h2>
        </div></div><h1>Find out more...</h1>
      <Row><Col>
      <ResponsiveEmbed aspectRatio="21by9">
        <div style={{ display: "flex", flexWrap: "wrap"}}>
           <Card style={{ width: "40%" }}>
            <img class="home-pics"style={{ width: "100%" }} src="/imgs/novak.jpg"
            />
            <Card.Body>
              <Card.Title>
              </Card.Title><Card.Text>
              </Card.Text>
              <Card.Link href="/posts" className="btn btn-watch" variant="light">Check out the matches</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "40%" }}>
            <img class="home-pics" style={{ width: "100%" }} src="/imgs/tennis.png" />
            <Card.Body>
              <Card.Title>
              </Card.Title><Card.Text>

              </Card.Text>
              <Card.Link href="/onlineShop" className="btn btn-watch" variant="light">Go through the online shop</Card.Link>
            </Card.Body>
          </Card></div></ResponsiveEmbed></Col></Row>
      <CustomFooter />
    </div>
  );
}
export default HomePage;
