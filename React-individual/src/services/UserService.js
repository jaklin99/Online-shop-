import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class UserService {
  getAll() {
    return http.get("/user/all", { headers: authHeader() });
  }
  get(email) {
    return http.get(`/user/${email}`, { headers: authHeader() });
  }
  create(data) {
    return http.post("/user/add", data, { headers: authHeader() });
  }

  update(email, data) {
    return http.put(`/user/${email}/update`, data, { headers: authHeader() });
  }


  delete(user) {
    return this.get(user.email).then(result => {
      if (user.email == result.data.email && user.password == result.data.password && user.name == result.data.name) {
        return http.delete(`/user/${user.email}/delete`, { headers: authHeader() });
      } else {
        throw new Error("Wrong credentials")
      }
    });
  }
  deleteAll() {
    return http.delete(`/user/deleteAll`);
  }
  //TO DO: finish the find user
  findByName(name) {
    return http.get(`/user?name=${name}`);
  }
}

export default new UserService();
