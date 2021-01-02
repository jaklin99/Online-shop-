import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import { Col, Row, Button } from "react-bootstrap";
import OrderService from "../services/OrderService";
import { Link } from "react-router-dom";
class Order extends React.Component {
  constructor(props) {
    super(props);
    //this.getOrders=this.getOrders.bind(this);

   this.state = {
       orders:[],
       empty:true,
       message: ""
   };
 }
 componentDidMount() {
   const products=JSON.parse(localStorage.getItem("cart"));
   //this.getTotalCosts(products);

  }
  render(){
    return(
      <Row>
      <Col>
        <Card style={{ width: "80%", marginLeft: "3.5cm" }}>
            <div style={{ width: "100%" }}>
              <Card.Header>Your orders </Card.Header>
              <Card.Body>
                     <Card.Text>
                     {/* {this.state.products.map(product => (
                       <div key={}><button onClick={}><i className="fa fa-plus"></i></button><button onClick={()=>this.removeQuantity(product[2])}><i className="fa fa-minus"></i></button><button onClick={()=>this.removeProduct(product[2])}><i className="fa fa-times"></i></button>{product[1]+" x "+product[2]}</div>
                       ))} */}
                     </Card.Text>
                   
                <Button variant="primary"><Link to="/onlineShop">More shopping</Link></Button>
              </Card.Body>
            </div>
          <Row><Col>
            <Button className="btn btn-danger" onClick={()=>this.clearCart()}>Clear cart</Button>
          </Col></Row></Card>
      </Col>
    </Row>
      );
    }
  }
export default Order;
