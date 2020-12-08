import React, { Component } from "react";
import ProductService from "../services/ProductService";
import CustomFooter from "../Footer";
import Axios from "axios";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import AddCategory from "./AddCategory";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      id: null,
      productName: "",
      price: 0,
      category: {
        categoryName: ""
      },
      submitted: false,
      categories: [],
      base64TextString: ""
    };
  }
 

  componentDidMount() {
    Axios.get('http://localhost:8080/category/all')
      .then(result => {
        const categories = result.data;
        this.setState({
          categories
        })
      })
  }

  onChangeName(e) {
    this.setState({
      productName: e.target.value,
    });
    console.log(this.state);
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
    console.log(this.state);
  }
  onChangeCategory(e) {
    this.setState({
      category: {
        categoryId: e.target.value
      }
    });
    console.log(this.state);
  }
  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result
    this.setState({
        base64TextString: btoa(binaryString)
    })
}
handleChange = (e) => {
  const { name, value } = e.target
  if (name === "productName") {
      this.setState(state => ({
          product: {
              ...this.state.product,
              [name]: value
          }
      }))
  }
 if (name === "image") {
      const file = e.target.files[0]
      if (file && ((file.type === "image/jpeg") || (file.type === "image/png")) && file.size <= 1048576) {
          const reader = new FileReader()
          reader.onload = this._handleReaderLoaded.bind(this)
          reader.readAsBinaryString(file)
          this.setState({
              fileError: null
          })
      }
      else {
          if (file.type !== ("image/jpeg" || "image/png")) {
              this.setState({
                  fileError: "Unsupported file type."
              })
          }
          else if (file.size > 1048576) {
              this.setState({
                  fileError: "File too large!"
              })
          }
          else {
              this.setState({
                  fileError: "File error!"
              })
          }
      }
  }
  else {
      this.setState({
          ...this.state,
          [name]: value
      })
  }
}
  saveProduct() {
    var data = {
      productName: this.state.productName,
      price: this.state.price,
      category: this.state.category,
      image: this.state.base64TextString
    };

    ProductService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          productName: response.data.productName,
          price: response.data.price,
          category: response.data.category,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      productName: "",
      price: 0,
      category: {
        category_id: 0
      },
      submitted: false,
    });
  }
  newCategory() {
    this.setState({
        category_id: 0,
      submitted: false,
    });
  }
 
  render() {
    return (
      
      <Row><Col>
      <Card className="addProductForm" style={{ display: "flex", flexWrap: "wrap"}}>
          <Form.Group controlId="name">
          <Form.Label>Product</Form.Label>
            <Form.Label>Name*</Form.Label>
            <Form.Control name="name" onChange={this.onChangeName} type="name" placeholder="" value={this.state.productName} />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price*</Form.Label>
            <Form.Control name="price" min="0"onChange={this.onChangePrice} type="number" placeholder="0.00" value={this.state.price} />
          </Form.Group>
          <Form.Group controlId="categoryId">
            <Form.Label>Select category*</Form.Label>
            <Form.Control as="select" name="categoryId" onChange={this.onChangeCategory}>
              <option>Select category</option>
              {this.state.categories.map(category => (
                <option key={category.name} value={category.categoryId}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.File name="image" accept="image/png,image/jpeg" label="Upload product image" onChange={this.handleChange}></Form.File>
          </Form.Group>
            <Button  className="btn btn-info"variant="primary" onClick={this.saveProduct}>Submit</Button>
            {/* <Button variant="secondary" onClick={handleClose}>
              Close
            </Button> */}
        </Card>
        </Col></Row>
     
    );
  }
}


