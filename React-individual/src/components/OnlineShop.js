import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CustomFooter from "../Footer";
import ProductService from "../services/ProductService";
import { Col, Row, Button, Modal } from "react-bootstrap";
import {Form, FormControl} from "react-bootstrap";

class OnlineShop extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.searchName = this.searchName.bind(this);
    
    this.state = {
      products:[],      
      currentIndex: -1,
      searchName: "",
      show: false,
      setShow: false
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }
  
  handleClose = () => {
    this.setState({
      setShow: false
    })
  };
  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }
 
 
  handleShow = () => {
    this.setState({
      setShow: true
    })
  };
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

  searchName() {
   ProductService.get(this.state.searchName)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
 
  
  addProduct(orderDetails) {
    console.log(localStorage.getItem("cart"));
    // localStorage.removeItem("cart");
    if(orderDetails[1]>0){
    if(localStorage.getItem("cart")!== null){
     let cartItems=JSON.parse(localStorage.getItem("cart"));
     let existing=false;
     for(var i=0; i<cartItems.length;i++){
       if(cartItems[i][2]==orderDetails[2]){
         cartItems[i][1]+=orderDetails[1];
         existing=true;
       }
      }
      if(!existing){
        cartItems.push(orderDetails);
      }
     localStorage.setItem('cart',  JSON.stringify(cartItems));
     console.log("existing: " + localStorage.getItem("cart"));
     //window.module("The product was added to your cart.");
    }else{
      let cartItems=[];
      cartItems.push(orderDetails);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log(localStorage.getItem("cart"));
    }
  }else{
      alert("Quantity must be more than 0.");
    }
  }
 
  render() {
    const { products, searchName } = this.state;
    let quantity;
    return (
      <>
        <Row>
          <Col>
          <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
         </div>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "10%" }}>
              {products.map(product => (
                <Card key={product.productName} style={{ width: "30%", margin: "5px" }}>
                  <Card.Img src={product.image ? (`data:image/png;base64,${product.image}`) : ("./imgs/default.png")} />
                  <Card.Body>
                    <Card.Title>{product.productName}
                    </Card.Title><Card.Text>
                      <strong> Category: </strong> {product.category.name}<br />
                      <strong> Price: </strong> {product.price} €<br />
                      <strong> Quantity: </strong> <br />
                      <Form.Control name="quantity" min="0"onChange={(e)=>{quantity=e.target.value;console.log(quantity)}} type="number" placeholder="0" value={quantity} />
                      </Card.Text>
                    <Button className="btn" onClick={() =>{this.addProduct([product.price,parseInt(quantity),product.productName])}}>Add to cart</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <CustomFooter />
      </>
      //         <div class="online">

      //         <div class="row card-deck">
      //     <div class="col-lg-4 col-md-6 mb-4">
      //     <div class="card-body">
      //             {products &&
      //               products.map((product, index) => (
      //                 <li
      //                   className={
      //                     "card-header " +
      //                     (index === currentIndex ? "active" : "")
      //                   }
      //                   onClick={() => this.setActiveProduct(product, index)}
      //                   key={index}
      //                 >
      //                   {product.productName}
      //                 </li>
      //               ))}
      //                 <h4>Name</h4>
      //             </div></div>
      //         <div class="card text-center">

      //             <div class="card-body">
      //                 <a href="#"><img class="card-img-top"></img> 
      //                    </a>
      //                 <h5 class="card-title">Price</h5>
      //                 <div class="row">
      //                     <div class="col-4 padding-0">
      //                         <input type="number" min="0" class="form-control" />

      //                     </div>
      //                     <div class="col-4 padding-0">
      //                         <button class="btn btn-primary">
      //                                 Add To Cart
      //                         </button>
      //                     </div>
      //                     <div class="col-12">
      //                         <button class="btn btn-primary btn-block">Remove From Cart
      //                         </button>
      //                     </div>
      //                 </div>
      //             </div>
      //         </div>
      //         <div class="card text-white bg-danger mb-3">
      //     <div class="card-header text-center">Shopping Cart</div>
      //     <div class="card-body">
      //         <h5 class="card-title">Total: </h5>
      //         <hr/>
      //         <h6 class="card-title">Items bought:</h6>

      //         <ul>
      //             <li >
      //                Name- quantity
      //             </li>
      //         </ul>

      //         <button class="btn btn-light btn-block" >Checkout
      //         </button>
      //     </div>
      // </div>
      //</div> <CustomFooter/>
      //</div>
    );
  }
}
export default OnlineShop;
