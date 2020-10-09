import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/user/all");
  }
  get(id) {
    return http.get(`/user/${id}`);
  }
  create(data) {
    return http.post("/user/add", data);
  }

  update(id, data) {
    return http.put(`/user/${id}/update`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}/delete`);
  }
  deleteAll() {
    return http.delete(`/users`);
  }
  findByName(name) {
    return http.get(`/user?name=${name}`);
  }
}

export default new UserService();
