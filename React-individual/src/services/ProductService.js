import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class ProductService {
  getAll() {
    return http.get("/product/all",  { headers: authHeader() });
  }
  get(name) {
    return http.get(`/product/${name}`,  { headers: authHeader() });
  }
  getAllCategories() {
    return http.get(`/category/all`,  { headers: authHeader() });
  }
  create(data) {
    console.log(data);
    return http.post("/product/add", data,  { headers: authHeader() });
  }

  update(product, data) {
    return this.get(product.name).then(result => {
      if (product.name == result.data.name) {
        return http.put(`/product/${product.name}/update`, data,  { headers: authHeader() });
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
    return http.delete(`/product/deleteAll`);
  }
  //TO DO: finish the find product
  findByName(name) {
    return http.get(`/product?name=${name}`);
  }
}

export default new ProductService();
