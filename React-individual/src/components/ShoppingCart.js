import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalCheckout from "./ModalCheckout";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomFooter from "../Footer";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.getTotalCosts=this.getTotalCosts.bind(this);

   this.state = {
       products:[],
       totalCost:0,
       empty:true,
       message: ""
   };
 }

 getTotalCosts(products){
  if(products!==null && products.length!==0){
    console.log(products); 
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
 componentDidMount() {
  //localStorage.removeItem("cart");
    //this.getOrder(this.props.match.params.orderNr);
   const products=JSON.parse(localStorage.getItem("cart"));
   this.getTotalCosts(products);

  }
  addQuantity(product){
    console.log(product)
    let products=JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<products.length;i++){
      if(products[i][2]==product){
        products[i][1]++;
      }
    }
    localStorage.setItem('cart',  JSON.stringify(products));
    console.log("existing: " + localStorage.getItem("cart"));
    window.location.reload(); //refresh the page
  }
  removeQuantity(product){
    console.log(product)
    let products=JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<products.length;i++){
      if(products[i][2]==product){
        if(products[i][1]==1){
          products.splice(i, 1);
        
        }else{
          products[i][1]--;
        }
      }
    }
    localStorage.setItem('cart',  JSON.stringify(products));
    console.log("existing: " + localStorage.getItem("cart"));
    window.location.reload(); //refresh the page
  }
  removeProduct(product){
    let products=JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<products.length;i++){
      if(products[i][2]==product){
          products.splice(i, 1);
        }
    // let products=JSON.parse(localStorage.getItem("cart"));
    // if(products[i][1]==1){
    //   products.splice(i, 1);
    
    // }else{
    //   console.log("ghjk")
    // }
  } localStorage.setItem('cart',  JSON.stringify(products));
  console.log("existing: " + localStorage.getItem("cart"));
  window.location.reload(); //refresh the page
}
  clearCart(){
    if(window.confirm("Are you sure you want to clear the cart?")){
      localStorage.removeItem("cart");
      window.location.reload();
    }
  }
 render() {
  return (<>
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
                              <div key={product[2]}><button onClick={()=>this.addQuantity(product[2])}><i className="fa fa-plus"></i></button><button onClick={()=>this.removeQuantity(product[2])}><i className="fa fa-minus"></i></button><button onClick={()=>this.removeProduct(product[2])}><i className="fa fa-times"></i></button>{product[1]+" x "+product[2]}</div>
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
           </Row><CustomFooter /></>
  );
}
}