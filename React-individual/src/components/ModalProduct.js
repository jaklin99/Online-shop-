
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import AddProduct from "./AddProduct";
import { Dropdown } from "react-bootstrap";

function Add() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Dropdown.Item onClick={handleShow}>
        Add product
        </Dropdown.Item>
  
        <Modal class="modal-dialog modal-lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddProduct/></Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default Add;