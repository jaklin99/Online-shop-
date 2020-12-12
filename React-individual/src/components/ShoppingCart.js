import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
       products:[],
       totalCost:0,
       empty:true,
       message: ""
   };
 }
 componentDidMount() {
    //this.getOrder(this.props.match.params.orderNr);
    const products=JSON.parse(localStorage.getItem("cart"));
    if(products!==null){
      var totalCosts=0;
      for(var i=0; i<products.length; i++){
        totalCosts+=products[i][0]*products[i][1];
      }
      this.setState({
        products:products,
        totalCost:totalCosts,
        empty:false
      });
    }
  }
  clearCart(){
    if(window.confirm("Are you sure you want to clear the cart?")){
      localStorage.removeItem("cart");
      window.location.reload();
    }
  }
 render() {
  return (
    <Row>
             <Col>
               <Card style={{ width: "80%", marginLeft: "3.5cm" }}>
                   <div style={{ width: "100%" }}>
                     <Card.Header>Your order </Card.Header>
                     <Card.Body>
                         {
                           this.state.empty ?(
                            <Card.Text> <p>The cart is empty.</p></Card.Text>
                           ):(
                            <Card.Text>
                            {this.state.products.map(product => (
                              <div key={product[2]}><button ><i className="fa fa-plus"></i></button><button ><i className="fa fa-minus"></i></button><button ><i className="fa fa-times"></i></button>{product[1]+" x "+product[2]}</div>
                              ))}
                            </Card.Text>
                              )
                         }
                       <Button variant="primary"><Link to="/onlineShop">More shopping</Link></Button>
                     </Card.Body>
                   </div>
                 <Row><Col>
                 {
                           this.state.empty ?(
                            <Button eventKey="disabled" disabled>Check out</Button> 
                 ):(  <ModalCheckout />)
                }
                   <Button className="btn btn-danger" onClick={()=>this.clearCart()}>Clear cart</Button>
                   <span class="costs">Total cost: {this.state.totalCost}</span>
                 </Col></Row></Card>
             </Col>
           </Row>
  );
}
}