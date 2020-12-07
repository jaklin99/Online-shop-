import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import {Col,Row,Button} from "react-bootstrap";
import ControlledTabs from "./Tabs";

class Cart extends React.Component {
  render() {
    return (
      <ControlledTabs/>
    );
  }
}
export default Cart;
