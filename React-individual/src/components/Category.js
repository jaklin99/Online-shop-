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

  getCategory(id) {
    CategoryService.get(id)
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
  
      CategoryService.update(this.state.currentCategory.categoryId, data)
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
        this.state.currentCategory.categoryId,
        this.state.currentCategory,
        console.log(this.state.currentCategory)
      )
        .then(response => {
          console.log(response.data);
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
          message: "The category was deleted successfully."
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
            <h4>Category</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentCategory.name}
                  onChange={this.onChangeName}
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
