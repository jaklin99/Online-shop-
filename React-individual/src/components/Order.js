import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import {Col,Row,Button} from "react-bootstrap";
import OrderService from "../services/OrderService";

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.retriveOrders = this.retriveOrders.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveOrders = this.setActiveOrders.bind(this);
        this.clearCart = this.clearCart.bind(this);
       
        this.state = {
          orders:[],
          orderId: "",
          currentOrder: null,
          currentIndex: -1,
        };
      }
    
      componentDidMount() {
        this.retriveOrders();
      }
      handleShow = () => {
        this.setState({
          setShow: true
        })
      };
    
      retriveOrders() {
        OrderService.getAll()
          .then((response) => {
            this.setState({
              orders: response.data,
            });
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    
      refreshList() {
        this.retriveOrders();
        this.setState({
          currentOrder: null,
          currentIndex: -1,
        });
      }
    
      setActiveOrders(order, index) {
        this.setState({
          currentOrder: order,
          currentIndex: index,
        });
      }
    
      clearCart() {
        ProductService.deleteAll()
          .then((response) => {
            console.log(response.data);
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      }
  render() {
    const {orders} = this.state;
    return (
      <Row>
        <Col>
        <Card style={{width:"80%", marginLeft:"3.5cm"}}>
{orders.map(order=>(
  <div key={order.id} style={{width:"100%"}}>
    <Card.Header>{order.orderId}</Card.Header>
    <Card.Body>
     <Card.Text>
        <strong> Order </strong> {order.id}<br/>
      </Card.Text>
      <Button variant="primary" onclick={()=> this.handleShow(order)}>More shopping</Button>
      <Button variant="primary" onclick={()=> this.clearCart()}>Clear the cart</Button>
    </Card.Body>
  </div>
))}</Card>
         <Button><ModalCheckout/></Button>
        </Col>
      </Row>
    );
  }
}

export default Order;
