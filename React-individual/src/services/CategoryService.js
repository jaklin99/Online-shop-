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

  update(id, data) {
    return http.put(`/category/${id}/update`, data, { headers: authHeader() });
  }

  delete(category) {
    return this.get(category.categoryId).then(result => {
      if (category.categoryId == result.data.categoryId){
      return http.delete(`/category/${category.categoryId}/delete`, { headers: authHeader() });
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
