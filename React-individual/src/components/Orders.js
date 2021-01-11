import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import { Col, Row, Button } from "react-bootstrap";
import PurchaseService from "../services/PurchaseService";
import { Link } from "react-router-dom";
import CustomFooter from "../Footer";

class Order extends React.Component {
  constructor(props) {
    super(props);
    //this.getOrders=this.getOrders.bind(this);

   this.state = {
       orders:[],
       empty:true,
       show: false,
       setShow: false,
       currentIndex: -1,
       message: ""
   };
 }
 componentDidMount() {
   const products=JSON.parse(localStorage.getItem("cart"));
   this.retrieveOrders();
   //this.getTotalCosts(products);

  }
  handleShow = () => {
    this.setState({
      setShow: true
    })
  };
  retrieveOrders() {
    PurchaseService.getOrders()
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
    this.retrieveProducts();
    this.setState({
      currentPurchase: null,
      currentIndex: -1,
    });
  }

  setActivePurchase(purchase, index) {
    this.setState({
      currentPurchase: purchase,
      currentIndex: index,
    });
  }
  handleClose = () => {
    this.setState({
      setShow: false
    })
  };
  render(){
    const { orders } = this.state;
    return(<>
      <Row>
      <Col>
        <Card style={{ width: "80%", marginLeft: "3.5cm" }}>
            <div style={{ width: "100%" }}>
              <Card.Header>Your orders </Card.Header>
              <Card.Body>
              {orders.map(order => (
                <Card key={order.id} style={{ width: "100%", margin: "5px" }}>
                  <Card.Body>
                    <Card.Title>{order.id}
                    </Card.Title><Card.Text>
                    <strong> Order: </strong> {order.purchaseDetails}<br />
                      </Card.Text>
                     </Card.Body>
                </Card>
              ))}
                   
                <Button variant="primary"><Link to="/onlineShop">More shopping</Link></Button>
              </Card.Body>
            </div>
          <Row><Col>
            <Button className="btn btn-danger" onClick={()=>this.clearCart()}>Clear cart</Button>
          </Col></Row></Card>
      </Col>
    </Row><CustomFooter /></>
      );
    }
  }
export default Order;
