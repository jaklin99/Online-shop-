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
      name: "",
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
      name: e.target.value,
    });
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
      <div className="register">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header"> Add product
          </div>
                <div class="card-body">
                  <form method="POST">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={this.state.name}
                        onChange={this.onChangeName}
                        name="name"
                        placeholder="Name"
                      /></div>
                    <div class="form-group">
                      <label for="price">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        required
                        value={this.state.price}
                        onChange={this.onChangePrice}
                        name="price"
                        placeholder="Price"
                      /></div>
                    <div class="form-group">
                      <label for="category">Category</label>
                      <select name="Categories" onChange={this.onChangeCategory} id="category">
                        <option>Select category</option>
                        {this.state.categories.map(category => (
                          <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
                        ))}
                      </select>
                    </div>
                    <div class="mx-auto">
                      <button onClick={this.saveProduct} className="btn btn-comment">
                        Add
            </button>
                      <button href="/" className="btn btn-watch">
                        Cancel
            </button>
                    </div>
                  </form>
                </div></div>
            </div>
          </div>
        </div><CustomFooter />
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name*</Form.Label>
            <Form.Control name="name" onChange={this.onChangeName} type="name" placeholder="Water" value={this.state.name} />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price*</Form.Label>
            <Form.Control name="price" onChange={this.onChangePrice} type="number" placeholder="0.00" value={this.state.price} />
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
          <Link to="/productsmanager">
            <Button variant="primary" onClick={this.saveProduct}>Submit</Button>
          </Link>
        </Form></div>
    );
  }
}


// import React, { Component } from "react";
// import ProductService from "../services/ProductService";
// import CustomFooter from "../Footer";
// import Axios from "axios";

// export default class AddProduct extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangePrice = this.onChangePrice.bind(this);
//     this.onChangeCategory = this.onChangeCategory.bind(this);
//     this.saveProduct = this.saveProduct.bind(this);
//     this.newProduct = this.newProduct.bind(this);

//     this.state = {
//       id: null,
//       name: "",
//       price: 0,
//       category: {
//         categoryId: 0
//       },
//       submitted: false,
//       categories: []
//     };
//   }

//   componentDidMount() {
//     Axios.get('http://localhost:8080/category/all')
//       .then(result => {
//         const categories = result.data;
//         this.setState({
//           categories
//         })
//       })
//   }

//   onChangeName(e) {
//     this.setState({
//       name: e.target.value,
//     });
//   }

//   onChangePrice(e) {
//     this.setState({
//       price: e.target.value,
//     });
//     console.log(this.state);
//   }
//   onChangeCategory(e) {
//     this.setState({
//       category: {
//         categoryId: e.target.value
//       }
//     });
//     console.log(this.state);
//   }

//   saveProduct() {
//     var data = {
//       name: this.state.name,
//       price: this.state.price,
//       category: this.state.category
//     };

//     ProductService.create(data)
//       .then((response) => {
//         this.setState({
//           id: response.data.id,
//           name: response.data.name,
//           price: response.data.price,
//           category: response.data.category,
//           submitted: true
//         });
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   newProduct() {
//     this.setState({
//       id: null,
//       name: "",
//       price: 0,
//       category: {
//         category_id: 0
//       },
//       submitted: false,
//     });
//   }
//   render() {
//     return (
//       <div class="row">
//         <div class="col-lg-4 mb-4">
//           <form class="form-l">
//             <h2>Add new product</h2>
//             <div className="form-group text-left">
              // <input
              //   type="text"
              //   className="form-control"
              //   id="name"
              //   required
              //   value={this.state.name}
              //   onChange={this.onChangeName}
              //   name="name"
              //   placeholder="Name"
              // />
//             </div>
//             <div className="form-group text-left">
              // <input
              //   type="number"
              //   className="form-control"
              //   id="price"
              //   required
              //   value={this.state.price}
              //   onChange={this.onChangePrice}
              //   name="price"
              //   placeholder="Price"
              // />
//             </div>
//             <div className="form-group text-left">

              // <select name="Categories" onChange={this.onChangeCategory} id="category">
              //   <option>Select category</option>
              //   {this.state.categories.map(category => (
              //     <option key={category.categoryId} value={category.categoryId}>{category.name}</option>
              //   ))}
              // </select>
//             </div>
            // <button href="/" className="btn btn-watch">
            //   Cancel
            // </button>
            // <button onClick={this.saveProduct} className="btn btn-comment">
            //   Add
            // </button>
//           </form></div>
//         <CustomFooter />
//       </div>
//     )
//   };
// }

