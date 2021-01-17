import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class ProductService {
  getAll() {
    return http.get("/product/all",  { headers: authHeader() });
  }
  get(name) {
    return http.get(`/product/${name}`,  { headers: authHeader() });
  }
  getById(id) {
    return http.get(`/product/${id}/getById`,  { headers: authHeader() });
  }
  getAllCategories() {
    return http.get(`/category/all`,  { headers: authHeader() });
  }
  create(data) {
    console.log(data);
    return http.post("/product/add", data,  { headers: authHeader() });
  }

  update(productId, data) {
    return http.put(`/product/${productId}/update`, data, { headers: authHeader() });
  }

  // findByName(name){
  //   return http.get(`/product/${name}`,  { headers: authHeader() });
  // }
  delete(productId, data) {
    return http.delete(`/product/${productId}/delete`, data, { headers: authHeader() });
  }
  deleteAll() {
    return http.delete(`/product/deleteAll`);
  }
 
}

export default new ProductService();
