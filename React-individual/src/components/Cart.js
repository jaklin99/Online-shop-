import React, { Component,useContext } from "react";
import ModalCheckout from "./ModalCheckout";
import ProductService from "../services/ProductService";
import {Col,Row,Button} from "react-bootstrap";
import ControlledTabs from "./Tabs";
import OnlineShop from "./OnlineShop";

 class Cart extends React.Component {
   render() {
     return (
      <ControlledTabs/>
    //   const CartProducts = () => {

    //     const { products } = useContext(ProductService);
    
    //     return ( 
    //         <div>
    //             <div className="card card-body border-0">
    
    //                 {
    //                     products.map(product =>  <OnlineShop key={product.id} product={product}/>)
    //                 }
    
    //             </div>
    //         </div>
    
    //      );
    // }
     
    //export default CartProducts;
     );
   }
 }
 export default Cart;
