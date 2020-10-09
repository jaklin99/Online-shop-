import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class OnlineShop extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/imgs/red-racket.jpg" />
        <Card.Body>
          <Card.Title>Tennis racket</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Color: red</ListGroupItem>
          <ListGroupItem>Material: aluminium</ListGroupItem>
          <ListGroupItem>Weight: 250g</ListGroupItem>
          <button class="btn btn-info" active>
              Add to basket 
            </button>
        </ListGroup>
      </Card>
    );
  }
}
export default OnlineShop;
