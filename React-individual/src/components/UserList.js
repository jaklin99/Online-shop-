import React, { Component } from "react";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table"
import {TableBody, TableCell } from "semantic-ui-react";
import CustomFooter from "../Footer";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.removeAllUsers = this.removeAllUsers.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveUsers();
  }

  retrieveUsers() {
    UserService.getAll()
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveUsers();
    this.setState({
      currentUser: null,
      currentIndex: -1,
    });
  }

  setActiveUser(user, index) {
    this.setState({
      currentUser: user,
      currentIndex: index,
    });
  }

  removeAllUsers() {
    UserService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render(){
  const {users, currentUser, currentIndex } = this.state;

  return (<>
    <Table  style={{width:"60%", marginLeft:"20%", marginTop: "1cm"}} striped bordered hover variant="dark">
       <thead>
  <tr>
    <th>Username</th>
    <th>Email</th>
    <th><button
          className="btn btn-sm btn-danger"
          onClick={this.removeAllusers}
        >
          Remove All
        </button></th>
  </tr>
</thead>
{users.map(user=>(
<TableBody>
<tr key={user.id} >
    <TableCell>{user.username}
    </TableCell><TableCell>
      <td> Email: {user.email}</td> 
      </TableCell>
          {/* <Button className="btn btn-sm btn-danger"> */}
          <TableCell>
      <Link
              // to={"/user/" + currentuser.userName}
              className="btn btn-sm btn-warning" role="button"
            >
              Edit
            </Link>
            </TableCell>
            {/* </Button> */}
            <TableCell>
             <Link
              // to={"/user/" + currentuser.userName}
              className="btn btn-sm btn-danger" role="button"
            >
              Delete
            </Link></TableCell>
    </tr>
  </TableBody>

))}
    </Table><CustomFooter /></>
  // render() {
  //   const { users, currentUser, currentIndex } = this.state;

  //   return (
  //     <div className="list row">
  //       <div className="col-md-6">
  //         <h4>Users List</h4>

  //         <ul className="list-group">
  //           {users &&
  //             users.map((user, index) => (
  //               <li
  //                 className={
  //                   "list-group-item " +
  //                   (index === currentIndex ? "active" : "")
  //                 }
  //                 onClick={() => this.setActiveUser(user, index)}
  //                 key={index}
  //               >
  //                 {user.username}
  //               </li>
  //             ))}
  //         </ul>

  //         <button
  //           className="m-3 btn btn-sm btn-danger"
  //           onClick={this.removeAllUsers}
  //         >
  //           Remove All
  //         </button>
  //       </div>
  //       <div className="col-md-6">
  //         {currentUser ? (
  //           <div>
  //             <h4>User</h4>
  //             <div>
  //               <label>
  //                 <strong>Name:</strong>
  //               </label>{" "}
  //               {currentUser.username}
  //             </div>
  //             <div>
  //               <label>
  //                 <strong>Email:</strong>
  //               </label>{" "}
  //               {currentUser.email}
  //             </div>

  //             <Link
  //               to={"/user/" + currentUser.email}
  //               className="badge badge-warning"
  //             >
  //               Edit
  //             </Link>
  //           </div>
  //         ) : (
  //             <div>
  //               <br />
  //               <p>Please click on a user...</p>
  //             </div>
  //           )}
  //       </div>
  //     </div>
    );
  }
}
