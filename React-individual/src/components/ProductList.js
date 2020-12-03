import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";
import {Col,Row,Button} from "react-bootstrap";
import Table from "react-bootstrap/Table"
import {TableBody, TableCell } from "semantic-ui-react";
import CustomFooter from "../Footer";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }


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
    const {products, currentProduct, currentIndex } = this.state;

    return (<>
      <Table  style={{width:"60%", marginLeft:"20%", marginTop: "1cm"}} striped bordered hover variant="dark">
         <thead>
    <tr>
      <th>Product Name</th>
      <th>Category</th>
      <th>Price</th>
      <th><button
            className="btn btn-sm btn-danger"
            onClick={this.removeAllProducts}
          >
            Remove All
          </button></th>
    </tr>
  </thead>
{products.map(product=>(
  <TableBody>
  <tr key={product.id} >
      <TableCell>{product.productName}
      </TableCell><TableCell>
        <td> Category: {product.category.name}</td> 
        </TableCell>
        <TableCell><td> Price: {product.price} €</td> 
      </TableCell>
      {/* <Button className="btn btn-sm btn-danger"> */}
        <Link
                to={"/product/" + product.productName}
                className="badge badge-warning" role="button"
              >
                Edit
              </Link>
              {/* </Button> */}
      </tr>
    </TableBody>
  
))}
      </Table><CustomFooter /></>
      // <div className="list row">
      //   <div className="col-md-6">
      //     <h4>Products List</h4>

      //     <ul className="list-group">
      //       {products &&
      //         products.map((product, index) => (
      //           <li
      //             className={
      //               "list-group-item " +
      //               (index === currentIndex ? "active" : "")
      //             }
      //             onClick={() => this.setActiveProduct(product, index)}
      //             key={index}
      //           >
      //             {product.productName}
      //           </li>
      //         ))}
      //     </ul>

          // <button
          //   className="m-3 btn btn-sm btn-danger"
          //   onClick={this.removeAllProducts}
          // >
          //   Remove All
          // </button>
      //   </div>
      //   <div className="col-md-6">
      //     {currentProduct ? (
      //       <div>
      //         <h4>Product</h4>
      //         <div>
      //           <label>
      //             <strong>Name:</strong>
      //           </label>{" "}
      //           {currentProduct.productName}
      //         </div>
      //         <div>
      //           <label>
      //             <strong>Price:</strong>
      //           </label>{" "}
      //           {currentProduct.price}
      //         </div>

              // <Link
              //   to={"/product/" + currentProduct.productName}
              //   className="badge badge-warning"
              // >
              //   Edit
              // </Link>
      //       </div>
      //     ) : (
      //         <div>
      //           <br />
      //           <p>Please click on a product...</p>
      //         </div>
      //       )}
      //   </div>
      // </div>
    );
  }
}
