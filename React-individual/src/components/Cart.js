import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomFooter from "../Footer";
class Cart extends React.Component {
    render() {
        return (
            <>
                <div class="cart">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 ">
                                <table >
                                    <thead>
                                        <tr>
                                            <h4>Your cart</h4>
                                            <th>Quantity</th>
                                            <th class="text-center">Price</th>
                                            <th class="text-center">Total</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="col-sm-12">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#"> <img class="product-cart" src="./imgs/red-racket.jpg" /> </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">Product name</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                                                    </div>
                                                </div></td>
                                            <td class="col-sm-1 col-md-1">
                                                <input type="text" class="form-control" id="quantity" />
                                            </td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                                            <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                                            <td class="col-sm-1 col-md-1">
                                                <button type="button" class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                                        </tr>
                                        <tr>
                                            <td class="col-md-12">
                                                <div class="media">
                                                    <a class="thumbnail pull-left" href="#"> <img class="product-cart" src="./imgs/red-racket.jpg" /> </a>
                                                    <div class="media-body">
                                                        <h4 class="media-heading"><a href="#">Product name</a></h4>
                                                        <h5 class="media-heading"> by <a href="#">Brand name</a></h5>
                                                    </div>
                                                </div></td>
                                            <td class="col-md-1">
                                                <input type="text" class="form-control" id="quantity" />
                                            </td>
                                            <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                                            <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                                            <td class="col-md-1">
                                                <button type="button" class="btn btn-danger">
                                                    <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                                        </tr>
                                        <center>
                                        <tr>
                                           
                                            <td><h5>Subtotal</h5></td>
                                            <td class="text-right"><h5><strong>$24.59</strong></h5></td>
                                        </tr>
                                        <tr>
                                           
                                            <td><h5>Estimated shipping</h5></td>
                                            <td class="text-right"><h5><strong>$6.94</strong></h5></td>
                                        </tr>
                                        <tr>
                                           
                                            <td ><h3>Total</h3></td>
                                            <td class="text-right"><h3><strong>$31.53</strong></h3></td>
                                        </tr>
                                        </center>
                                        <button type="button" class="btn btn-watch">
                                            Continue Shopping
                        </button>
                                        <button type="button" class="btn btn-comment">
                                            Checkout
                                        </button>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div></div>
                <CustomFooter />
            </>
        );
    }
}
export default Cart;
