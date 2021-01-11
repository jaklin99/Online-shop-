// import React, { Component } from "react";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import UserService from "../auth-service/user-service";

// export default class BoardAdmin extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getUserBoard().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

//   render() {
//     return (<>
//     <Navbar bg="white" variant="light">
//                     <Navbar.Brand href="/"><img data-pin-nopin="true"
//                         src="/imgs/matchpoint.png" width="140" height="50"></img></Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                             <div class="md-form mt-0">
//                             </div>
//                         </Nav>
//                         <Nav >
//                             {currentUser ? (

//                                 <div className="navbar-nav">
//                                     <NavDropdown title="Service" id="basic-nav-dropdown">
//                                         <NavDropdown.Item href="/userList">Show users</NavDropdown.Item>
//                                         <ModalCategory />
//                                         <NavDropdown.Item href="/categoryList">Show categories</NavDropdown.Item>
//                                         <ModalProduct />
//                                         <NavDropdown.Item href="/productList">Show produts</NavDropdown.Item>
//                                     </NavDropdown>
//                                     <li className="nav-item">
//                                         <a href="/cart" className="nav-link">
//                                             <FaShoppingCart />
//                                         </a>
//                                     </li>
//                                     <li className="nav-item">
//                                         <Link to={"/account/" + currentUser.email} className="nav-link">
//                                             {currentUser.username}
//                                         </Link>
//                                     </li>

//                                     <li className="nav-item ">
//                                         <a href="/" className="nav-link" onClick={this.logOut}>
//                                             Log out
//                                         </a>
//                                     </li>
//                                 </div>
//                             ) : (
//                                     <div className="navbar-nav">
//                                         <li className="nav-item">
//                                             <Link to={"/login"} className="nav-link">
//                                                 Login
//                                             </Link>
//                                         </li>

//                                         <li className="nav-item">
//                                             <Link to={"/register"} className="nav-link">
//                                                 Sign Up
//                                             </Link>
//                                         </li>

//                                     </div>
//                                 )}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//                 <Navbar bg="light" variant="light">
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link href="/posts">Posts</Nav.Link>
//                             {currentUser ? (
//                                 <div className="navbar-nav">
//                             <Nav.Link href="/onlineShop">Online shop</Nav.Link>
//                             <Nav.Link href="/webS">Web socket</Nav.Link>
//                             </div> 
//                             ) : (
//                                 <div className="navbar-nav">
//                             <div class="md-form mt-0">
//                             </div>
//                             </div>
//                             )}
//                             <Nav.Link type="submit" class="btn btn-info" role="button" href="mailto:jakitoo99@gmail.com">Contact</Nav.Link>

//                         </Nav>
//                     </Navbar.Collapse></Navbar></>
//                     );
//                 }
//               }