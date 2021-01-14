import Axios from "axios";
import React, { Component } from "react";
import ProductService from "../services/ProductService";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    //this.onChangeCategory= this.onChangeCategory.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      currentProduct: {
        id: null,
        name: "",
        price: 0, 
        // category: {
        //   category_id: null
        // },
      },
      message: "",
    };
  }

  componentDidMount() {
    //console.log(this.getProduct(this.props.match.params.name))
    this.getProduct(this.props.match.params.name);
  }


  onChangeName(e) {
    const name = e.target.value;
    console.log(name);
    this.setState(function (prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          productName: name,
        },
      };
    });
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function(prevState){
      return{
      currentProduct: {
        ...prevState.currentProduct,
        price: price,
      },
    };
    });
  }
  // onChangeCategory(e) {
  //   const category = e.target.value;
  //   console.log(e.target.value)
  //   this.setState(function(prevState) {
  //     return{
  //     currentProduct: {
  //       ...prevState.currentProduct,
  //       category: category,
  //     },
  //   };
  //   });
  // }
  getProduct(name) {
    ProductService.getByName(name)
      .then((response) => {
        this.setState({
          currentProduct:response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
    saveUpdate(status) {
      var data = {
        name: this.state.currentProduct.name,
        price: this.state.currentProduct.price,
        // category: {
        //  category_id:this.state.currentProduct.category.category_id,
        // }, 
        published: status
      };
  
      ProductService.update(this.state.currentProduct.name, data)
        .then(response => {
          this.setState(prevState => ({
            currentProduct: {
              ...prevState.currentProduct,
              published: status
            }
          }));
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    updateProduct() {
      ProductService.update(
        this.state.currentProduct.productName,
        this.state.currentProduct,
        console.log(this.state.currentProduct)
      )
        .then(response => {
          console.log(response.data);
          this.setState({
            message: "The product was updated successfully!"
          });
        })
        .catch(e => {
          console.log(e);
        });
    }

    deleteProduct() {
      ProductService.delete(this.state.currentProduct)
        .then(() => {
          this.props.history.push("/productList"); //redirect 
          this.setState({
            message: "The product was deleted successfully."
          });
        })
        .catch((e) => {
          this.setState({
            message: "Something went wrong." + e
          });
        });
      }

  render() {
    const { currentProduct } = this.state;
    let pr=currentProduct[0];
//console.log(this.state)
    return (
      <div>
        {currentProduct ? (
          <div className="edit-form">
            <h4>Product</h4>
            <button onClick={()=>console.log(currentProduct)}>m</button>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentProduct.productName}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentProduct.price}
                  onChange={this.onChangePrice}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  placeholder={currentProduct.category}
                  onChange={this.onChangeCategory}
                />
              </div> */}
            <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentProduct.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentProduct.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.saveUpdate(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.saveUpdate(true)}
              >
                Save
              </button> )}
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProduct}
            >
              Delete
            </button>
            
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProduct}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a product...</p>
            <p>{this.state.message}</p>
          </div>
        )}
      </div>
    );
  }
}
