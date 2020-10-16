import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/user/all");
  }
  get(email) {
    return http.get(`/user/${email}`);
  }
  create(data) {
    return http.post("/user/add", data);
  }

  update(user, data) { 
    return this.get(user.email).then(result=>{
    if(user.email == result.data.email && user.password == result.data.password && user.name == result.data.name){
      return http.put(`/user/${user.email}/update`, data);
    }else{
     throw new Error("Wrong credentials")
    }
  });
    
  }

  delete(user) {
   return this.get(user.email).then(result=>{
     if(user.email == result.data.email && user.password== result.data.password && user.name == result.data.name){
      return http.delete(`/user/${user.email}/delete`);
     }else{
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
