import React, { Component } from "react";
import CategoryService from "../services/CategoryService";
import { Link } from "react-router-dom";
import {Col,Row,Button} from "react-bootstrap";
import Table from "react-bootstrap/Table"
import {TableBody, TableCell } from "semantic-ui-react";
import CustomFooter from "../Footer";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.retrieveCategory = this.retrieveCategory.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
   

    this.state = {
      categories: [],
      currentCategory: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveCategory();
  }


  retrieveCategory() {
    CategoryService.getAll()
      .then((response) => {
        this.setState({
          categories: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCategory();
    this.setState({
      currentCategory: null,
      currentIndex: -1,
    });
  }

  setActiveCategory(category, index) {
    this.setState({
      currentCategory: category,
      currentIndex: index,
    });
  }


  render() {
    const {categories, currentCategory, currentIndex } = this.state;

    return (<>
      <Table  style={{width:"40%", marginLeft:"30%", marginTop: "1cm"}} striped bordered hover variant="dark">
         <thead>
    <tr>
      <th>Category</th>
      
    </tr>
  </thead>
{categories.map(category=>(
  <TableBody>
  <tr key={category.name} >
      <TableCell>{category.name}
      </TableCell>
       
      {/* <Button className="btn btn-sm btn-danger"> */}
        <Link
                to={"/category/"+ category.categoryId}
                className="badge badge-warning" role="button"
              >
                Edit
              </Link>
              {/* </Button> */}
      </tr>
    </TableBody>
  
))}
      </Table><CustomFooter /></>
    );
  }
}
