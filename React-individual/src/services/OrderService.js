import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class OrderService {
  getAllPending() {
    return http.get("/order/pending",  { headers: authHeader() });
  }
  getAllDelivered() {
    return http.get(`/order/delivered`,  { headers: authHeader() });
  }
  getAllCancelled() {
    return http.get(`/order/cancelled`,  { headers: authHeader() });
  }
  getById(id) {
    return http.get(`/order/${id}`,  { headers: authHeader() });
  }
  getAllProducts() {
    return http.get(`/product/all`,  { headers: authHeader() });
  }
  addNewOrder(data) {
    console.log(data);
    return http.post("/order/add", data,  { headers: authHeader() });
  }
  submitOrder(data) {
    //alert( user.id+user.username+user.email+user.password+user.roles);
    //const userR=JSON.stringify(user.id+user.username+user.email+user.password+user.roles);
    return http.post("/order/submitOrder", { data},  { headers: authHeader() });
  }
  update(id, data) {
    return http.put(`/order/${id}/update`, data, { headers: authHeader() });
  }


  delete(order) {
    return this.get(order.id).then(result => {
      if (order.id == result.data.id) {
        return http.delete(`/order/${order.id}/delete`, { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }
}

export default new OrderService();
