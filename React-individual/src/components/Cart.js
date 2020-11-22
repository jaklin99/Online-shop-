import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import CustomFooter from "../Footer";
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
        <div style={{display:"flex", flexWrap:"wrap", marginLeft: "15%"}}>
{products.map(product=>(
  <Card key={product.id} style={{width:"40%", margin:"5px"}}>
     <Card.Img variant="top" src={"/images/product/" + product.image}/> 
    <Card.Body>
      <Card.Title>{product.productName}
      </Card.Title><Card.Text>
        {product.description}<br/>
        <strong> Category: </strong> {product.category.productName}<br/>
        <strong> Price: </strong> {product.price} €
      </Card.Text>
      <Button variant="primary" onclick={()=> this.handleShow(product)}>More shopping</Button>
      <Button variant="primary" onclick={()=> this.clearCart()}>Clear the cart</Button>
    </Card.Body>
  </Card>
))}
        </div>
        </Col>
      </Row>
    );
  }
}
export default OnlineShop;
