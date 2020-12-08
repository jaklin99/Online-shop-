import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import OrderService from "../services/OrderService";
import { Col, Row, Button } from "react-bootstrap";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeProduct= this.onChangeProduct.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);

    this.state = {
      currentOrder: {
        id: null,
        orderNr: "",
        products:[]
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getOrder(this.props.match.params.orderNr);
  }

  onChangeProduct(e) {
    const product = e.target.value;

    this.setState((prevState) => ({
      currentOrder: {
        ...prevState.currentProduct,
        product: product,
      },
    }));
  }
  getOrder(orderNr) {
    OrderService.get(orderNr)
      .then((response) => {
        this.setState({
          currentOrder: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
    saveUpdate(status) {
      var data = {
        orderNr: this.state.currentOrder.orderNr,
        products: this.state.currentProduct.products,
        published: status
      };
  
      OrderService.update(this.state.currentOrder.id, data)
        .then(response => {
          this.setState(prevState => ({
            currentOrder: {
              ...prevState.currentOrder,
              published: status
            }
          }));
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    updateOrder() {
      OrderService.update(
        this.state.currentOrder.id,
        this.state.currentOrder,
        console.log(this.state.currentOrder)
      )
        .then(response => {
          console.log(response.data);
          this.setState({
            message: "The Order was updated successfully!"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    deleteOrder() {
      OrderService.delete(this.state.currentOrder)
        .then(() => {
          this.props.history.push("/cart"); //redirect 
          this.setState({
            message: "The user was deleted successfully."
          });
        })
        .catch((e) => {
          this.setState({
            message: "Something went wrong." + e
          });
        });
      }

  render() {
    const { order } = this.state;
    return (
      <Row>
        <Col>
          <Card style={{ width: "80%", marginLeft: "3.5cm" }}>
              <div style={{ width: "100%" }}>
                <Card.Header>Order {order.orderNr}</Card.Header>
                <Card.Body>
                  <Card.Text>
                  {this.state.Orders.map(Order => (
                <option key={Order.OrderId} value={Order.OrderId}>{Order.OrderName}</option>
                ))}
                  </Card.Text>
                  <Button variant="primary" onclick={() => this.handleShow(order)}>More shopping</Button>
                  <Button variant="primary" onclick={() => this.clearCart()}>Clear the cart</Button>
                </Card.Body>
              </div>
          
            <Row><Col>
             <ModalCheckout />
              <Button className="btn btn-danger">Clear cart</Button>
              <span class="costs">Total cost:</span>
            </Col></Row></Card>
        </Col>
      </Row>
    );
  }
}

export default Order;
