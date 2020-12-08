
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import AddProduct from "./AddProduct";
import { Dropdown } from "react-bootstrap";
import AddCategory from "./AddCategory";
import Checkout from "./Checkout";

function Add() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow}>
       Checkout
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Secure payment</Modal.Title>
          </Modal.Header>
          <Modal.Body><Checkout/></Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Add;