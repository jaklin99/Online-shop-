import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class ProductService {
  getOrderDetails(orderNr) {
    return http.get(`/orderDetails/${orderNr}/details`,  { headers: authHeader() });
  }
  addToCart(data) {
    console.log(data);
    return http.post("/orderDetails/addProductToCart", data,  { headers: authHeader() });
  }
  delete(order) {
    return this.get(order.id).then(result => {
      if (order.id == result.data.id) {
        return http.delete(`/orderDetails/deleteProduct/${order.id}`, { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }
}

export default new ProductService();
