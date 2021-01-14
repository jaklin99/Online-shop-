import React, { Component } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

import UserService from "../auth-service/user-service";
import HomePage from "../HomePage";

export default class BoardAdmin extends Component {
 

  render() {
    return (
     <HomePage/>     
    );
  }
}