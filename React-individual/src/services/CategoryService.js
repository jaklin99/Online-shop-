import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class CategoryService {
  getAll() {
    return http.get("/category/all",  { headers: authHeader() });
  }
  get(id) {
    return http.get(`/category/${id}`,  { headers: authHeader() });
  }
  create(data) {
    console.log(data);
    return http.post("/category/add", data,  { headers: authHeader() });
  }

  update(product, data) {
    return this.get(product.productName).then(result => {
      if (product.productName == result.data.name) {
        return http.put(`/category/${product.productName}/update`, data,  { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }

  delete(product) {
    return this.get(product.name).then(result => {
      if (product.name == result.data.name && product.price == result.data.price && product.category == result.data.category) {
        return http.delete(`/product/${product.name}/delete`, { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }
  deleteAll() {
    return http.delete(`/category/deleteAll`);
  }
}

export default new CategoryService();
