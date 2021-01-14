import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class ProductService {
  getAll() {
    return http.get("/product/all",  { headers: authHeader() });
  }
  get(name) {
    return http.get(`/product/${name}`,  { headers: authHeader() });
  }
  getByName(name) {
    return http.get(`/product/${name}/getByName`,  { headers: authHeader() });
  }
  getAllCategories() {
    return http.get(`/category/all`,  { headers: authHeader() });
  }
  create(data) {
    console.log(data);
    return http.post("/product/add", data,  { headers: authHeader() });
  }

  update(productName, data) {
    return http.put(`/product/${productName}/update`, data, { headers: authHeader() });
  }

  // findByName(name){
  //   return http.get(`/product/${name}`,  { headers: authHeader() });
  // }
  delete(product) {
    return this.get(product.productName).then(result => {
      if (product.productName == result.data.productName && product.price == result.data.price && product.category == result.data.category) {
        return http.delete(`/product/${product.productName}/delete`, { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }
  deleteAll() {
    return http.delete(`/product/deleteAll`);
  }
 
}

export default new ProductService();
