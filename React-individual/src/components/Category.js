import React, { Component } from "react";
import CategoryService from "../services/CategoryService";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.saveUpdate = this.saveUpdate.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);

    this.state = {
      currentCategory: {
        id: null,
        name: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getCategory(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCategory: {
          ...prevState.currentCategory,
          name: name,
        },
      };
    });
  }

  getCategory(name) {
    CategoryService.get(name)
      .then((response) => {
        this.setState({
          currentCategory: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    }
    saveUpdate(status) {
      var data = {
        name: this.state.currentCategory.name,
        published: status
      };
  
      CategoryService.update(this.state.currentCategory.id, data)
        .then(response => {
          this.setState(prevState => ({
            currentCategory: {
              ...prevState.currentCategory,
              published: status
            }
          }));
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    updateCategory() {
        CategoryService.update(
          this.state.currentCategory.id,
          this.state.currentCategory
        )
          .then(response => {
            console.log(response.data);
            this.props.history.push("/category");
            this.setState({
              message: "The category was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }


  deleteCategory() {
    CategoryService.delete(this.state.currentCategory)
      .then(() => {
        this.props.history.push("/category"); //redirect 
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
    const { currentCategory } = this.state;

    return (
      <div>
        {currentCategory ? (
          <div className="edit-form">
            <h4>Product</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentCategory.productName}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentCategory.price}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={currentCategory.name}
                  onChange={this.onChangeCategory}
                />
              </div>
            <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentCategory.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentCategory.published ? (
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
              onClick={this.deleteCategory}
            >
              Delete
            </button>
            
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCategory}
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
