import React, { Component, useState } from "react";
import Tabs from 'react-bootstrap/Tabs'
import {Tab} from 'react'
import Order from "./Order";
import Orders from "./Orders";

function ControlledTabs() {
 
    return (
      <Tabs
      defaultActiveKey="pendingOrder"
        id="controlled-tab-example"      
      >
        <Tab eventKey="pendingOrder" title="Pending order"> 
         <Order/> 
        </Tab>
        <Tab eventKey="orders" title="Orders"> 
        <Orders/>      
        </Tab>
      </Tabs>
    );
  }
  
  export default ControlledTabs;