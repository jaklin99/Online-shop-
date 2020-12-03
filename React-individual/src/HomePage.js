import React, { useState } from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import CustomFooter from "./Footer";
import {Col, Row,Card, Button} from "react-bootstrap";

function HomePage(props) {
  return (
    <div class="carousel">
      <div  class="hero-image">
          <img
            src="/imgs/tennis1.jpg"
            alt="First slide"
            />
          <div class="hero-text">
    <h2>Welcome to Matchpoint</h2>
  </div></div><h1>Find out more...</h1>
            <Row><Col>
            <div style={{ display: "flex", flexWrap: "wrap", marginBottom:"0.8cm" }}>
      <Card style={{ width: "40%"}}>
                  <Card.Img style={{ width: "100%" }}src="/imgs/novak.jpg"
            />
                  <Card.Body>
                    <Card.Title>
                    </Card.Title><Card.Text>
                      
      </Card.Text>
                    <Button className="btn btn-watch"variant="light">Check out the matches</Button>
                  </Card.Body>
                </Card>
      <Card style={{ width: "40%"}}>
                  <Card.Img style={{ width: "100%"}} src="/imgs/tennis-balls-x-3.jpg"/>
                  <Card.Body>
                    <Card.Title>
                    </Card.Title><Card.Text>
                      
      </Card.Text>
                    <Button className="btn btn-watch"variant="light">Go through the online shop</Button>
                  </Card.Body>
                </Card></div></Col></Row>
      <CustomFooter />
    </div>
  );
}
export default HomePage;
