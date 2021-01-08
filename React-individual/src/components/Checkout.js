import React, { Component } from "react";
import ProductService from "../services/ProductService";
import CustomFooter from "../Footer";
import Axios from "axios";
import { Form, Button } from "react-bootstrap"
import OrderService from "../services/OrderService";
import authService from "../auth-service/auth-service";
import PurchaseService from "../services/PurchaseService";


export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.pay=this.pay.bind(this);
        this.onChangeCard=this.onChangeCard.bind(this);   
        this.state={
            order:{
            paymentMethod:"",
            user:{
                id:null,
            },
            purchaseDetails:"",
            totalPrice:0          
        },     
        }     
      
     }

    onChangeCard(e){
        const currentCard=e.target.value
        console.log(e.target.value)
        this.setState(function (prevState) {
            return {
              order: {
                ...prevState.order,
                paymentMethod: currentCard,
              },
            };
          });
          console.log(this.state)
     }
    pay(){
        let carts=JSON.parse(localStorage.getItem("cart"))
     
        //const userData={id:authService.getCurrentUser().id, username:authService.getCurrentUser().username, email:authService.getCurrentUser().email, password:authService.getCurrentUser().password,roles:authService.getCurrentUser().roles}
        let totalPrice=0;
        
        let data1={paymentMethod:this.state.order.paymentMethod, user:{id: authService.getCurrentUser().id, }, }
        for(var i=0; i<carts.length;i++)
        {   
            totalPrice+= carts[i][0]*carts[i][1];
            this.state.order.purchaseDetails+= carts[i][1]+ " x "+ carts[i][2] +"; ";
            console.log(totalPrice)
        }
          let data={
            paymentMethod: this.state.order.paymentMethod,
            user:{
                id: authService.getCurrentUser().id,
            },
            purchaseDetails: this.state.order.purchaseDetails,
            totalPrice: totalPrice
            
        }
        //alert(this.state.order.length);
        //alert(authService.getCurrentUser().id);
        console.log(data)
            PurchaseService.addToCart(data).then(response=>{
               
              alert(response.data); 
           })
             .catch(e=>{alert(e)});
            localStorage.removeItem("cart");
         }
    render() {
        return (<>
            <button onClick={()=>this.pay()}>
                Jk
            </button>
        <form onSubmit={(event)=>{event.preventDefault()}} className="col-lg-12">       
             <div class="panel panel-info">
                 <div class="panel-heading"><span><i class="glyphicon glyphicon-lock"></i></span> Secure Payment</div>
                 <div class="panel-body">
                     <div class="form-group">
                         <div class="col-md-12"><strong>Card Type:</strong></div>
                         <div class="col-md-12">
                             <select onChange={this.onChangeCard}id="CreditCardType" name="CreditCardType" class="form-control">
                                 <option value="Visa">Visa</option>
                                 <option value="MasterCard">MasterCard</option>
                                 <option value="AmericanExpress">American Express</option>
                                 <option value="iDeal">iDeal</option>
                             </select>
                         </div>
                     </div>
                     <div class="form-group">
                         <div class="col-md-12"><strong>Credit Card Number:</strong></div>
                         <div class="col-md-12"><input type="text" class="form-control" name="card_number"  /></div>
                     </div>
                     <div class="form-group">
                         <div class="col-md-12"><strong>Card CVV:</strong></div>
                         <div class="col-md-12"><input type="text" class="form-control" name="card_code"  /></div>
                     </div>
                     <div class="form-group">
                         <div class="col-md-12">
                             <strong>Expiration Date</strong>
                         </div>
                         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                             <select class="form-control" name="">
                                 <option value="">Month</option>
                                 <option value="01">01</option>
                                 <option value="02">02</option>
                                 <option value="03">03</option>
                                 <option value="04">04</option>
                                 <option value="05">05</option>
                                 <option value="06">06</option>
                                 <option value="07">07</option>
                                 <option value="08">08</option>
                                 <option value="09">09</option>
                                 <option value="10">10</option>
                                 <option value="11">11</option>
                                 <option value="12">12</option>
                         </select>
                         </div>
                         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                             <select class="form-control" name="">
                                 <option value="">Year</option>
                                 <option value="2015">2015</option>
                                 <option value="2016">2016</option>
                                 <option value="2017">2017</option>
                                 <option value="2018">2018</option>
                                 <option value="2019">2019</option>
                                 <option value="2020">2020</option>
                                 <option value="2021">2021</option>
                                 <option value="2022">2022</option>
                                 <option value="2023">2023</option>
                                 <option value="2024">2024</option>
                                 <option value="2025">2025</option>
                         </select>
                         </div>
                     </div>
                     <div class="form-group">
                         <div class="col-md-12">
                             <span>Pay secure using your credit card.</span>
                         </div>
                         <div class="col-md-12">
                             <ul class="cards">
                                 <li class="visa hand">Visa</li>
                                 <li class="mastercard hand">MasterCard</li>
                                 <li class="amex hand">Amex</li>
                             </ul>
                             <div class="clearfix"></div>
                         </div>
                     </div>
                     <div class="form-group">
                         <div class="col-md-6 col-sm-6 col-xs-12">
                             <button type="submit" class="btn btn-primary btn-submit-fix" onClick={()=>this.pay()}>Place Order</button>
                         </div>
                     </div>
                 </div>
             </div>
          </form></>
         );
  }
}