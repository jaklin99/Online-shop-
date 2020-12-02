import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class CategoryService {
  getAll() {
    return http.get("/category/all",  { headers: authHeader() });
  }
  get(name) {
    return http.get(`/category/${name}`,  { headers: authHeader() });
  }
  create(data) {
    console.log(data);
    return http.post("/category/add", data,  { headers: authHeader() });
  }

  update(category, data) {
    return this.get(category.categoryName).then(result => {
      if (category.categoryName == result.data.name) {
        return http.put(`/category/${category.categoryName}/update`, data,  { headers: authHeader() });
      } else {
        throw new Error("Wrong information")
      }
    });
  }

  delete(category) {
    return this.get(category.name).then(result => {
      if (category.name == result.data.name && category.price == result.data.price && category.category == result.data.category) {
        return http.delete(`/category/${category.name}/delete`, { headers: authHeader() });
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
