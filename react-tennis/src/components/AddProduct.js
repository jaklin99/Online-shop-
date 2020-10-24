import React, { Component } from "react";
import ProductService from "../services/ProductService";
import CustomFooter from "../Footer";

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
      name: "",
      price: 0,
      category: {
        category_id: 0
      },
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  saveProduct() {
    var data = {
      name: this.state.name,
      price: this.state.price,
      category: this.state.category
    };

    ProductService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
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
      name: "",
      price: 0,
      category: {
        category_id: 0
      },
      submitted: false,
    });
  }
  render() {
    return (
      <div class="row">
        <div class="col-lg-6 mb-4">
          <img class="login-img"
            src="/imgs/tennis.jpg"
            alt="First slide"
          />
        </div>
        <div class="col-lg-4 mb-4">
          <form class="form-l">
            <h2>Add new product</h2>
            <div className="form-group text-left">
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group text-left">
              <input
                type="number"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="form-group text-left">

              <input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.category}
                onChange={this.onChangeCategory}
                name="category"
                placeholder="Category"
              />
            </div>
            <button href="/" className="btn btn-watch">
              Cancel
            </button>
            <button onClick={this.saveProduct} className="btn btn-comment">
              Add
            </button>
          </form></div>
        <CustomFooter />
      </div>
    )
  };
}

