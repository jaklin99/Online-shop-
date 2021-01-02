import React, { Component, useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import {Tab} from 'react'
import Order from "./ShoppingCart";
import Orders from "./Orders";
import ShoppingCart from "./ShoppingCart";

function ControlledTabs() {
 
    return (
      <Tabs
      defaultActiveKey="pendingOrder"
        id="controlled-tab-example"      
      >
        <Tab eventKey="pendingOrder" title="Pending order"> 
         <ShoppingCart/> 
        </Tab>
        <Tab eventKey="orders" title="Orders"> 
         <Orders/>       
        </Tab>
      </Tabs>
    );
  }
  
  export default ControlledTabs;