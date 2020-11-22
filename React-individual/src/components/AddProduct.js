import React, { Component } from "react";
import ProductService from "../services/ProductService";
import CustomFooter from "../Footer";
import Axios from "axios";
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      productName: "",
      price: 0,
      category: {
        categoryId: 0
      },
      submitted: false,
      categories: []
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

  saveProduct() {
    var data = {
      productName: this.state.productName,
      price: this.state.price,
      category: this.state.category
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
  render() {
    return (
      
      <div className="register">
      <Form className="addProductForm">
          <Form.Group controlId="name">
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
                <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.File name="image" accept="image/png,image/jpeg" label="Upload product image" />
          </Form.Group>
            <Button  className="btn btn-info"variant="primary" onClick={this.saveProduct}>Submit</Button>
            <Button className="btn btn-info" href="/" variant="primary">Cancel</Button>
        </Form>
        <CustomFooter />
       </div>
    );
  }
}


