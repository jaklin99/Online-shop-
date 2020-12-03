import React, { Component } from "react";
import UserService from "../services/UserService";
import Card from "react-bootstrap/Card";
import AuthService from "../auth-service/auth-service";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
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
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      products: [],
      productName: "",
      price: 0,
      currentProduct: null,
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
  getByName(productName) {
    ProductService.get(productName)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
   this.getByName(this.state.searchName)
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
  removeAllProducts() {
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
    const { products, searchName } = this.state;
    return (
      <>
        <Row>
          <Col>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "10%" }}>
              {products.map(product => (
                <Card key={product.id} style={{ width: "30%", margin: "5px" }}>
                  <Card.Img src={product.image ? (`data:image/png;base64,${product.image}`) : ("./imgs/default.png")} />
                  <Card.Body>
                    <Card.Title>{product.productName}
                    </Card.Title><Card.Text>
                      {product.description}<br />
                      <strong> Category: </strong> {product.category.name}<br />
                      <strong> Price: </strong> {product.price} €
      </Card.Text>
                    <Button variant="primary" onClick={() => this.handleShow} >Add to cart</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <CustomFooter />
        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary">
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
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
