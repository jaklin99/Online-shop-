import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import {Col,Row,Button} from "react-bootstrap";

class OnlineShop extends React.Component {
    constructor(props) {
        super(props);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);
        this.clearCart = this.clearCart.bind(this);
       
        this.state = {
          products: [],
          productName: "",
          price: 0,
          currentProduct: null,
          currentIndex: -1,
        };
      }
    
      componentDidMount() {
        this.retrieveProducts();
      }
      handleShow(){
        
      }
    
      retrieveProducts() {
        ProductService.getAll()
          .then((response) => {
            this.setState({
              products: response.data,
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
          currentProduct: null,
          currentIndex: -1,
        });
      }
    
      setActiveProduct(product, index) {
        this.setState({
          currentProduct: product,
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
    const {products} = this.state;
    return (
      <Row>
        <Col>
        <Card style={{width:"80%", marginLeft:"3.5cm"}}>
{products.map(product=>(
  <div key={product.id} style={{width:"100%"}}>
    <Card.Header>{product.productName}</Card.Header>
     <Card.Img variant="top" src={"/images/product/" + product.image}/> 
    <Card.Body>
     <Card.Text>
        {product.description}<br/>
        <strong> Category: </strong> {product.category.productName}<br/>
        <strong> Price: </strong> {product.price} €
      </Card.Text>
      <Button variant="primary" onclick={()=> this.handleShow(product)}>More shopping</Button>
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
export default OnlineShop;
