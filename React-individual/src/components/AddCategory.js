import React, { Component } from "react";
import CustomFooter from "../Footer";
import Axios from "axios";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CategoryService from "../services/CategoryService";

export default class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveCategory = this.saveCategory.bind(this);
    this.newCategory = this.newCategory.bind(this);

    this.state = {
      id: null,
     name: "",
      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
    console.log(this.state);
  }

  saveCategory() {
    var data = {
     name: this.state.name,
      
    };

    CategoryService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newCategory() {
    this.setState({
      id: null,
      name: "",
      submitted: false,
    });
  }
  render() {
    return (
      
     <Row><Col>
        <Card className="addProductForm"style={{ display: "flex", flexWrap: "wrap"}}>
          <Form.Group controlId="name">
          <Form.Label>Category</Form.Label>
            <Form.Label>Name*</Form.Label>
            <Form.Control name="name" onChange={this.onChangeName} type="name" placeholder="" value={this.state.name} />
          </Form.Group>
          <Button  className="btn btn-info"variant="primary" onClick={this.saveCategory}>Submit</Button>
        </Card></Col></Row>
     
    );
  }
}


