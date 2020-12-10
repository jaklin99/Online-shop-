import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class ProductService {
  getAll() {
    return http.get("/order/all",  { headers: authHeader() });
  }
  get(orderNr) {
    return http.get(`/order/${orderNr}`,  { headers: authHeader() });
  }
  getAllProducts() {
    return http.get(`/product/all`,  { headers: authHeader() });
  }
  addToCart(data) {
    console.log(data);
    return http.post("/orderDetails/addProductToCart", data,  { headers: authHeader() });
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
  deleteAll() {
    return http.delete(`/order/deleteAll`);
  }
 
}

export default new ProductService();
