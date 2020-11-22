import { render } from "@testing-library/react";
import React,{Component}from "react";
import "./App.css";
import CustomFooter from "./Footer";

class Contact extends Component  {
  constructor(props) {
    super(props);
this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }
handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
  }
      
//  render(){
//   return (
//       <div className="contact">
// <div class="container">
// <div class="row">
// <div class="col">
// <div class="card">
//     <div class="card-header"> Contact us.
//     </div>
//     <div class="card-body">
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//             <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required/>
//             </div>
//             <div class="form-group">
//                 <label for="email">Email address</label>
//                 <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
//                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//             </div>
//             <div class="form-group">
//                 <label for="message">Message</label>
//                 <textarea class="form-control" id="message" rows="6" required></textarea>
//             </div>
//             <div class="mx-auto">
//             <button type="submit" class="btn btn-info"><a href="mailto:jakitoo99@gmail.com">Send</a></button></div>
                                
//         </form>
//     </div></div>
// </div>
// </div>
// </div><CustomFooter/></div>
//          );
//         }
render() {
    return(
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onChangeName.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onChangeEmail.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onChangeMessage.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
        }
export default Contact;
