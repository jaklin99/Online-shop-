import http from "../http-common";

class ProductService {
  getAll() {
    return http.get("/prpduct/all");
  }
  get(name) {
    return http.get(`/product/${name}`);
  }
  create(data) {
    return http.post("/product/add", data);
  }

  update(product, data) { return this.get(product.name).then(result=>{
    if(product.name == result.data.name){
   return http.put(`/product/${product.name}/update`, data);
  }else{
    throw new Error("Wrong information")
   }
 });
}

  delete(product) {
   return this.get(product.name).then(result=>{
     if(product.name == result.data.name && product.price == result.data.price && product.category == result.data.category){
      return http.delete(`/product/${product.name}/delete`);
     }else{
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
