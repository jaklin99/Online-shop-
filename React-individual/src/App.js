import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./Navbar";
import AuthNav from "./AuthNav";

class App extends Component {
  render() {
    return (
    <CustomNavbar />
    //<AuthNav />
    );
  }
}
export default App;
